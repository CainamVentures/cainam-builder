'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IconArrowLeft, IconRocket } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

interface ComponentConfig {
    key: string;
    value: string;
    options?: string[];
}

interface Component {
    id: string;
    name: string;
    description: string;
    configs: ComponentConfig[];
}

const availableComponents: Component[] = [
    {
        id: 'social-media',
        name: 'Social Media Aggregator',
        description: 'Collect and analyze social sentiment data',
        configs: [
            {
                key: 'data_sources',
                value: 'Twitter',
                options: ['Twitter', 'Reddit', 'Discord', 'Telegram'],
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
                options: ['Whale Movements', 'Token Flows', 'DEX Activity', 'Gas Usage'],
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
                options: ['LlRA-Mistral', 'GPT-4', 'Claude', 'Gemini'],
            },
        ],
    },
    {
        id: 'delta-neutral',
        name: 'Delta-Neutral Strategy',
        description: 'Maintain market neutrality while capturing funding',
        configs: [
            {
                key: 'rebalance_threshold',
                value: '1%',
                options: ['0.5%', '1%', '2%', '5%'],
            },
            {
                key: 'hedging_method',
                value: 'Perpetual Futures',
                options: ['Perpetual Futures', 'Options', 'Spot-Futures'],
            },
        ],
    },
    {
        id: 'risk',
        name: 'Risk Management System',
        description: 'Monitor and adjust position sizes and exposure',
        configs: [
            {
                key: 'max_position_size',
                value: '5%',
                options: ['1%', '2%', '5%', '10%'],
            },
            {
                key: 'stop_loss',
                value: '2%',
                options: ['1%', '2%', '3%', '5%'],
            },
        ],
    },
    {
        id: 'mev',
        name: 'MEV-Resistant Executor',
        description: 'Execute trades with minimal slippage and MEV protection',
        configs: [
            {
                key: 'max_slippage',
                value: '0.1%',
                options: ['0.1%', '0.5%', '1%', '2%'],
            },
            {
                key: 'execution_method',
                value: 'RFQ',
                options: ['RFQ', 'TWAP', 'Flashbots'],
            },
        ],
    },
];

export default function AgentBuilder() {
    const [selectedComponents, setSelectedComponents] = useState<Component[]>([]);

    const addComponent = (component: Component) => {
        if (!selectedComponents.find(c => c.id === component.id)) {
            setSelectedComponents([...selectedComponents, { ...component }]);
        }
    };

    const removeComponent = (componentId: string) => {
        setSelectedComponents(selectedComponents.filter(c => c.id !== componentId));
    };

    const updateComponentConfig = (componentId: string, configKey: string, value: string) => {
        setSelectedComponents(components =>
            components.map(component =>
                component.id === componentId
                    ? {
                        ...component,
                        configs: component.configs.map(config =>
                            config.key === configKey ? { ...config, value } : config,
                        ),
                    }
                    : component,
            ),
        );
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/agents">
                                <Button variant="ghost" size="icon">
                                    <IconArrowLeft className="h-4 w-4" />
                                </Button>
                            </Link>
                            <h1 className="text-xl font-semibold">Create New Agent</h1>
                        </div>
                        <Button className="gap-2">
                            <IconRocket className="h-4 w-4" />
                            Deploy Agent
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 gap-8">
                    {/* Left Column - Available Components */}
                    <div>
                        <h2 className="text-lg font-semibold mb-6">Available Components</h2>
                        <ScrollArea className="h-[calc(100vh-12rem)]">
                            <div className="space-y-4 pr-4">
                                {availableComponents.map((component) => (
                                    <Card
                                        key={component.id}
                                        className="cursor-pointer hover:bg-muted transition-colors"
                                        onClick={() => addComponent(component)}
                                    >
                                        <CardHeader>
                                            <CardTitle className="text-base">{component.name}</CardTitle>
                                            <CardDescription>{component.description}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                    {/* Right Column - Component Configuration */}
                    <ScrollArea className="h-[calc(100vh-12rem)]">
                        <div className="space-y-4 pr-4">
                            {selectedComponents.map((component) => (
                                <Card key={component.id}>
                                    <CardHeader className="flex flex-row items-start justify-between space-y-0">
                                        <div>
                                            <CardTitle className="text-base">{component.name}</CardTitle>
                                            <CardDescription>{component.description}</CardDescription>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeComponent(component.id)}
                                        >
                                            ×
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {component.configs.map((config) => (
                                            <div key={config.key} className="space-y-2">
                                                <label className="text-sm text-muted-foreground">
                                                    {config.key
                                                        .split('_')
                                                        .map(
                                                            (word) =>
                                                                word.charAt(0).toUpperCase() +
                                                                word.slice(1),
                                                        )
                                                        .join(' ')}
                                                </label>
                                                {config.options ? (
                                                    <Select
                                                        value={config.value}
                                                        onValueChange={(value) =>
                                                            updateComponentConfig(
                                                                component.id,
                                                                config.key,
                                                                value,
                                                            )
                                                        }
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {config.options.map((option) => (
                                                                <SelectItem
                                                                    key={option}
                                                                    value={option}
                                                                >
                                                                    {option}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                ) : (
                                                    <input
                                                        type="text"
                                                        value={config.value}
                                                        onChange={(e) =>
                                                            updateComponentConfig(
                                                                component.id,
                                                                config.key,
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="w-full bg-background border rounded px-3 py-2"
                                                        placeholder={`Enter ${config.key}...`}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
