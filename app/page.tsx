'use client';

import {
    IconHome,
    IconTools,
    IconSettings,
    IconBook,
    IconBoxMultiple,
    IconRoute,
} from '@tabler/icons-react';
export default function Page() {
    return (
        <div className="flex h-screen bg-black text-white">
            {/* Sidebar */}
            <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">CAINAM Builder</h2>
                </div>

                <nav className="flex flex-col gap-2">
                    <SidebarItem icon={<IconHome size={20} />} text="Agents" />

                    <SidebarItem icon={<IconBoxMultiple size={20} />} text="Workflows" />

                    <SidebarItem icon={<IconTools size={20} />} text="Tools" />

                    <SidebarItem icon={<IconBook size={20} />} text="Resources" />

                    <SidebarItem icon={<IconRoute size={20} />} text="Scenarios" />

                    <SidebarItem icon={<IconSettings size={20} />} text="Settings" />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold mb-4">
                        Welcome to the CAINAM Agent Builder
                    </h1>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Create Workflow Card */}
                    <Card
                        title="Create Workflow"
                        description="Design and manage AI workflows visually"
                        actionText="Get Started"
                    />

                    {/* Manage Agents Card */}
                    <Card
                        title="Manage Agents"
                        description="Configure and deploy AI agents"
                        actionText="View Agents"
                    />

                    {/* Resources Card */}
                    <Card
                        title="Resources"
                        description="Manage APIs and integrations"
                        actionText="Browse Resources"
                    />
                </div>
            </div>
        </div>
    );
}
function SidebarItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
            {icon}
            <span>{text}</span>
        </div>
    );
}
function Card({
    title,
    description,
    actionText,
}: {
    title: string;
    description: string;
    actionText: string;
}) {
    return (
        <div className="bg-[#111111] p-6 rounded-lg flex flex-col h-[180px] justify-between">
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
            <div className="flex items-center justify-between">
                <button className="text-white-400 hover:text-white-300 flex items-center gap-2">
                    {actionText}
                    <span>→</span>
                </button>
            </div>
        </div>
    );
}
