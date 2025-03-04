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
import {
    IconArrowsExchange,
    IconBrandPython,
    IconCalculator,
    IconChartBar,
    IconCode,
    IconCpu,
    IconGauge,
    IconGraph,
    IconRobot,
    IconTerminal2,
    IconTools,
} from '@tabler/icons-react';
import Sidebar from '../components/Sidebar';

interface Tool {
    id: string;
    name: string;
    description: string;
    category: 'Analysis' | 'Development' | 'Execution' | 'Backtesting';
    status: 'active' | 'beta' | 'deprecated';
    lastUsed: string;
    language: string;
    icon: React.ReactNode;
}

const tools: Tool[] = [
    {
        id: '1',
        name: 'Market Data Analyzer',
        description: 'Advanced technical analysis and market data visualization tool',
        category: 'Analysis',
        status: 'active',
        lastUsed: '5 mins ago',
        language: 'Python',
        icon: <IconChartBar className="h-5 w-5" data-oid="y96:43n" />,
    },
    {
        id: '2',
        name: 'Strategy Backtester',
        description: 'Historical data backtesting engine with performance metrics',
        category: 'Backtesting',
        status: 'active',
        lastUsed: '1 hour ago',
        language: 'Python',
        icon: <IconGraph className="h-5 w-5" data-oid="wxzw_:g" />,
    },
    {
        id: '3',
        name: 'Algorithm Builder',
        description: 'Visual programming interface for creating trading algorithms',
        category: 'Development',
        status: 'beta',
        lastUsed: '2 days ago',
        language: 'TypeScript',
        icon: <IconCode className="h-5 w-5" data-oid="k.aaexh" />,
    },
    {
        id: '4',
        name: 'Performance Optimizer',
        description: 'ML-based strategy optimization and parameter tuning',
        category: 'Analysis',
        status: 'beta',
        lastUsed: '3 hours ago',
        language: 'Python',
        icon: <IconGauge className="h-5 w-5" data-oid="0hg-y3d" />,
    },
    {
        id: '5',
        name: 'Risk Calculator',
        description: 'Position sizing and risk management calculator',
        category: 'Execution',
        status: 'active',
        lastUsed: 'Just now',
        language: 'TypeScript',
        icon: <IconCalculator className="h-5 w-5" data-oid="xazuwtu" />,
    },
    {
        id: '6',
        name: 'Trading Bot Framework',
        description: 'Framework for building and deploying automated trading bots',
        category: 'Development',
        status: 'active',
        lastUsed: '1 day ago',
        language: 'Python',
        icon: <IconRobot className="h-5 w-5" data-oid=".7bi95j" />,
    },
];

const categories = [
    {
        name: 'Analysis',
        description: 'Tools for market analysis and data visualization',
        icon: <IconChartBar className="h-5 w-5" data-oid="z3hagwl" />,
    },
    {
        name: 'Development',
        description: 'Development environments and frameworks',
        icon: <IconCode className="h-5 w-5" data-oid="_bd6o1m" />,
    },
    {
        name: 'Execution',
        description: 'Order execution and risk management',
        icon: <IconArrowsExchange className="h-5 w-5" data-oid="5h3gte_" />,
    },
    {
        name: 'Backtesting',
        description: 'Strategy testing and optimization',
        icon: <IconGraph className="h-5 w-5" data-oid="s9ddjml" />,
    },
];

