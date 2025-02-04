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
        <div className="flex h-screen bg-black text-white">
            {/* Sidebar */}
            <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">ELIZAFlow</h2>
                </div>

                <nav className="flex flex-col gap-2">
                    <SidebarItem
                        icon={<IconHome size={20} />}
                        text="Agents"
                        href="/agents"
                        active={pathname === '/agents'}
                    />

                    <SidebarItem
                        icon={<IconBoxMultiple size={20} />}
                        text="Workflows"
                        href="/workflows"
                        active={pathname === '/workflows'}
                    />

                    <SidebarItem
                        icon={<IconTools size={20} />}
                        text="Tools"
                        href="/tools"
                        active={pathname === '/tools'}
                    />

                    <SidebarItem
                        icon={<IconBook size={20} />}
                        text="Resources"
                        href="/resources"
                        active={pathname === '/resources'}
                    />

                    <SidebarItem
                        icon={<IconRoute size={20} />}
                        text="Scenarios"
                        href="/scenarios"
                        active={pathname === '/scenarios'}
                    />

                    <SidebarItem
                        icon={<IconSettings size={20} />}
                        text="Settings"
                        href="/settings"
                        active={pathname === '/settings'}
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-semibold">AI Agents</h1>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-700">
                            <IconLayoutList size={20} />
                            List
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-700">
                            <IconNetwork size={20} />
                            Network
                        </button>
                        <Link href="/agents/builder">
                            <button className="flex items-center gap-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-700">
                                <IconPlus size={20} />
                                New Agent
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Agents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {defaultAgents.map((agent) => (
                        <AgentCard key={agent.id} agent={agent} />
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
function AgentCard({ agent }: { agent: Agent }) {
    return (
        <div className="bg-[#111111] p-6 rounded-lg flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{agent.name}</h3>
                <span
                    className={`px-2 py-1 rounded text-sm ${agent.status === 'active' ? 'bg-green-900/50 text-green-400' : 'bg-gray-800 text-gray-400'}`}
                >
                    {agent.status}
                </span>
            </div>
            <p className="text-gray-400 mb-4">{agent.description}</p>
            <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-gray-500">{agent.type}</span>
                <button className="text-white-400 hover:text-white-300">Configure →</button>
            </div>
        </div>
    );
}
