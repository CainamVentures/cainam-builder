'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import ReactFlow, {
    addEdge,
    Background,
    Connection,
    Controls,
    Edge,
    MarkerType,
    Node,
    NodeTypes,
    Panel,
    useEdgesState,
    useNodesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from '../components/Sidebar';

interface DraggableAgent {
    type: string;
    label: string;
    description: string;
}

const availableAgents: DraggableAgent[] = [
    {
        type: 'social-media',
        label: 'Social Media Aggregator',
        description: 'Collect and analyze social sentiment data',
    },
    {
        type: 'on-chain',
        label: 'On-Chain Metrics',
        description: 'Monitor blockchain activity and whale movements',
    },
    {
        type: 'sentiment',
        label: 'Sentiment Analysis Model',
        description: 'Process social data using fine-tuned LLMs',
    },
    {
        type: 'delta-neutral',
        label: 'Delta-Neutral Strategy',
        description: 'Maintain market neutrality while capturing funding',
    },
    {
        type: 'risk',
        label: 'Risk Management System',
        description: 'Monitor and adjust position sizes and exposure',
    },
    {
        type: 'mev',
        label: 'MEV-Resistant Executor',
        description: 'Execute trades with minimal slippage and MEV protection',
    },
];

const initialNodes: Node[] = [];

const initialEdges: Edge[] = [];

export default function WorkflowsPage() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

    const onConnect = (params: Connection) => {
        setEdges((eds) => addEdge({
            ...params,
            animated: true,
            style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
            markerEnd: {
                type: MarkerType.ArrowClosed,
                color: 'hsl(var(--primary))',
            },
        }, eds));
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>, agent: DraggableAgent) => {
        event.dataTransfer.setData('application/json', JSON.stringify(agent));
        event.dataTransfer.effectAllowed = 'move';
    };

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (!reactFlowInstance) return;

        const agent = JSON.parse(event.dataTransfer.getData('application/json')) as DraggableAgent;
        const position = reactFlowInstance.screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });

        const newNode: Node = {
            id: `${agent.type}-${Math.random()}`,
            type: 'custom',
            position,
            data: { label: agent.label, description: agent.description },
        };

        setNodes((nds) => [...nds, newNode]);
    };

    const CustomNode = ({ data }: { data: { label: string; description: string } }) => {
        return (
            <div className="group">
                <Card className="min-w-[240px] border border-border bg-card shadow-sm transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-md">
                    <CardHeader className="p-4">
                        <CardTitle className="text-sm font-medium text-card-foreground">{data.label}</CardTitle>
                        <CardDescription className="text-xs text-muted-foreground">
                            {data.description}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        );
    };

    const nodeTypes: NodeTypes = {
        custom: CustomNode,
    };

    return (
        <div className="flex h-screen bg-background">
            <Sidebar />

            <div className="flex-1 flex">
                {/* Agent Sidebar */}
                <div className="w-80 border-r border-border p-4">
                    <h2 className="text-lg font-semibold text-foreground mb-4">Available Agents</h2>
                    <ScrollArea className="h-[calc(100vh-8rem)]">
                        <div className="space-y-3 pr-4">
                            {availableAgents.map((agent) => (
                                <Card
                                    key={agent.type}
                                    draggable
                                    onDragStart={(e) => onDragStart(e, agent)}
                                    className="cursor-move border border-border bg-card hover:bg-muted/50 hover:border-primary/50 transition-all duration-200"
                                >
                                    <CardHeader className="p-4">
                                        <CardTitle className="text-sm font-medium text-card-foreground">
                                            {agent.label}
                                        </CardTitle>
                                        <CardDescription className="text-xs text-muted-foreground">
                                            {agent.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="border-b border-border p-4">
                        <div className="container mx-auto">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-2xl font-semibold text-foreground">Workflow Builder</h1>
                                    <p className="text-muted-foreground">Connect and orchestrate your agents</p>
                                </div>
                                <Button variant="secondary">Save Workflow</Button>
                            </div>
                        </div>
                    </div>

                    {/* Flow Builder */}
                    <div className="flex-1">
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onInit={setReactFlowInstance}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            nodeTypes={nodeTypes}
                            defaultEdgeOptions={{
                                animated: true,
                                style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
                                markerEnd: {
                                    type: MarkerType.ArrowClosed,
                                    color: 'hsl(var(--primary))',
                                },
                            }}
                            fitView
                            className="bg-background"
                        >
                            <Background gap={16} size={1} className="!bg-muted/30" color="hsl(var(--border))" />
                            <Controls className="!bg-background !border-border" />
                            <Panel position="top-center" className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-2">
                                Drag agents from the sidebar and connect them to create a workflow
                            </Panel>
                        </ReactFlow>
                    </div>
                </div>
            </div>
        </div>
    );
}
