'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import dynamic from 'next/dynamic';
import { useCallback, useRef } from 'react';
import { Connection, Edge, Handle, MarkerType, Node, Position, ReactFlowProvider, useEdgesState, useNodesState, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from '../components/Sidebar';

// Dynamically import ReactFlow with no SSR
const ReactFlow = dynamic(() => import('reactflow'), {
    ssr: false,
});

// Dynamically import ReactFlow components
const ReactFlowBackground = dynamic(() => import('reactflow').then((mod) => mod.Background), {
    ssr: false,
});

const ReactFlowControls = dynamic(() => import('reactflow').then((mod) => mod.Controls), {
    ssr: false,
});

const ReactFlowPanel = dynamic(() => import('reactflow').then((mod) => mod.Panel), {
    ssr: false,
});

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

const CustomNode = ({ data }: { data: { label: string; description: string } }) => {
    return (
        <div className="group relative" data-oid="z:no0jv">
            <Handle
                type="target"
                position={Position.Left}
                className="!bg-primary !border-primary !w-3 !h-3 !-left-1.5 hover:!w-4 hover:!h-4 transition-all"
                data-oid="4ry1ydp"
            />

            <Card
                className="min-w-[240px] border border-border bg-card shadow-sm transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-md"
                data-oid="537-isi"
            >
                <CardHeader className="p-4" data-oid="zn36w3b">
                    <CardTitle
                        className="text-sm font-medium text-card-foreground"
                        data-oid="db20t2b"
                    >
                        {data.label}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground" data-oid="ft2w-xp">
                        {data.description}
                    </CardDescription>
                </CardHeader>
            </Card>
            <Handle
                type="source"
                position={Position.Right}
                className="!bg-primary !border-primary !w-3 !h-3 !-right-1.5 hover:!w-4 hover:!h-4 transition-all"
                data-oid="qe_pxhn"
            />
        </div>
    );
};

// Define nodeTypes outside the component to prevent recreation on render
const nodeTypes = {
    custom: CustomNode,
};

const defaultEdgeOptions = {
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'hsl(var(--primary))',
    },
};

// Create a ReactFlow wrapper component
const ReactFlowWrapper = () => {
    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const reactFlowInstance = useReactFlow();

    const onConnect = useCallback(
        (params: Connection) => {
            if (!params.source || !params.target) return;

            const newEdge: Edge = {
                ...params,
                id: `e-${params.source}-${params.target}`,
                source: params.source,
                target: params.target,
                type: 'smoothstep',
                animated: true,
                style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    color: 'hsl(var(--primary))',
                },
            };
            setEdges((eds) => [...eds, newEdge]);
        },
        [setEdges]
    );

    const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            console.log('Drop event triggered');

            try {
                const bounds = reactFlowWrapper.current?.getBoundingClientRect();
                if (!bounds) return;

                const data = event.dataTransfer.getData('application/json');
                if (!data) {
                    console.error('No data received in drop event');
                    return;
                }

                console.log('Received data:', data);
                const agent = JSON.parse(data) as DraggableAgent;
                console.log('Parsed agent:', agent);

                const position = reactFlowInstance.screenToFlowPosition({
                    x: event.clientX - bounds.left,
                    y: event.clientY - bounds.top,
                });
                console.log('Calculated position:', position);

                const newNode: Node = {
                    id: `${agent.type}-${Date.now()}`,
                    type: 'custom',
                    position,
                    data: { label: agent.label, description: agent.description },
                };
                console.log('Creating new node:', newNode);

                setNodes((nds) => [...nds, newNode]);
            } catch (error) {
                console.error('Error during drag and drop:', error);
            }
        },
        [reactFlowInstance, setNodes]
    );

    return (
        <div className="flex-1 flex flex-col" data-oid="yyjv3w:">
            {/* Header */}
            <div className="border-b border-border p-4" data-oid="tue_g4h">
                <div className="container mx-auto" data-oid="o3v00z0">
                    <div className="flex justify-between items-center" data-oid="ovo7ry_">
                        <div data-oid="0o574md">
                            <h1
                                className="text-2xl font-semibold text-foreground"
                                data-oid="3t69sq6"
                            >
                                Workflow Builder
                            </h1>
                            <p className="text-muted-foreground" data-oid="c-riu.7">
                                Connect and orchestrate your agents
                            </p>
                        </div>
                        <Button variant="secondary" data-oid=":-uy1wi">
                            Save Workflow
                        </Button>
                    </div>
                </div>
            </div>

            {/* Flow Builder */}
            <div
                className="flex-1 p-4 overflow-hidden"
                ref={reactFlowWrapper}
                data-oid="b_p:eov"
            >
                <ReactFlow
                    nodes={nodes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    defaultEdgeOptions={defaultEdgeOptions}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    fitView
                    data-oid="tq51h4."
                >
                    <ReactFlowBackground data-oid="ivitgd-" />
                    <ReactFlowControls data-oid="u8h6r68" />

                    <ReactFlowPanel
                        position="top-center"
                        className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-2"
                        data-oid="1fahitd"
                    >
                        Drag agents from the sidebar and connect them to create a workflow
                    </ReactFlowPanel>
                </ReactFlow>
            </div>
        </div>
    );
};

export default function WorkflowsPage() {
    // Create drag start handler for the sidebar items
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, agent: DraggableAgent) => {
        console.log('Drag start:', agent);
        event.dataTransfer.setData('application/json', JSON.stringify(agent));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className="flex h-screen bg-background" data-oid="pdncfkh">
            <Sidebar data-oid="w4ezc_7" />

            <div className="flex-1 flex" data-oid="mhk59kb">
                {/* Agent Sidebar */}
                <div className="w-80 border-r border-border p-4" data-oid="v6:ldeq">
                    <h2 className="text-lg font-semibold text-foreground mb-4" data-oid=":py2p77">
                        Available Agents
                    </h2>
                    <ScrollArea className="h-[calc(100vh-8rem)]" data-oid="rhi45n7">
                        <div className="space-y-3 pr-4" data-oid="-wbpjvk">
                            {availableAgents.map((agent) => (
                                <Card
                                    key={agent.type}
                                    draggable="true"
                                    onDragStart={(e) => onDragStart(e, agent)}
                                    className="cursor-move border border-border bg-card hover:bg-muted/50 hover:border-primary/50 transition-all duration-200"
                                    data-oid="vogx_16"
                                >
                                    <CardHeader className="p-4" data-oid="plfehih">
                                        <CardTitle
                                            className="text-sm font-medium text-foreground"
                                            data-oid="b:ipqp_"
                                        >
                                            {agent.label}
                                        </CardTitle>
                                        <CardDescription
                                            className="text-xs text-muted-foreground"
                                            data-oid="iqfp9wl"
                                        >
                                            {agent.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                {/* Flow Builder Component */}
                <ReactFlowProvider>
                    <ReactFlowWrapper />
                </ReactFlowProvider>
            </div>
        </div>
    );
}
