'use client';

import Sidebar from '../components/Sidebar';

export default function WorkflowsPage() {
    return (
        <div className="flex h-screen bg-black text-white" data-oid="zt6ls-p">
            <Sidebar data-oid="y2a_5vn" />

            {/* Main Content */}
            <div className="flex-1 p-8 bg-black" data-oid="igtc0op">
                <div className="flex justify-between items-center mb-8" data-oid="8chrwa7">
                    <div data-oid="9bly3ez">
                        <h1 className="text-2xl font-semibold" data-oid="c6w6l89">
                            Workflows
                        </h1>
                        <p className="text-gray-400" data-oid="yj1qzhd">
                            Manage and monitor your automated workflows
                        </p>
                    </div>
                </div>

                {/* Placeholder content */}
                <div className="bg-[#111111] p-6 rounded-lg" data-oid="5tj2-v7">
                    <p className="text-gray-400" data-oid="4gt6xml">
                        Workflow management coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
}
