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
        <div className="flex h-screen bg-black text-white" data-oid="zq2zvek">
            {/* Sidebar */}
            <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2" data-oid="_sb756_">
                <div className="mb-8" data-oid="77vm.an">
                    <h2 className="text-xl font-semibold" data-oid="jitf6v6">
                        ELIZAFlow
                    </h2>
                </div>

                <nav className="flex flex-col gap-2" data-oid=".xhr::i">
                    <SidebarItem
                        icon={<IconHome size={20} data-oid="vu8919l" />}
                        text="Agents"
                        href="/agents"
                        active={pathname === '/agents'}
                        data-oid=":7tt-gb"
                    />

                    <SidebarItem
                        icon={<IconBoxMultiple size={20} data-oid="05:b2zl" />}
                        text="Workflows"
                        href="/workflows"
                        active={pathname === '/workflows'}
                        data-oid="4sw11j9"
                    />

                    <SidebarItem
                        icon={<IconTools size={20} data-oid=".z.zy7s" />}
                        text="Tools"
                        href="/tools"
                        active={pathname === '/tools'}
                        data-oid="rb8uqc:"
                    />

                    <SidebarItem
                        icon={<IconBook size={20} data-oid="t4sylbi" />}
                        text="Resources"
                        href="/resources"
                        active={pathname === '/resources'}
                        data-oid="_5bvd6."
                    />

                    <SidebarItem
                        icon={<IconRoute size={20} data-oid="o--aib_" />}
                        text="Scenarios"
                        href="/scenarios"
                        active={pathname === '/scenarios'}
                        data-oid="8y0q9_f"
                    />

                    <SidebarItem
                        icon={<IconSettings size={20} data-oid="91y2:dg" />}
                        text="Settings"
                        href="/settings"
                        active={pathname === '/settings'}
                        data-oid="bb6db0."
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8" data-oid="5ri6b7a">
                {/* Header */}
                <div className="flex justify-between items-center mb-8" data-oid="eq3z62:">
                    <h1 className="text-2xl font-semibold" data-oid="rhthk50">
                        AI Agents
                    </h1>
                    <div className="flex gap-4" data-oid="udu9.73">
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
                            data-oid="ii:8y0l"
                        >
                            <IconLayoutList size={20} data-oid="yp1ky:d" />
                            List
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
                            data-oid="4jwr_y7"
                        >
                            <IconNetwork size={20} data-oid="cosmkly" />
                            Network
                        </button>
                        <Link href="/agents/builder" data-oid="28gug0s">
                            <button
                                className="flex items-center gap-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-700"
                                data-oid="8ba-cjm"
                            >
                                <IconPlus size={20} data-oid="8c9:5cz" />
                                New Agent
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Agents Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    data-oid="cuhw446"
                >
                    {defaultAgents.map((agent) => (
                        <AgentCard key={agent.id} agent={agent} data-oid="f0bufg9" />
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
        <Link href={href} data-oid="9wwsb3s">
            <div
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer ${active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                data-oid="f6tl0bj"
            >
                {icon}
                <span data-oid="97:x4ck">{text}</span>
            </div>
        </Link>
    );
}
function AgentCard({ agent }: { agent: Agent }) {
    return (
        <div className="bg-[#111111] p-6 rounded-lg flex flex-col" data-oid="gk:_hny">
            <div className="flex justify-between items-start mb-4" data-oid="ucmec9k">
                <h3 className="text-lg font-semibold" data-oid=":m.ghj5">
                    {agent.name}
                </h3>
                <span
                    className={`px-2 py-1 rounded text-sm ${agent.status === 'active' ? 'bg-green-900/50 text-green-400' : 'bg-gray-800 text-gray-400'}`}
                    data-oid="1p:qz3m"
                >
                    {agent.status}
                </span>
            </div>
            <p className="text-gray-400 mb-4" data-oid="usijipu">
                {agent.description}
            </p>
            <div className="flex items-center justify-between mt-auto" data-oid="v4ajwkr">
                <span className="text-sm text-gray-500" data-oid="h__ta1e">
                    {agent.type}
                </span>
                <button className="text-white-400 hover:text-white-300" data-oid="egjm58o">
                    Configure →
                </button>
            </div>
        </div>
    );
}
