'use client';

import Sidebar from '../components/Sidebar';

export default function ScenariosPage() {
    return (
        <div className="flex h-screen bg-black text-white" data-oid="-fzp5ta">
            <Sidebar data-oid="yfd74x-" />

            {/* Main Content */}
            <div className="flex-1 p-8 bg-black" data-oid="t:2tu14">
                <div className="flex justify-between items-center mb-8" data-oid="ulsucgd">
                    <div data-oid="hkbryvy">
                        <h1 className="text-2xl font-semibold" data-oid="i_hedr.">
                            Scenarios
                        </h1>
                        <p className="text-gray-400" data-oid="rrxnw:b">
                            Test and simulate your agents in different scenarios
                        </p>
                    </div>
                </div>

                {/* Placeholder content */}
                <div className="bg-[#111111] p-6 rounded-lg" data-oid="y4rj4uw">
                    <p className="text-gray-400" data-oid="0575-_h">
                        Scenario testing coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
}
