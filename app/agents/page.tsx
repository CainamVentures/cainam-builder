'use client';

import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from '../components/Sidebar';

interface Agent {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'inactive';
    type: string;
}

const performanceData = [
    { date: '2024-01-01', value: 10000 },
    { date: '2024-01-15', value: 10500 },
    { date: '2024-01-30', value: 11200 },
    { date: '2024-02-15', value: 12139 },
];

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
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 bg-black">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-semibold">AI Trading Agents</h1>
                        <p className="text-gray-400">Build and deploy specialized trading agents</p>
                    </div>
                    <Link href="/agents/builder">
                        <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded flex items-center gap-2">
                            <IconPlus size={20} />
                            Create Agent
                        </button>
                    </Link>
                </div>

                {/* Deployed Agents */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {defaultAgents.map((agent) => (
                        <Link key={agent.id} href={`/agents/builder?id=${agent.id}`}>
                            <div className="bg-[#111111] p-6 rounded-lg flex flex-col hover:bg-[#1a1a1a] transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold">{agent.name}</h3>
                                    <span
                                        className={`px-2 py-1 rounded text-sm ${
                                            agent.status === 'active'
                                                ? 'bg-green-900/50 text-green-400'
                                                : 'bg-gray-800 text-gray-400'
                                        }`}
                                    >
                                        {agent.status}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">{agent.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-sm text-gray-500">{agent.type}</span>
                                    <button className="text-orange-500 hover:text-orange-400">
                                        Configure →
                                    </button>
                                </div>
                            </div>
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