export default function ToolsPage() {
    return (
        <div className="flex h-screen bg-background" data-oid="l._88op">
            <Sidebar data-oid="yqc21cg" />

            <div className="flex-1 p-8 space-y-8" data-oid="syzpbkd">
                {/* Header */}
                <div data-oid="9d:dg2e">
                    <h1 className="text-2xl font-semibold text-foreground" data-oid="6s3:3uv">
                        Trading Tools
                    </h1>
                    <p className="text-muted-foreground" data-oid="f5e5uw.">
                        Powerful tools for market analysis and algorithmic trading
                    </p>
                </div>

                {/* Categories */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    data-oid="-0a60id"
                >
                    {categories.map((category) => (
                        <Card
                            key={category.name}
                            className="border-0 bg-card hover:bg-muted/50 transition-colors"
                            data-oid="whj7:rs"
                        >
                            <CardHeader data-oid="j2m_juq">
                                <div className="flex items-center gap-2" data-oid="t_l4j9s">
                                    <div className="text-primary" data-oid="lr::xln">
                                        {category.icon}
                                    </div>
                                    <CardTitle
                                        className="text-base font-medium text-card-foreground"
                                        data-oid="l8qz-dl"
                                    >
                                        {category.name}
                                    </CardTitle>
                                </div>
                                <CardDescription
                                    className="text-muted-foreground"
                                    data-oid="90ivp8h"
                                >
                                    {category.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                {/* Tools Table */}
                <Card className="border-0 bg-card" data-oid=".8x43xf">
                    <CardHeader data-oid="aj46koy">
                        <div className="flex items-center justify-between" data-oid="hn0cw8z">
                            <div className="flex items-center gap-2" data-oid="bsto8k.">
                                <IconTools className="h-5 w-5 text-primary" data-oid="ywskdqd" />
                                <div data-oid="tn58l4b">
                                    <CardTitle
                                        className="text-base font-medium text-card-foreground"
                                        data-oid="bjnybai"
                                    >
                                        Available Tools
                                    </CardTitle>
                                    <CardDescription
                                        className="text-muted-foreground"
                                        data-oid="ai4ha94"
                                    >
                                        Browse and access trading tools
                                    </CardDescription>
                                </div>
                            </div>
                            <Button variant="secondary" className="gap-2" data-oid="3wj1q-6">
                                <IconTerminal2 className="h-4 w-4" data-oid="ljd107." />
                                Open Console
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent data-oid="xrey3is">
                        <Table data-oid="48wq:27">
                            <TableHeader data-oid="k86lkn2">
                                <TableRow
                                    className="border-border hover:bg-muted/50"
                                    data-oid="7e9bkw7"
                                >
                                    <TableHead className="text-muted-foreground" data-oid="_tiov79">
                                        Name
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="f9:_fdh">
                                        Category
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="b.8bryd">
                                        Status
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="ogv.w:x">
                                        Language
                                    </TableHead>
                                    <TableHead className="text-muted-foreground" data-oid="0jfut8e">
                                        Last Used
                                    </TableHead>
                                    <TableHead
                                        className="text-right text-muted-foreground"
                                        data-oid="9:m652n"
                                    >
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody data-oid="6g53e44">
                                {tools.map((tool) => (
                                    <TableRow
                                        key={tool.id}
                                        className="border-border hover:bg-muted/50"
                                        data-oid=":eva46-"
                                    >
                                        <TableCell
                                            className="font-medium text-card-foreground"
                                            data-oid="w29znoo"
                                        >
                                            <div
                                                className="flex items-center gap-2"
                                                data-oid="9z7y1uj"
                                            >
                                                <div className="text-primary" data-oid="v8lkkss">
                                                    {tool.icon}
                                                </div>
                                                <div data-oid="5k_zodk">
                                                    <div data-oid="f9y79.h">{tool.name}</div>
                                                    <div
                                                        className="text-xs text-muted-foreground"
                                                        data-oid="73e4:z7"
                                                    >
                                                        {tool.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            className="text-muted-foreground"
                                            data-oid="3qywsmk"
                                        >
                                            {tool.category}
                                        </TableCell>
                                        <TableCell data-oid="6ij6q64">
                                            <div
                                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                                                    tool.status === 'active'
                                                        ? 'bg-green-500/10 text-green-400'
                                                        : tool.status === 'beta'
                                                          ? 'bg-blue-500/10 text-blue-400'
                                                          : 'bg-yellow-500/10 text-yellow-400'
                                                }`}
                                                data-oid=":hw6fh:"
                                            >
                                                {tool.status}
                                            </div>
                                        </TableCell>
                                        <TableCell data-oid="awuxkyt">
                                            <div
                                                className="flex items-center gap-1 text-muted-foreground"
                                                data-oid="_v4xjo-"
                                            >
                                                <IconBrandPython
                                                    className="h-4 w-4"
                                                    data-oid="_0fe1w_"
                                                />

                                                {tool.language}
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            className="text-muted-foreground"
                                            data-oid="_0qs7zv"
                                        >
                                            {tool.lastUsed}
                                        </TableCell>
                                        <TableCell className="text-right" data-oid="lpz8wt7">
                                            <Button variant="ghost" size="sm" data-oid="k8yn.8l">
                                                Launch
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* System Status */}
                <Card className="border-0 bg-card" data-oid="hz8igeh">
                    <CardHeader data-oid="5m6q2kg">
                        <div className="flex items-center gap-2" data-oid="yb6tw8g">
                            <IconCpu className="h-5 w-5 text-primary" data-oid="650e3y9" />
                            <div data-oid="k7hj2gs">
                                <CardTitle
                                    className="text-base font-medium text-card-foreground"
                                    data-oid="g-tnbxc"
                                >
                                    System Status
                                </CardTitle>
                                <CardDescription
                                    className="text-muted-foreground"
                                    data-oid="il2.4iv"
                                >
                                    Resource usage and performance metrics
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent data-oid="7liy4b3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-oid="zp_x-t1">
                            <div className="space-y-1" data-oid="pdejrgq">
                                <div
                                    className="text-sm font-medium text-card-foreground"
                                    data-oid="ro2_lo_"
                                >
                                    CPU Usage
                                </div>
                                <div className="text-2xl font-bold text-primary" data-oid="6t3ijie">
                                    45%
                                </div>
                                <div className="text-xs text-muted-foreground" data-oid="p:xdr49">
                                    4 cores active
                                </div>
                            </div>
                            <div className="space-y-1" data-oid="a1-p8:l">
                                <div
                                    className="text-sm font-medium text-card-foreground"
                                    data-oid="bu3.iym"
                                >
                                    Memory Usage
                                </div>
                                <div className="text-2xl font-bold text-primary" data-oid="1xworw6">
                                    2.4 GB
                                </div>
                                <div className="text-xs text-muted-foreground" data-oid="uafrr26">
                                    8 GB total
                                </div>
                            </div>
                            <div className="space-y-1" data-oid=":iedose">
                                <div
                                    className="text-sm font-medium text-card-foreground"
                                    data-oid="iwwpc0d"
                                >
                                    Active Tools
                                </div>
                                <div className="text-2xl font-bold text-primary" data-oid="rhb7ymm">
                                    3
                                </div>
                                <div className="text-xs text-muted-foreground" data-oid="5icvw::">
                                    2 analysis, 1 execution
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
