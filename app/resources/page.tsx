'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
        <div className="flex h-screen bg-background" data-oid="93dmdba">
            <Sidebar data-oid="5l..wu3" />

            <div className="flex-1 p-8 space-y-8" data-oid="exleasd">
                {/* Header */}
                <div data-oid="6q_jr0y">
                    <h1 className="text-2xl font-semibold text-foreground" data-oid="x-:qm-q">
                        Resources
                    </h1>
                    <p className="text-muted-foreground" data-oid=":-_zsw0">
                        Manage your API keys, data sources, and model configurations
                    </p>
                </div>

                {/* API Keys Section */}
                <div data-oid="y8_gk1d">
                    <div className="flex justify-between items-center mb-4" data-oid="xzy506y">
                        <h2 className="text-lg font-semibold text-foreground" data-oid="08fbt0t">
                            API Keys
                        </h2>
                        <Button className="gap-2" variant="secondary" data-oid="jpq.t8h">
                            <IconPlus className="h-4 w-4" data-oid="ja12gny" />
                            Add Key
                        </Button>
                    </div>
                    <Card className="border-0 bg-card" data-oid="g-t-g8w">
                        <Table data-oid="kirh1fl">
                            <TableHeader data-oid="4av6qd3">
                                <TableRow
                                    className="border-border hover:bg-muted/50"
                                    data-oid="eshs96w"
                                >
                                    <TableHead className="text-muted-foreground" data-oid="dzaviu:">
                                        Name
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="o:.n980">
                                        Type
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="a9:oz0v">
                                        Last Used
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="w:ua45h">
                                        Status
                                    </TableHead>
                                    <TableHead
                                        className="text-right text-muted-foreground"
                                        data-oid="0a3ye6i"
                                    >
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody data-oid="57as188">
                                {apiKeys.map((key) => (
                                    <TableRow
                                        key={key.id}
                                        className="border-border hover:bg-muted/50"
                                        data-oid="tfolpml"
                                    >
                                        <TableCell
                                            className="font-medium text-card-foreground"
                                            data-oid="nd_h86b"
                                        >
                                            <div
                                                className="flex items-center gap-2"
                                                data-oid="8uug.sw"
                                            >
                                                <IconKey
                                                    className="h-4 w-4 text-muted-foreground"
                                                    data-oid="n_dvg7m"
                                                />

                                                {key.name}
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            className="text-muted-foreground"
                                            data-oid="rs46i9o"
                                        >
                                            {key.type}
                                        </TableCell>
                                        <TableCell
                                            className="text-muted-foreground"
                                            data-oid=".9p8q-6"
                                        >
                                            {key.lastUsed}
                                        </TableCell>
                                        <TableCell data-oid="z3rjy0f">
                                            <div
                                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                                                    key.status === 'active'
                                                        ? 'bg-green-500/10 text-green-400'
                                                        : 'bg-yellow-500/10 text-yellow-400'
                                                }`}
                                                data-oid="a-:h2tj"
                                            >
                                                {key.status}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right" data-oid="xzah7-g">
                                            <Button variant="ghost" size="sm" data-oid="c06-0mp">
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
                <div data-oid="r.1fnel">
                    <div className="flex justify-between items-center mb-4" data-oid="izfo3ki">
                        <h2 className="text-lg font-semibold text-foreground" data-oid="8w_s67k">
                            Data Sources
                        </h2>
                        <Button className="gap-2" variant="secondary" data-oid="zyl-yx1">
                            <IconPlus className="h-4 w-4" data-oid="lo84hep" />
                            Add Source
                        </Button>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        data-oid="g2b-e5e"
                    >
                        {dataSources.map((source) => (
                            <Card
                                key={source.id}
                                className="border-0 bg-card hover:bg-muted/50 transition-colors"
                                data-oid="8fwwitl"
                            >
                                <CardHeader data-oid="v4euum9">
                                    <div
                                        className="flex justify-between items-start"
                                        data-oid="cct54zs"
                                    >
                                        <div data-oid="fzcg3j8">
                                            <CardTitle
                                                className="text-base font-medium text-card-foreground"
                                                data-oid="h8-2_9v"
                                            >
                                                {source.name}
                                            </CardTitle>
                                            <CardDescription
                                                className="text-muted-foreground"
                                                data-oid="xu.m:bc"
                                            >
                                                {source.type}
                                            </CardDescription>
                                        </div>
                                        <div
                                            className={`px-2 py-1 rounded-full text-xs ${
                                                source.status === 'connected'
                                                    ? 'bg-green-500/10 text-green-400'
                                                    : 'bg-red-500/10 text-red-400'
                                            }`}
                                            data-oid="p7_8.yg"
                                        >
                                            {source.status}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent data-oid=".7b8gql">
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="bs9qbro"
                                    >
                                        <span
                                            className="text-sm text-muted-foreground"
                                            data-oid="4u63wqk"
                                        >
                                            Last sync: {source.lastSync}
                                        </span>
                                        <Button variant="ghost" size="sm" data-oid="ydb0.rt">
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
