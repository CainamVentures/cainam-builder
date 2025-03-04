'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
        <div className="flex h-screen bg-background" data-oid="rgx_qvh">
            <Sidebar data-oid="oo3vca_" />

            <div className="flex-1 p-8 space-y-8" data-oid="0aoyqsn">
                {/* Header */}
                <div data-oid="r-fxk_5">
                    <h1 className="text-2xl font-semibold text-foreground" data-oid="5vz1.7l">
                        Trading Scenarios
                    </h1>
                    <p className="text-muted-foreground" data-oid="blg53ru">
                        Create and manage trading scenarios for backtesting
                    </p>
                </div>

                {/* Actions */}
                <div className="flex gap-4" data-oid=".5hw-v2">
                    <Button className="gap-2" variant="secondary" data-oid="5g2rwb8">
                        <IconPlus className="h-4 w-4" data-oid="4eldw29" />
                        New Scenario
                    </Button>
                    <Button variant="outline" className="border-0" data-oid="aa-:4f2">
                        Import History
                    </Button>
                </div>

                {/* Scenarios Table */}
                <Card className="border-0 bg-card" data-oid="ok:c8ok">
                    <CardHeader data-oid="1eudju-">
                        <CardTitle
                            className="text-base font-medium text-card-foreground"
                            data-oid="ngykr9o"
                        >
                            Active Scenarios
                        </CardTitle>
                        <CardDescription className="text-muted-foreground" data-oid="a2zd6zd">
                            View and manage your trading scenarios and their performance
                        </CardDescription>
                    </CardHeader>
                    <CardContent data-oid="y6inpmn">
                        <Table data-oid="7f_3o6r">
                            <TableHeader data-oid="csgh:dp">
                                <TableRow
                                    className="border-border hover:bg-muted/50"
                                    data-oid="ilz-f5b"
                                >
                                    <TableHead className="text-muted-foreground" data-oid="rmvb5pt">
                                        Name
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="93l9w12">
                                        Type
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="48gg93v">
                                        Status
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid=".5:fnzk">
                                        Last Run
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="pa.hn07">
                                        Performance
                                    </TableHead>
                                    <TableHead
                                        className="text-right text-muted-foreground"
                                        data-oid="g.wyuuh"
                                    >
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody data-oid="bgurv-h">
                                {scenarios.map((scenario) => (
                                    <TableRow
                                        key={scenario.id}
                                        className="border-border hover:bg-muted/50"
                                        data-oid="0-1auwn"
                                    >
                                        <TableCell
                                            className="font-medium text-card-foreground"
                                            data-oid="wmnt_gp"
                                        >
                                            <div
                                                className="flex items-center gap-2"
                                                data-oid="jzh32ek"
                                            >
                                                <IconChartLine
                                                    className="h-4 w-4 text-muted-foreground"
                                                    data-oid="t6j-el8"
                                                />

                                                <div data-oid="0wtcte8">
                                                    <div data-oid="14iu8t-">{scenario.name}</div>
                                                    <div
                                                        className="text-xs text-muted-foreground"
                                                        data-oid="sm1vta."
                                                    >
                                                        {scenario.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            className="text-muted-foreground"
                                            data-oid="yvbjoi_"
                                        >
                                            {scenario.type}
                                        </TableCell>
                                        <TableCell data-oid="nb69qeh">
                                            <div
                                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                                                    scenario.status === 'completed'
                                                        ? 'bg-green-500/10 text-green-400'
                                                        : scenario.status === 'running'
                                                          ? 'bg-blue-500/10 text-blue-400'
                                                          : 'bg-red-500/10 text-red-400'
                                                }`}
                                                data-oid="oq453aa"
                                            >
                                                {scenario.status}
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            className="text-muted-foreground"
                                            data-oid="ozr86u1"
                                        >
                                            {scenario.lastRun}
                                        </TableCell>
                                        <TableCell data-oid="er.rils">
                                            <span
                                                className={
                                                    scenario.performance > 0
                                                        ? 'text-green-400'
                                                        : 'text-red-400'
                                                }
                                                data-oid="1si__hv"
                                            >
                                                {scenario.performance > 0 ? '+' : ''}
                                                {scenario.performance}%
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right" data-oid="2b.d2wp">
                                            <Button variant="ghost" size="sm" data-oid="1zr.m0y">
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
                <Card className="border-0 bg-card" data-oid="8ivvr6h">
                    <CardHeader data-oid="j_ah9mr">
                        <CardTitle
                            className="text-base font-medium text-card-foreground"
                            data-oid="v8mskbp"
                        >
                            Recent Activity
                        </CardTitle>
                        <CardDescription className="text-muted-foreground" data-oid="gyvdp53">
                            Latest updates from your scenarios
                        </CardDescription>
                    </CardHeader>
                    <CardContent data-oid="7rhqtqn">
                        <ScrollArea className="h-[200px]" data-oid="v1s3bwc">
                            <div className="space-y-4" data-oid="nvf--2m">
                                <div className="flex items-center gap-4" data-oid="l-4:x_9">
                                    <div
                                        className="h-2 w-2 rounded-full bg-green-400"
                                        data-oid="ds83b9:"
                                    />

                                    <div data-oid="w4wcyn8">
                                        <p
                                            className="text-sm text-card-foreground"
                                            data-oid="9n8vp:t"
                                        >
                                            Bull Market Strategy completed successfully
                                        </p>
                                        <p
                                            className="text-xs text-muted-foreground"
                                            data-oid=":42hj7h"
                                        >
                                            2 hours ago
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4" data-oid="q7posdh">
                                    <div
                                        className="h-2 w-2 rounded-full bg-blue-400"
                                        data-oid="um._uzt"
                                    />

                                    <div data-oid="q1t:-oo">
                                        <p
                                            className="text-sm text-card-foreground"
                                            data-oid="d85x4h9"
                                        >
                                            Volatility Arbitrage scenario started
                                        </p>
                                        <p
                                            className="text-xs text-muted-foreground"
                                            data-oid="98ur0_r"
                                        >
                                            3 hours ago
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4" data-oid="__l2yoa">
                                    <div
                                        className="h-2 w-2 rounded-full bg-red-400"
                                        data-oid="2f:2ic9"
                                    />

                                    <div data-oid="wvlkka.">
                                        <p
                                            className="text-sm text-card-foreground"
                                            data-oid="cwuxdo7"
                                        >
                                            Mean Reversion scenario failed
                                        </p>
                                        <p
                                            className="text-xs text-muted-foreground"
                                            data-oid="ypyh74l"
                                        >
                                            1 day ago
                                        </p>
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
