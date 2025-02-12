'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { IconKey, IconPlus } from '@tabler/icons-react';
import Sidebar from '../components/Sidebar';

interface ApiKey {
    id: string;
    name: string;
    lastUsed: string;
    status: 'active' | 'expired';
    type: string;
}

interface DataSource {
    id: string;
    name: string;
    type: string;
    status: 'connected' | 'disconnected';
    lastSync: string;
}

const apiKeys: ApiKey[] = [
    {
        id: '1',
        name: 'OpenAI Production',
        lastUsed: '2 hours ago',
        status: 'active',
        type: 'LLM',
    },
    {
        id: '2',
        name: 'Binance API',
        lastUsed: '5 mins ago',
        status: 'active',
        type: 'Exchange',
    },
    {
        id: '3',
        name: 'Anthropic Dev',
        lastUsed: '1 day ago',
        status: 'expired',
        type: 'LLM',
    },
];

const dataSources: DataSource[] = [
    {
        id: '1',
        name: 'Twitter Feed',
        type: 'Social Media',
        status: 'connected',
        lastSync: '1 min ago',
    },
    {
        id: '2',
        name: 'Reddit r/Bitcoin',
        type: 'Social Media',
        status: 'connected',
        lastSync: '5 mins ago',
    },
    {
        id: '3',
        name: 'Binance Order Book',
        type: 'Market Data',
        status: 'connected',
        lastSync: 'Just now',
    },
    {
        id: '4',
        name: 'Discord Server',
        type: 'Social Media',
        status: 'disconnected',
        lastSync: '1 day ago',
    },
];

export default function ResourcesPage() {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />

            <div className="flex-1 p-8 space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-semibold text-foreground">Resources</h1>
                    <p className="text-muted-foreground">
                        Manage your API keys, data sources, and model configurations
                    </p>
                </div>

                {/* API Keys Section */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-foreground">API Keys</h2>
                        <Button className="gap-2" variant="secondary">
                            <IconPlus className="h-4 w-4" />
                            Add Key
                        </Button>
                    </div>
                    <Card className="border-0 bg-card">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-border hover:bg-muted/50">
                                    <TableHead className="text-muted-foreground">Name</TableHead>
                                    <TableHead className="text-muted-foreground">Type</TableHead>
                                    <TableHead className="text-muted-foreground">Last Used</TableHead>
                                    <TableHead className="text-muted-foreground">Status</TableHead>
                                    <TableHead className="text-right text-muted-foreground">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {apiKeys.map((key) => (
                                    <TableRow key={key.id} className="border-border hover:bg-muted/50">
                                        <TableCell className="font-medium text-card-foreground">
                                            <div className="flex items-center gap-2">
                                                <IconKey className="h-4 w-4 text-muted-foreground" />
                                                {key.name}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">{key.type}</TableCell>
                                        <TableCell className="text-muted-foreground">{key.lastUsed}</TableCell>
                                        <TableCell>
                                            <div
                                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${key.status === 'active'
                                                        ? 'bg-green-500/10 text-green-400'
                                                        : 'bg-yellow-500/10 text-yellow-400'
                                                    }`}
                                            >
                                                {key.status}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                Revoke
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>

                {/* Data Sources Section */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-foreground">Data Sources</h2>
                        <Button className="gap-2" variant="secondary">
                            <IconPlus className="h-4 w-4" />
                            Add Source
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dataSources.map((source) => (
                            <Card key={source.id} className="border-0 bg-card hover:bg-muted/50 transition-colors">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-base font-medium text-card-foreground">
                                                {source.name}
                                            </CardTitle>
                                            <CardDescription className="text-muted-foreground">
                                                {source.type}
                                            </CardDescription>
                                        </div>
                                        <div
                                            className={`px-2 py-1 rounded-full text-xs ${source.status === 'connected'
                                                    ? 'bg-green-500/10 text-green-400'
                                                    : 'bg-red-500/10 text-red-400'
                                                }`}
                                        >
                                            {source.status}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">
                                            Last sync: {source.lastSync}
                                        </span>
                                        <Button variant="ghost" size="sm">
                                            Configure
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
