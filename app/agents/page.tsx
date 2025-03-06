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
        name: 'Orchestrator',
        description: 'Manages the overall workflow and orchestration of the trading agents',
        status: 'active',
        type: 'Manager',
    },
    {
        id: '2',
        name: 'Data Analysis',
        description: 'Processes and analyzes large datasets for insights',
        status: 'active',
        type: 'Analytics',
    },
    {
        id: '3',
        name: 'Risk Manager',
        description: 'Manages the risk of the trading agents',
        status: 'inactive',
        type: 'Risk',
    },
];

export default function AgentsPage() {
    return (
        <div className="flex h-screen bg-background" data-oid="mpg8-qs">
            <Sidebar data-oid="3:4bva-" />

            {/* Main Content */}
            <div className="flex-1 p-8" data-oid="7l1t_hn">
                {/* Header */}
                <div className="flex justify-between items-center mb-8" data-oid=":k0hguu">
                    <div data-oid="oa1n1tm">
                        <h1 className="text-2xl font-semibold text-foreground" data-oid="ogmtox3">
                            AI Trading Agents
                        </h1>
                        <p className="text-muted-foreground" data-oid="ql.inhg">
                            Build and deploy specialized trading agents
                        </p>
                    </div>
                    <Link href="/agents/builder" data-oid="93q_by4">
                        <Button className="gap-2" variant="secondary" data-oid="i:v0fxl">
                            <IconPlus className="h-4 w-4" data-oid="vgpia.w" />
                            Create Agent
                        </Button>
                    </Link>
                </div>

                {/* Deployed Agents */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    data-oid="-vr3r:a"
                >
                    {defaultAgents.map((agent) => (
                        <Link
                            key={agent.id}
                            href={`/agents/builder?id=${agent.id}`}
                            data-oid="v20zqdn"
                        >
                            <Card
                                className="border-0 bg-card hover:bg-muted/50 transition-colors"
                                data-oid="zt0riid"
                            >
                                <CardHeader
                                    className="flex flex-row items-start justify-between space-y-0 pb-2"
                                    data-oid="3pl-hm-"
                                >
                                    <CardTitle
                                        className="text-base font-medium text-card-foreground"
                                        data-oid=".dg2a0h"
                                    >
                                        {agent.name}
                                    </CardTitle>
                                    <div
                                        className={`px-2 py-1 rounded text-xs ${agent.status === 'active'
                                                ? 'bg-green-500/10 text-green-400'
                                                : 'bg-muted text-muted-foreground'
                                            }`}
                                        data-oid="6.1:ai_"
                                    >
                                        {agent.status}
                                    </div>
                                </CardHeader>
                                <CardContent data-oid=".fp6lwo">
                                    <CardDescription
                                        className="mb-4 text-muted-foreground"
                                        data-oid="y8tubk7"
                                    >
                                        {agent.description}
                                    </CardDescription>
                                    <div
                                        className="flex items-center justify-between"
                                        data-oid=".2op13j"
                                    >
                                        <span
                                            className="text-sm text-muted-foreground"
                                            data-oid="bcpxuey"
                                        >
                                            {agent.type}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-primary hover:text-primary"
                                            data-oid="hf:i.fj"
                                        >
                                            Configure →
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Available Agent Templates */}
                <div className="mt-8" data-oid="vt:jx6q">
                    <h2 className="text-lg font-semibold mb-4" data-oid="v4q:mxy">
                        Available Templates
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="sry:m4a"
                    >
                        <Card
                            className="border hover:border-primary cursor-pointer transition-colors"
                            data-oid="-o50kuv"
                        >
                            <CardHeader data-oid="he1mg20">
                                <CardTitle className="text-base" data-oid="jw.zppa">
                                    Social Sentiment Agent
                                </CardTitle>
                                <CardDescription data-oid="qzh1q..">
                                    Analyzes social media for market sentiment
                                </CardDescription>
                            </CardHeader>
                            <CardContent data-oid="-75hgbk">
                                <Button variant="outline" className="w-full" data-oid="bsaov6l">
                                    Use Template
                                </Button>
                            </CardContent>
                        </Card>

                        <Card
                            className="border hover:border-primary cursor-pointer transition-colors"
                            data-oid="nwoj3q."
                        >
                            <CardHeader data-oid="7vxl0te">
                                <CardTitle className="text-base" data-oid="xrklr7d">
                                    On-Chain Analytics Agent
                                </CardTitle>
                                <CardDescription data-oid="f.spt0p">
                                    Monitors blockchain activity and whale movements
                                </CardDescription>
                            </CardHeader>
                            <CardContent data-oid="2b82diu">
                                <Button variant="outline" className="w-full" data-oid="f37jog2">
                                    Use Template
                                </Button>
                            </CardContent>
                        </Card>

                        <Link href="/agents/builder" className="block" data-oid="pq2kxuc">
                            <Card
                                className="border hover:border-primary cursor-pointer transition-colors h-full flex flex-col"
                                data-oid="zd3746j"
                            >
                                <CardHeader data-oid="we7fnj3">
                                    <CardTitle className="text-base" data-oid="vp17hjo">
                                        Custom Agent
                                    </CardTitle>
                                    <CardDescription data-oid="q70a:e-">
                                        Build a custom agent from scratch
                                    </CardDescription>
                                </CardHeader>
                                <CardContent
                                    className="flex-grow flex items-end"
                                    data-oid="5:5sko2"
                                >
                                    <Button variant="outline" className="w-full" data-oid="r9a33u-">
                                        Start Building
                                    </Button>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
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
        <Link href={href} data-oid="i30h347">
            <div
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer ${active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                data-oid="yr3kw-_"
            >
                {icon}
                <span data-oid="xokr5ub">{text}</span>
            </div>
        </Link>
    );
}
