'use client';

import Sidebar from '../components/Sidebar';

export default function ResourcesPage() {
    return (
        <div className="flex h-screen bg-black text-white">
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 bg-black">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-semibold">Resources</h1>
                        <p className="text-gray-400">Documentation and learning materials</p>
                    </div>
                </div>

                {/* Placeholder content */}
                <div className="bg-[#111111] p-6 rounded-lg">
                    <p className="text-gray-400">Resources coming soon...</p>
                </div>
            </div>
        </div>
    );
}
