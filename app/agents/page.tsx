'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

interface Agent {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'inactive';
    type: string;
}

const defaultAgents: Agent[] = [
    {
        id: '1',
        name: 'Customer Support Agent',
        description: 'Handles customer inquiries and support tickets automatically',
        status: 'active',
        type: 'Support',
    },
    {
        id: '2',
        name: 'Data Analysis Agent',
        description: 'Processes and analyzes large datasets for insights',
        status: 'active',
        type: 'Analytics',
    },
    {
        id: '3',
        name: 'Content Generator',
        description: 'Creates and optimizes content for various platforms',
        status: 'inactive',
        type: 'Content',
    },
];

export default function AgentsPage() {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-semibold text-foreground">AI Trading Agents</h1>
                        <p className="text-muted-foreground">Build and deploy specialized trading agents</p>
                    </div>
                    <Link href="/agents/builder">
                        <Button className="gap-2" variant="secondary">
                            <IconPlus className="h-4 w-4" />
                            Create Agent
                        </Button>
                    </Link>
                </div>

                {/* Deployed Agents */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {defaultAgents.map((agent) => (
                        <Link key={agent.id} href={`/agents/builder?id=${agent.id}`}>
                            <Card className="border-0 bg-card hover:bg-muted/50 transition-colors">
                                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                                    <CardTitle className="text-base font-medium text-card-foreground">
                                        {agent.name}
                                    </CardTitle>
                                    <div
                                        className={`px-2 py-1 rounded text-xs ${agent.status === 'active'
                                                ? 'bg-green-500/10 text-green-400'
                                                : 'bg-muted text-muted-foreground'
                                            }`}
                                    >
                                        {agent.status}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="mb-4 text-muted-foreground">
                                        {agent.description}
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">{agent.type}</span>
                                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                                            Configure →
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SidebarItem({
    icon,
    text,
    active = false,
    href,
}: {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    href: string;
}) {
    return (
        <Link href={href}>
            <div
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer ${active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
            >
                {icon}
                <span>{text}</span>
            </div>
        </Link>
    );
}
