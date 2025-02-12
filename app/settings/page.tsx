'use client';

import Sidebar from '../components/Sidebar';

export default function SettingsPage() {
    return (
        <div className="flex h-screen bg-black text-white" data-oid="gnxropj">
            <Sidebar data-oid="862gl33" />

            {/* Main Content */}
            <div className="flex-1 p-8 bg-black" data-oid="e3ng.wk">
                <div className="flex justify-between items-center mb-8" data-oid="7y:x6jg">
                    <div data-oid=".g7er4t">
                        <h1 className="text-2xl font-semibold" data-oid="0vfixnb">
                            Settings
                        </h1>
                        <p className="text-gray-400" data-oid="du4ydvm">
                            Configure your application preferences
                        </p>
                    </div>
                </div>

                {/* Placeholder content */}
                <div className="bg-[#111111] p-6 rounded-lg" data-oid="mvzml6k">
                    <p className="text-gray-400" data-oid="p1qnkjo">
                        Settings configuration coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
}
