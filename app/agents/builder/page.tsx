'use client';

import { AgentBuilder } from '@/app/components/AgentBuilder';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { IconArrowLeft, IconRocket } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

// Define component interface
interface Component {
    id: string;
    name: string;
    description: string;
    configs: Array<{
        key: string;
        value: string;
        options?: string[];
    }>;
}

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

export default function AgentBuilderPage() {
    const [selectedComponents, setSelectedComponents] = useState<Component[]>([]);
    const [availableComponents, setAvailableComponents] = useState<Component[]>([
        {
            id: 'social-media',
            name: 'Social Media Aggregator',
            description: 'Collect and analyze social sentiment data',
            configs: [
                { key: 'data_source', value: 'Twitter', options: ['Twitter', 'Reddit', 'Discord'] },
            ],
        },
        {
            id: 'on-chain',
            name: 'On-Chain Metrics',
            description: 'Monitor blockchain activity and whale movements',
            configs: [
                {
                    key: 'metrics_to_track',
                    value: 'Whale Movements',
                    options: ['Whale Movements', 'Transaction Volume', 'Gas Fees'],
                },
            ],
        },
    ]);
    return (
        <div className="min-h-screen bg-background" data-oid="_ahvogk">
            {/* Header */}
            <div className="border-b" data-oid="orc8sxq">
                <div className="container mx-auto px-4 py-4" data-oid="-p3d5cc">
                    <div className="flex items-center justify-between" data-oid="orshpia">
                        <div className="flex items-center gap-4" data-oid="15bm6c7">
                            <Link href="/agents" data-oid="cxt2l6c">
                                <Button variant="ghost" size="icon" data-oid="eits493">
                                    <IconArrowLeft className="h-4 w-4" data-oid="f_ff.av" />
                                </Button>
                            </Link>
                            <h1 className="text-xl font-semibold" data-oid="5ohwqxc">
                                Create New Agent
                            </h1>
                        </div>
                        <Button className="gap-2" data-oid="dsg8r.j">
                            <IconRocket className="h-4 w-4" data-oid="imb-2ho" />
                            Deploy Agent
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8" data-oid="soapnu7">
                <div className="grid grid-cols-2 gap-8" data-oid="4kw23on">
                    {/* Left Column - Available Components */}
                    <div data-oid="duvvot1">
                        <h2 className="text-lg font-semibold mb-6" data-oid="cw5byg3">
                            Available Components
                        </h2>
                        <ScrollArea className="h-[calc(100vh-12rem)]" data-oid="622gz2m">
                            <div className="space-y-4 pr-4" data-oid="77x2j01">
                                {availableComponents.map((component) => (
                                    <Card
                                        key={component.id}
                                        className="cursor-pointer hover:bg-muted transition-colors"
                                        onClick={() => addComponent(component)}
                                        data-oid="6_4uuxn"
                                    >
                                        <CardHeader data-oid="cjgx0iy">
                                            <CardTitle className="text-base" data-oid="4-nng4x">
                                                {component.name}
                                            </CardTitle>
                                            <CardDescription data-oid="86v3ev:">
                                                {component.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                    {/* Right Column - Component Configuration */}
                    <ScrollArea className="h-[calc(100vh-12rem)]" data-oid="tnuzuf.">
                        <div className="space-y-4 pr-4" data-oid="yw6kop8">
                            {selectedComponents.map((component) => (
                                <Card key={component.id} data-oid="tpny:5p">
                                    <CardHeader
                                        className="flex flex-row items-start justify-between space-y-0"
                                        data-oid="gq4_e23"
                                    >
                                        <div data-oid="odyas1e">
                                            <CardTitle className="text-base" data-oid="srj9s69">
                                                {component.name}
                                            </CardTitle>
                                            <CardDescription data-oid="gln9.bd">
                                                {component.description}
                                            </CardDescription>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeComponent(component.id)}
                                            data-oid="icjd7w3"
                                        >
                                            ×
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="space-y-4" data-oid="z_wzc.5">
                                        {component.configs.map((config) => (
                                            <div
                                                key={config.key}
                                                className="space-y-2"
                                                data-oid="azmt0.v"
                                            >
                                                <label
                                                    className="text-sm text-muted-foreground"
                                                    data-oid="lv.7mod"
                                                >
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
                                                        data-oid="erlpef."
                                                    >
                                                        <SelectTrigger data-oid="22trny1">
                                                            <SelectValue data-oid="8b4sup9" />
                                                        </SelectTrigger>
                                                        <SelectContent data-oid="6hd2-mo">
                                                            {config.options.map((option) => (
                                                                <SelectItem
                                                                    key={option}
                                                                    value={option}
                                                                    data-oid=".d71b74"
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
                                                        data-oid=".0fbd8y"
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
