'use client';

import Sidebar from '../components/Sidebar';

export default function ToolsPage() {
    return (
        <div className="flex h-screen bg-black text-white" data-oid="gr0j8os">
            <Sidebar data-oid="i1ac5p5" />

            {/* Main Content */}
            <div className="flex-1 p-8 bg-black" data-oid="m2ixy32">
                <div className="flex justify-between items-center mb-8" data-oid="c11q.sn">
                    <div data-oid="t29n0qg">
                        <h1 className="text-2xl font-semibold" data-oid="cbjq5mv">
                            Tools
                        </h1>
                        <p className="text-gray-400" data-oid="0omcyq.">
                            Manage your agent tools and integrations
                        </p>
                    </div>
                </div>

                {/* Placeholder content */}
                <div className="bg-[#111111] p-6 rounded-lg" data-oid="qdvdxq9">
                    <p className="text-gray-400" data-oid="85febnp">
                        Tools management coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
}
