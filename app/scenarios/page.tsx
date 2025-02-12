'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { IconChartLine, IconPlus } from '@tabler/icons-react';
import Sidebar from '../components/Sidebar';

interface Scenario {
    id: string;
    name: string;
    description: string;
    status: 'running' | 'completed' | 'failed';
    type: string;
    lastRun: string;
    performance: number;
}

const scenarios: Scenario[] = [
    {
        id: '1',
        name: 'Bull Market Strategy',
        description: 'Aggressive long positions during upward trends',
        status: 'completed',
        type: 'Trend Following',
        lastRun: '2 hours ago',
        performance: 12.5,
    },
    {
        id: '2',
        name: 'Volatility Arbitrage',
        description: 'Exploit price differences across exchanges',
        status: 'running',
        type: 'Arbitrage',
        lastRun: 'Running now',
        performance: 8.3,
    },
    {
        id: '3',
        name: 'Mean Reversion',
        description: 'Capitalize on price reversions to the mean',
        status: 'failed',
        type: 'Mean Reversion',
        lastRun: '1 day ago',
        performance: -2.1,
    },
];

export default function ScenariosPage() {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />

            <div className="flex-1 p-8 space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-semibold text-foreground">Trading Scenarios</h1>
                    <p className="text-muted-foreground">
                        Create and manage trading scenarios for backtesting
                    </p>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                    <Button className="gap-2" variant="secondary">
                        <IconPlus className="h-4 w-4" />
                        New Scenario
                    </Button>
                    <Button variant="outline" className="border-0">Import History</Button>
                </div>

                {/* Scenarios Table */}
                <Card className="border-0 bg-card">
                    <CardHeader>
                        <CardTitle className="text-base font-medium text-card-foreground">Active Scenarios</CardTitle>
                        <CardDescription className="text-muted-foreground">
                            View and manage your trading scenarios and their performance
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow className="border-border hover:bg-muted/50">
                                    <TableHead className="text-muted-foreground">Name</TableHead>
                                    <TableHead className="text-muted-foreground">Type</TableHead>
                                    <TableHead className="text-muted-foreground">Status</TableHead>
                                    <TableHead className="text-muted-foreground">Last Run</TableHead>
                                    <TableHead className="text-muted-foreground">Performance</TableHead>
                                    <TableHead className="text-right text-muted-foreground">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {scenarios.map((scenario) => (
                                    <TableRow key={scenario.id} className="border-border hover:bg-muted/50">
                                        <TableCell className="font-medium text-card-foreground">
                                            <div className="flex items-center gap-2">
                                                <IconChartLine className="h-4 w-4 text-muted-foreground" />
                                                <div>
                                                    <div>{scenario.name}</div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {scenario.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">{scenario.type}</TableCell>
                                        <TableCell>
                                            <div
                                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${scenario.status === 'completed'
                                                        ? 'bg-green-500/10 text-green-400'
                                                        : scenario.status === 'running'
                                                            ? 'bg-blue-500/10 text-blue-400'
                                                            : 'bg-red-500/10 text-red-400'
                                                    }`}
                                            >
                                                {scenario.status}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">{scenario.lastRun}</TableCell>
                                        <TableCell>
                                            <span
                                                className={
                                                    scenario.performance > 0
                                                        ? 'text-green-400'
                                                        : 'text-red-400'
                                                }
                                            >
                                                {scenario.performance > 0 ? '+' : ''}
                                                {scenario.performance}%
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                View Details
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="border-0 bg-card">
                    <CardHeader>
                        <CardTitle className="text-base font-medium text-card-foreground">Recent Activity</CardTitle>
                        <CardDescription className="text-muted-foreground">Latest updates from your scenarios</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[200px]">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-green-400" />
                                    <div>
                                        <p className="text-sm text-card-foreground">Bull Market Strategy completed successfully</p>
                                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                                    <div>
                                        <p className="text-sm text-card-foreground">Volatility Arbitrage scenario started</p>
                                        <p className="text-xs text-muted-foreground">3 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-red-400" />
                                    <div>
                                        <p className="text-sm text-card-foreground">Mean Reversion scenario failed</p>
                                        <p className="text-xs text-muted-foreground">1 day ago</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
