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
    IconTools
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
        icon: <IconChartBar className="h-5 w-5" />,
    },
    {
        id: '2',
        name: 'Strategy Backtester',
        description: 'Historical data backtesting engine with performance metrics',
        category: 'Backtesting',
        status: 'active',
        lastUsed: '1 hour ago',
        language: 'Python',
        icon: <IconGraph className="h-5 w-5" />,
    },
    {
        id: '3',
        name: 'Algorithm Builder',
        description: 'Visual programming interface for creating trading algorithms',
        category: 'Development',
        status: 'beta',
        lastUsed: '2 days ago',
        language: 'TypeScript',
        icon: <IconCode className="h-5 w-5" />,
    },
    {
        id: '4',
        name: 'Performance Optimizer',
        description: 'ML-based strategy optimization and parameter tuning',
        category: 'Analysis',
        status: 'beta',
        lastUsed: '3 hours ago',
        language: 'Python',
        icon: <IconGauge className="h-5 w-5" />,
    },
    {
        id: '5',
        name: 'Risk Calculator',
        description: 'Position sizing and risk management calculator',
        category: 'Execution',
        status: 'active',
        lastUsed: 'Just now',
        language: 'TypeScript',
        icon: <IconCalculator className="h-5 w-5" />,
    },
    {
        id: '6',
        name: 'Trading Bot Framework',
        description: 'Framework for building and deploying automated trading bots',
        category: 'Development',
        status: 'active',
        lastUsed: '1 day ago',
        language: 'Python',
        icon: <IconRobot className="h-5 w-5" />,
    },
];

const categories = [
    {
        name: 'Analysis',
        description: 'Tools for market analysis and data visualization',
        icon: <IconChartBar className="h-5 w-5" />,
    },
    {
        name: 'Development',
        description: 'Development environments and frameworks',
        icon: <IconCode className="h-5 w-5" />,
    },
    {
        name: 'Execution',
        description: 'Order execution and risk management',
        icon: <IconArrowsExchange className="h-5 w-5" />,
    },
    {
        name: 'Backtesting',
        description: 'Strategy testing and optimization',
        icon: <IconGraph className="h-5 w-5" />,
    },
];

export default function ToolsPage() {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />

            <div className="flex-1 p-8 space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-semibold text-foreground">Trading Tools</h1>
                    <p className="text-muted-foreground">
                        Powerful tools for market analysis and algorithmic trading
                    </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <Card key={category.name} className="border-0 bg-card hover:bg-muted/50 transition-colors">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <div className="text-primary">{category.icon}</div>
                                    <CardTitle className="text-base font-medium text-card-foreground">
                                        {category.name}
                                    </CardTitle>
                                </div>
                                <CardDescription className="text-muted-foreground">
                                    {category.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                {/* Tools Table */}
                <Card className="border-0 bg-card">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <IconTools className="h-5 w-5 text-primary" />
                                <div>
                                    <CardTitle className="text-base font-medium text-card-foreground">
                                        Available Tools
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        Browse and access trading tools
                                    </CardDescription>
                                </div>
                            </div>
                            <Button variant="secondary" className="gap-2">
                                <IconTerminal2 className="h-4 w-4" />
                                Open Console
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow className="border-border hover:bg-muted/50">
                                    <TableHead className="text-muted-foreground">Name</TableHead>
                                    <TableHead className="text-muted-foreground">Category</TableHead>
                                    <TableHead className="text-muted-foreground">Status</TableHead>
                                    <TableHead className="text-muted-foreground">Language</TableHead>
                                    <TableHead className="text-muted-foreground">Last Used</TableHead>
                                    <TableHead className="text-right text-muted-foreground">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tools.map((tool) => (
                                    <TableRow key={tool.id} className="border-border hover:bg-muted/50">
                                        <TableCell className="font-medium text-card-foreground">
                                            <div className="flex items-center gap-2">
                                                <div className="text-primary">{tool.icon}</div>
                                                <div>
                                                    <div>{tool.name}</div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {tool.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">{tool.category}</TableCell>
                                        <TableCell>
                                            <div
                                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${tool.status === 'active'
                                                    ? 'bg-green-500/10 text-green-400'
                                                    : tool.status === 'beta'
                                                        ? 'bg-blue-500/10 text-blue-400'
                                                        : 'bg-yellow-500/10 text-yellow-400'
                                                    }`}
                                            >
                                                {tool.status}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                <IconBrandPython className="h-4 w-4" />
                                                {tool.language}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">{tool.lastUsed}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
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
                <Card className="border-0 bg-card">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <IconCpu className="h-5 w-5 text-primary" />
                            <div>
                                <CardTitle className="text-base font-medium text-card-foreground">
                                    System Status
                                </CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    Resource usage and performance metrics
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-1">
                                <div className="text-sm font-medium text-card-foreground">CPU Usage</div>
                                <div className="text-2xl font-bold text-primary">45%</div>
                                <div className="text-xs text-muted-foreground">4 cores active</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-sm font-medium text-card-foreground">Memory Usage</div>
                                <div className="text-2xl font-bold text-primary">2.4 GB</div>
                                <div className="text-xs text-muted-foreground">8 GB total</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-sm font-medium text-card-foreground">Active Tools</div>
                                <div className="text-2xl font-bold text-primary">3</div>
                                <div className="text-xs text-muted-foreground">2 analysis, 1 execution</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
