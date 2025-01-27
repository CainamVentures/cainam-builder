'use client';

import {
    IconHome,
    IconTools,
    IconSettings,
    IconBook,
    IconBoxMultiple,
    IconRoute,
    IconPlus,
    IconLayoutList,
    IconNetwork,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface Agent {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'inactive';
    type: string;
}
export default function AgentsPage() {
    const pathname = usePathname();
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

    return (
        <div className="flex h-screen bg-black text-white" data-oid="0t0a-rz">
            {/* Sidebar */}
            <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2" data-oid="xxf_iow">
                <div className="mb-8" data-oid="832-3vb">
                    <h2 className="text-xl font-semibold" data-oid="hhmx2pl">
                        ELIZAFlow
                    </h2>
                </div>

                <nav className="flex flex-col gap-2" data-oid="i90w3zs">
                    <SidebarItem
                        icon={<IconHome size={20} data-oid="nffuip5" />}
                        text="Agents"
                        href="/agents"
                        active={pathname === '/agents'}
                        data-oid=".u7lvbs"
                    />

                    <SidebarItem
                        icon={<IconBoxMultiple size={20} data-oid="1b8n9b3" />}
                        text="Workflows"
                        href="/workflows"
                        active={pathname === '/workflows'}
                        data-oid="r2t6ont"
                    />

                    <SidebarItem
                        icon={<IconTools size={20} data-oid="9048raa" />}
                        text="Tools"
                        href="/tools"
                        active={pathname === '/tools'}
                        data-oid="xuo3orh"
                    />

                    <SidebarItem
                        icon={<IconBook size={20} data-oid="953iuu8" />}
                        text="Resources"
                        href="/resources"
                        active={pathname === '/resources'}
                        data-oid="1bbz88v"
                    />

                    <SidebarItem
                        icon={<IconRoute size={20} data-oid="dc1uw9e" />}
                        text="Scenarios"
                        href="/scenarios"
                        active={pathname === '/scenarios'}
                        data-oid=":6-neiz"
                    />

                    <SidebarItem
                        icon={<IconSettings size={20} data-oid="vmdo69h" />}
                        text="Settings"
                        href="/settings"
                        active={pathname === '/settings'}
                        data-oid="twit98z"
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8" data-oid="4i9uwhl">
                {/* Header */}
                <div className="flex justify-between items-center mb-8" data-oid="zv_fffz">
                    <h1 className="text-2xl font-semibold" data-oid="vpehicq">
                        AI Agents
                    </h1>
                    <div className="flex gap-4" data-oid="afjv_a.">
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
                            data-oid="xlbb.48"
                        >
                            <IconLayoutList size={20} data-oid="ifh8hlm" />
                            List
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
                            data-oid="69bcvho"
                        >
                            <IconNetwork size={20} data-oid="_-q7uve" />
                            Network
                        </button>
                        <Link href="/agents/builder" data-oid="q8ij9q8">
                            <button
                                className="flex items-center gap-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-700"
                                data-oid=":w_:-6m"
                            >
                                <IconPlus size={20} data-oid="zj14gu9" />
                                New Agent
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Agents Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    data-oid="ot3xtq-"
                >
                    {defaultAgents.map((agent) => (
                        <AgentCard key={agent.id} agent={agent} data-oid="dh2-mg-" />
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
        <Link href={href} data-oid="vaj5.j9">
            <div
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer ${active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                data-oid="s9bv3vd"
            >
                {icon}
                <span data-oid="sf1cbng">{text}</span>
            </div>
        </Link>
    );
}
function AgentCard({ agent }: { agent: Agent }) {
    return (
        <div className="bg-[#111111] p-6 rounded-lg flex flex-col" data-oid="vt7ef-j">
            <div className="flex justify-between items-start mb-4" data-oid="flnfr9x">
                <h3 className="text-lg font-semibold" data-oid="y-by7jf">
                    {agent.name}
                </h3>
                <span
                    className={`px-2 py-1 rounded text-sm ${agent.status === 'active' ? 'bg-green-900/50 text-green-400' : 'bg-gray-800 text-gray-400'}`}
                    data-oid="-na9wpk"
                >
                    {agent.status}
                </span>
            </div>
            <p className="text-gray-400 mb-4" data-oid="ytg0_0h">
                {agent.description}
            </p>
            <div className="flex items-center justify-between mt-auto" data-oid="8k.96ms">
                <span className="text-sm text-gray-500" data-oid="djr8o2n">
                    {agent.type}
                </span>
                <button className="text-white-400 hover:text-white-300" data-oid="ejqrks2">
                    Configure →
                </button>
            </div>
        </div>
    );
}
