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
        <div className="flex h-screen bg-black text-white" data-oid=":6dwn9.">
            {/* Sidebar */}
            <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2" data-oid="g9ipg7j">
                <div className="mb-8" data-oid="pd_sj.8">
                    <h2 className="text-xl font-semibold" data-oid="wgtn0h9">
                        CAINAM Builder
                    </h2>
                </div>

                <nav className="flex flex-col gap-2" data-oid="ryfvn1u">
                    <SidebarItem
                        icon={<IconHome size={20} data-oid="1e7_f2n" />}
                        text="Agents"
                        data-oid="t2seuwl"
                    />

                    <SidebarItem
                        icon={<IconBoxMultiple size={20} data-oid="k8.6kw9" />}
                        text="Workflows"
                        data-oid="j29twfs"
                    />

                    <SidebarItem
                        icon={<IconTools size={20} data-oid="uu1klh0" />}
                        text="Tools"
                        data-oid="tm:xtj-"
                    />

                    <SidebarItem
                        icon={<IconBook size={20} data-oid="1y2:jps" />}
                        text="Resources"
                        data-oid="xc18geu"
                    />

                    <SidebarItem
                        icon={<IconRoute size={20} data-oid="kpbfdo4" />}
                        text="Scenarios"
                        data-oid="dsd8ptz"
                    />

                    <SidebarItem
                        icon={<IconSettings size={20} data-oid="ex3ls0b" />}
                        text="Settings"
                        data-oid="7pj2154"
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8" data-oid="dj.:55:">
                <div className="mb-8" data-oid="1jcemnh">
                    <h1 className="text-2xl font-semibold mb-4" data-oid="hrwi0m2">
                        Welcome to the CAINAM Agent Builder
                    </h1>
                </div>

                <div className="grid grid-cols-3 gap-6" data-oid="qvj_qpp">
                    {/* Create Workflow Card */}
                    <Card
                        title="Create Workflow"
                        description="Design and manage AI workflows visually"
                        actionText="Get Started"
                        data-oid="z7t4-r0"
                    />

                    {/* Manage Agents Card */}
                    <Card
                        title="Manage Agents"
                        description="Configure and deploy AI agents"
                        actionText="View Agents"
                        data-oid="h6fdkl1"
                    />

                    {/* Resources Card */}
                    <Card
                        title="Resources"
                        description="Manage APIs and integrations"
                        actionText="Browse Resources"
                        data-oid="p-h7kkk"
                    />
                </div>
            </div>
        </div>
    );
}
function SidebarItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 cursor-pointer"
            data-oid="4gzktx1"
        >
            {icon}
            <span data-oid="-d0ut9u">{text}</span>
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
        <div
            className="bg-[#111111] p-6 rounded-lg flex flex-col h-[180px] justify-between"
            data-oid="gbwe_ic"
        >
            <div data-oid="3f50nm1">
                <h3 className="text-lg font-semibold mb-2" data-oid="tu4x4eq">
                    {title}
                </h3>
                <p className="text-gray-400" data-oid="s-0224f">
                    {description}
                </p>
            </div>
            <div className="flex items-center justify-between" data-oid="90pvtbo">
                <button
                    className="text-white-400 hover:text-white-300 flex items-center gap-2"
                    data-oid="mac_mxn"
                >
                    {actionText}
                    <span data-oid="yzgp_9e">→</span>
                </button>
            </div>
        </div>
    );
}
