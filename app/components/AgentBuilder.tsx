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
        icon: <IconDatabase className="w-6 h-6" data-oid="k.ch3gt" />,
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
        icon: <IconDatabase className="w-6 h-6" data-oid="93-37if" />,
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
        icon: <IconBrain className="w-6 h-6" data-oid="sdmvg8b" />,
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
        icon: <IconChartBar className="w-6 h-6" data-oid="8obe:.o" />,
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
        icon: <IconShield className="w-6 h-6" data-oid="9ip2fgf" />,
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
        icon: <IconGauge className="w-6 h-6" data-oid="n6_u653" />,
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

    const handleDragStart = (e: React.DragEvent, component: ComponentBlock) => {
        e.dataTransfer.setData('application/json', JSON.stringify(component));
        setDraggedComponent(component);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        try {
            const data = e.dataTransfer.getData('application/json');
            if (data) {
                const component = JSON.parse(data) as ComponentBlock;
                if (!selectedComponents.find((c) => c.id === component.id)) {
                    setSelectedComponents([...selectedComponents, component]);
                }
            } else if (
                draggedComponent &&
                !selectedComponents.find((c) => c.id === draggedComponent.id)
            ) {
                setSelectedComponents([...selectedComponents, draggedComponent]);
            }
        } catch (error) {
            console.error('Error during drag and drop:', error);
        }
        setDraggedComponent(null);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    };

    const removeComponent = (id: string) => {
        setSelectedComponents(selectedComponents.filter((c) => c.id !== id));
    };

    return (
        <div className="flex gap-8 h-full" data-oid="ragah-a">
            {/* Components Palette */}
            <div className="w-1/3 bg-[#111111] rounded-lg p-4" data-oid="8jdk38w">
                <h2 className="text-lg font-semibold mb-4" data-oid="c6dak1q">
                    Available Components
                </h2>
                <div className="space-y-3" data-oid="h7hdo84">
                    {availableComponents.map((component) => (
                        <div
                            key={component.id}
                            draggable
                            onDragStart={() => handleDragStart(component)}
                            className="bg-[#222222] p-4 rounded-lg cursor-move hover:bg-[#333333] transition-colors"
                            data-oid="4ysjsy-"
                        >
                            <div className="flex items-center gap-3 mb-2" data-oid="4di:i3c">
                                {component.icon}
                                <span className="font-medium" data-oid=":6mc:2q">
                                    {component.name}
                                </span>
                            </div>
                            <p className="text-sm text-gray-400" data-oid="zangbz-">
                                {component.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Builder Canvas */}
            <div className="flex-1" data-oid="u02t14i">
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="bg-[#111111] rounded-lg p-6 h-full"
                    data-oid="0ag2qc_"
                >
                    <h2 className="text-lg font-semibold mb-4" data-oid="knigod5">
                        Agent Configuration
                    </h2>
                    {selectedComponents.length === 0 ? (
                        <div
                            className="h-full flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg"
                            data-oid="04dhzxc"
                        >
                            <p className="text-gray-400" data-oid="yueozx4">
                                Drag components here to build your agent
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4" data-oid="-ebwkbs">
                            {selectedComponents.map((component) => (
                                <div
                                    key={component.id}
                                    className="bg-[#222222] p-4 rounded-lg"
                                    data-oid="dn61.27"
                                >
                                    <div
                                        className="flex justify-between items-start mb-4"
                                        data-oid="qrd7hme"
                                    >
                                        <div className="flex items-center gap-3" data-oid="v84.c8r">
                                            {component.icon}
                                            <div data-oid="-_42a2e">
                                                <h3 className="font-medium" data-oid="hg4z593">
                                                    {component.name}
                                                </h3>
                                                <p
                                                    className="text-sm text-gray-400"
                                                    data-oid="m3:s-zl"
                                                >
                                                    {component.description}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeComponent(component.id)}
                                            className="text-gray-400 hover:text-white"
                                            data-oid="n7ki33n"
                                        >
                                            ×
                                        </button>
                                    </div>
                                    <div className="space-y-3" data-oid="565..at">
                                        {component.configOptions.map((option) => (
                                            <div
                                                key={option.key}
                                                className="flex flex-col gap-1"
                                                data-oid="1k1x:7u"
                                            >
                                                <label
                                                    className="text-sm text-gray-400"
                                                    data-oid="epd:q4d"
                                                >
                                                    {option.label}
                                                </label>
                                                {option.type === 'select' ? (
                                                    <select
                                                        className="bg-[#333333] rounded px-3 py-2 text-sm"
                                                        data-oid="z63g8cs"
                                                    >
                                                        {option.options?.map((opt) => (
                                                            <option
                                                                key={opt}
                                                                value={opt}
                                                                data-oid="-pqf9ik"
                                                            >
                                                                {opt}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <input
                                                        type={option.type}
                                                        className="bg-[#333333] rounded px-3 py-2 text-sm"
                                                        data-oid="_staifs"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <button
                                className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg mt-4"
                                data-oid="ou102cf"
                            >
                                Deploy Agent
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
