'use client';

import { IconArrowLeft, IconRocket } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

interface ComponentConfig {
    key: string;
    value: string;
}

interface Component {
    id: string;
    name: string;
    description: string;
    configs: ComponentConfig[];
}

export default function AgentBuilder() {
    const [selectedComponents, setSelectedComponents] = useState<Component[]>([
        {
            id: 'social-media',
            name: 'Social Media Aggregator',
            description: 'Collect and analyze social sentiment data',
            configs: [
                {
                    key: 'data_sources',
                    value: 'Twitter',
                },
            ],
        },
        {
            id: 'on-chain',
            name: 'On-Chain Metrics',
            description: 'Monitor blockchain activity and whale movements',
            configs: [
                {
                    key: 'metrics',
                    value: 'Whale Movements',
                },
            ],
        },
        {
            id: 'sentiment',
            name: 'Sentiment Analysis Model',
            description: 'Process social data using fine-tuned LLMs',
            configs: [
                {
                    key: 'model',
                    value: 'LlRA-Mistral',
                },
            ],
        },
        {
            id: 'delta-neutral',
            name: 'Delta-Neutral Strategy',
            description: 'Maintain market neutrality while capturing funding',
            configs: [
                {
                    key: 'threshold',
                    value: '',
                },
            ],
        },
        {
            id: 'mev',
            name: 'MEV-Resistant Executor',
            description: 'Execute trades with minimal slippage and MEV protection',
            configs: [
                {
                    key: 'slippage',
                    value: '',
                },
            ],
        },
    ]);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="border-b border-gray-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/agents">
                                <button className="text-gray-400 hover:text-white">
                                    <IconArrowLeft size={20} />
                                </button>
                            </Link>
                            <h1 className="text-xl font-semibold">Create New Agent</h1>
                        </div>
                        <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded flex items-center gap-2">
                            <IconRocket size={20} />
                            Deploy Agent
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 gap-8">
                    {/* Left Column - Available Components */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold mb-6">Available Components</h2>
                        <div className="space-y-4">
                            {selectedComponents.map((component) => (
                                <div
                                    key={component.id}
                                    className="bg-[#111111] p-4 rounded-lg cursor-pointer hover:bg-[#1a1a1a] transition-colors"
                                >
                                    <h3 className="font-medium mb-1">{component.name}</h3>
                                    <p className="text-sm text-gray-400">{component.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Component Configuration */}
                    <div className="space-y-4">
                        {selectedComponents.map((component) => (
                            <div key={component.id} className="bg-[#111111] p-6 rounded-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-medium">{component.name}</h3>
                                        <p className="text-sm text-gray-400">
                                            {component.description}
                                        </p>
                                    </div>
                                    <button className="text-gray-400 hover:text-white">×</button>
                                </div>
                                <div className="space-y-4">
                                    {component.configs.map((config) => (
                                        <div key={config.key} className="space-y-2">
                                            <label className="block text-sm text-gray-400">
                                                {config.key
                                                    .split('_')
                                                    .map(
                                                        (word) =>
                                                            word.charAt(0).toUpperCase() +
                                                            word.slice(1),
                                                    )
                                                    .join(' ')}
                                            </label>
                                            <input
                                                type="text"
                                                value={config.value}
                                                className="w-full bg-[#222222] border border-gray-800 rounded px-3 py-2"
                                                placeholder={`Enter ${config.key}...`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
