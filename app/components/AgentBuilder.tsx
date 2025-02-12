'use client';

import { IconBrain, IconChartBar, IconDatabase, IconGauge, IconShield } from '@tabler/icons-react';
import { useState } from 'react';

interface ComponentBlock {
    id: string;
    type: 'data' | 'analysis' | 'strategy' | 'risk' | 'execution';
    name: string;
    description: string;
    icon: React.ReactNode;
    configOptions: {
        key: string;
        label: string;
        type: 'select' | 'number' | 'text';
        options?: string[];
    }[];
}

const availableComponents: ComponentBlock[] = [
    {
        id: 'social-data',
        type: 'data',
        name: 'Social Media Aggregator',
        description: 'Collect and analyze social sentiment data',
        icon: <IconDatabase className="w-6 h-6" />,
        configOptions: [
            {
                key: 'platforms',
                label: 'Data Sources',
                type: 'select',
                options: ['Twitter', 'Discord', 'Reddit', 'Telegram'],
            },
        ],
    },
    {
        id: 'onchain-data',
        type: 'data',
        name: 'On-Chain Metrics',
        description: 'Monitor blockchain activity and whale movements',
        icon: <IconDatabase className="w-6 h-6" />,
        configOptions: [
            {
                key: 'metrics',
                label: 'Metrics to Track',
                type: 'select',
                options: ['Whale Movements', 'Transaction Volume', 'DEX Activity'],
            },
        ],
    },
    {
        id: 'sentiment-analyzer',
        type: 'analysis',
        name: 'Sentiment Analysis Model',
        description: 'Process social data using fine-tuned LLMs',
        icon: <IconBrain className="w-6 h-6" />,
        configOptions: [
            {
                key: 'model',
                label: 'LLM Model',
                type: 'select',
                options: ['LoRA-Mistral', 'Custom GPT', 'Lightweight Transformer'],
            },
        ],
    },
    {
        id: 'delta-neutral',
        type: 'strategy',
        name: 'Delta-Neutral Strategy',
        description: 'Maintain market neutrality while capturing funding',
        icon: <IconChartBar className="w-6 h-6" />,
        configOptions: [
            {
                key: 'rebalance',
                label: 'Rebalance Threshold',
                type: 'number',
            },
        ],
    },
    {
        id: 'risk-manager',
        type: 'risk',
        name: 'Risk Management System',
        description: 'Monitor and adjust position sizes and exposure',
        icon: <IconShield className="w-6 h-6" />,
        configOptions: [
            {
                key: 'maxExposure',
                label: 'Max Position Size',
                type: 'number',
            },
        ],
    },
    {
        id: 'performance',
        type: 'execution',
        name: 'MEV-Resistant Executor',
        description: 'Execute trades with minimal slippage and MEV protection',
        icon: <IconGauge className="w-6 h-6" />,
        configOptions: [
            {
                key: 'slippage',
                label: 'Max Slippage',
                type: 'number',
            },
        ],
    },
];

export function AgentBuilder() {
    const [selectedComponents, setSelectedComponents] = useState<ComponentBlock[]>([]);
    const [draggedComponent, setDraggedComponent] = useState<ComponentBlock | null>(null);

    const handleDragStart = (component: ComponentBlock) => {
        setDraggedComponent(component);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (draggedComponent && !selectedComponents.find((c) => c.id === draggedComponent.id)) {
            setSelectedComponents([...selectedComponents, draggedComponent]);
        }
        setDraggedComponent(null);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const removeComponent = (id: string) => {
        setSelectedComponents(selectedComponents.filter((c) => c.id !== id));
    };

    return (
        <div className="flex gap-8 h-full">
            {/* Components Palette */}
            <div className="w-1/3 bg-[#111111] rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Available Components</h2>
                <div className="space-y-3">
                    {availableComponents.map((component) => (
                        <div
                            key={component.id}
                            draggable
                            onDragStart={() => handleDragStart(component)}
                            className="bg-[#222222] p-4 rounded-lg cursor-move hover:bg-[#333333] transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                {component.icon}
                                <span className="font-medium">{component.name}</span>
                            </div>
                            <p className="text-sm text-gray-400">{component.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Builder Canvas */}
            <div className="flex-1">
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="bg-[#111111] rounded-lg p-6 h-full"
                >
                    <h2 className="text-lg font-semibold mb-4">Agent Configuration</h2>
                    {selectedComponents.length === 0 ? (
                        <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
                            <p className="text-gray-400">
                                Drag components here to build your agent
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {selectedComponents.map((component) => (
                                <div key={component.id} className="bg-[#222222] p-4 rounded-lg">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            {component.icon}
                                            <div>
                                                <h3 className="font-medium">{component.name}</h3>
                                                <p className="text-sm text-gray-400">
                                                    {component.description}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeComponent(component.id)}
                                            className="text-gray-400 hover:text-white"
                                        >
                                            ×
                                        </button>
                                    </div>
                                    <div className="space-y-3">
                                        {component.configOptions.map((option) => (
                                            <div key={option.key} className="flex flex-col gap-1">
                                                <label className="text-sm text-gray-400">
                                                    {option.label}
                                                </label>
                                                {option.type === 'select' ? (
                                                    <select className="bg-[#333333] rounded px-3 py-2 text-sm">
                                                        {option.options?.map((opt) => (
                                                            <option key={opt} value={opt}>
                                                                {opt}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <input
                                                        type={option.type}
                                                        className="bg-[#333333] rounded px-3 py-2 text-sm"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg mt-4">
                                Deploy Agent
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
