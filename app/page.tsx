'use client';

import { IconWallet } from '@tabler/icons-react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Sidebar from './components/Sidebar';

const performanceData = [
    { date: '2024-01-01', value: 10000 },
    { date: '2024-01-15', value: 10500 },
    { date: '2024-01-30', value: 11200 },
    { date: '2024-02-15', value: 12139 },
];

export default function HomePage() {
    return (
        <div className="flex h-screen bg-black text-white">
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 bg-black">
                {/* Header with Wallet Button */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-semibold">Cairos Agent Dashboard</h1>
                        <p className="text-gray-400">Delta-Neutral Strategy</p>
                    </div>
                    <button className="flex items-center gap-2 bg-[#111111] hover:bg-[#222222] px-4 py-2 rounded-lg">
                        <IconWallet size={20} />
                        Connect Wallet
                    </button>
                </div>

                {/* Performance Overview */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-[#111111] p-4 rounded-lg">
                        <p className="text-gray-400 text-sm">Total Value</p>
                        <h3 className="text-2xl font-bold">$12,139.24</h3>
                        <p className="text-green-500 text-sm">+6.61% (30d)</p>
                    </div>
                    <div className="bg-[#111111] p-4 rounded-lg">
                        <p className="text-gray-400 text-sm">Annualized Return</p>
                        <h3 className="text-2xl font-bold">82.83%</h3>
                    </div>
                    <div className="bg-[#111111] p-4 rounded-lg">
                        <p className="text-gray-400 text-sm">Max Drawdown</p>
                        <h3 className="text-2xl font-bold">1.58%</h3>
                    </div>
                    <div className="bg-[#111111] p-4 rounded-lg">
                        <p className="text-gray-400 text-sm">Sharpe Ratio</p>
                        <h3 className="text-2xl font-bold">7.52</h3>
                    </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-[#111111] p-6 rounded-lg mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Performance</h2>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 rounded bg-[#222222] text-sm">1W</button>
                            <button className="px-3 py-1 rounded bg-[#222222] text-sm">1M</button>
                            <button className="px-3 py-1 rounded bg-[#222222] text-sm">3M</button>
                            <button className="px-3 py-1 rounded bg-[#222222] text-sm">1Y</button>
                            <button className="px-3 py-1 rounded bg-[#222222] text-sm">ALL</button>
                        </div>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={performanceData}>
                                <XAxis dataKey="date" stroke="#666" />
                                <YAxis stroke="#666" />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#00ff00"
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Market Updates */}
                <div className="bg-[#111111] p-6 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Market Updates</h2>
                    <div className="text-gray-400">
                        <p className="mb-2">[2024-02-11 16:00:27]</p>
                        <p>
                            Current funding rates present intriguing delta neutral opportunities,
                            with PERP-USDC showing the highest potential at 0.024% hourly rate.
                        </p>
                        <p className="mt-4">
                            Market conditions suggest strategic arbitrage positioning, particularly
                            across perpetual contracts with significant volume.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
