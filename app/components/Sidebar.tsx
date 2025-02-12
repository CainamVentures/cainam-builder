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
        >
            {icon}
            <span>{text}</span>
        </Link>
    );
}

export default function Sidebar() {
    return (
        <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2">
            <div className="mb-8">
                <Link href="/" className="block">
                    <h2 className="text-xl font-semibold hover:text-gray-300 cursor-pointer">
                        CAINAM Builder
                    </h2>
                </Link>
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
    );
}
