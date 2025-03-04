'use client';

import {
    IconBook,
    IconBoxMultiple,
    IconHome,
    IconRoute,
    IconSettings,
    IconTools,
} from '@tabler/icons-react';
import Link from 'next/link';

function SidebarItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    const path = text.toLowerCase();
    return (
        <Link
            href={`/${path}`}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800 cursor-pointer"
            data-oid="vkc8:0f"
        >
            {icon}
            <span data-oid=".-4fsdx">{text}</span>
        </Link>
    );
}

export default function Sidebar() {
    return (
        <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2" data-oid="vaz2:v7">
            <div className="mb-8" data-oid="fv9ua-v">
                <Link href="/" className="block" data-oid="jwauv-n">
                    <h2
                        className="text-xl font-semibold hover:text-gray-300 cursor-pointer"
                        data-oid="gv5851m"
                    >
                        CAINAM Builder
                    </h2>
                </Link>
            </div>

            <nav className="flex flex-col gap-2" data-oid="pemt1v1">
                <SidebarItem
                    icon={<IconHome size={20} data-oid="f_5k-cr" />}
                    text="Agents"
                    data-oid=".lk0qvc"
                />

                <SidebarItem
                    icon={<IconBoxMultiple size={20} data-oid="psnicd." />}
                    text="Workflows"
                    data-oid="0pz6a0m"
                />

                <SidebarItem
                    icon={<IconTools size={20} data-oid="e5l1jer" />}
                    text="Tools"
                    data-oid="4zm76e5"
                />

                <SidebarItem
                    icon={<IconBook size={20} data-oid="l8w0:9q" />}
                    text="Resources"
                    data-oid="t70q6mo"
                />

                <SidebarItem
                    icon={<IconRoute size={20} data-oid="vxk:je4" />}
                    text="Scenarios"
                    data-oid="biyig--"
                />

                <SidebarItem
                    icon={<IconSettings size={20} data-oid="ewiwufr" />}
                    text="Settings"
                    data-oid="dtykidq"
                />
            </nav>
        </div>
    );
}
