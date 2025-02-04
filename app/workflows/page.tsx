'use client';

import { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ReactFlow, {
    Background,
    Controls,
    Panel,
    useNodesState,
    useEdgesState,
    addEdge,
    Handle,
    Position,
    NodeProps,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {
    IconHome,
    IconTools,
    IconSettings,
    IconBook,
    IconBoxMultiple,
    IconRoute,
    IconChevronRight,
    IconDownload,
    IconRocket,
    IconSearch,
    IconLayoutSidebarRightCollapse,
    IconPlus,
} from '@tabler/icons-react';
const initialNodes = [];
const initialEdges = [];
const CustomNode = memo(({ data }: NodeProps) => {
    return (
        <div className="bg-gray-900 border border-orange-600 rounded-md px-4 py-2 shadow-lg">
            <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-orange-600" />

            <div className="text-sm font-medium">{data.label}</div>
            <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-orange-600" />
        </div>
    );
});
CustomNode.displayName = 'CustomNode';
const nodeTypes = {
    customNode: CustomNode,
};
export default function WorkflowEditor() {
    const pathname = usePathname();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>('AGENTS');
    const onConnect = useCallback(
        (params: any) => {
            setEdges((eds) => addEdge(params, eds));
        },
        [setEdges],
    );
    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);
    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();
            const reactFlowBounds = document.querySelector('.react-flow')?.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');
            const name = event.dataTransfer.getData('nodeName');
            if (!reactFlowBounds || !type) {
                return;
            }

            // Get the current zoom level and pan offset from ReactFlow
            const flowInstance = document.querySelector('.react-flow-renderer');
            const transform = flowInstance?.style.transform;
            const match = transform?.match(/scale\((.*?)\)/);
            const scale = match ? parseFloat(match[1]) : 1;
            const position = {
                x: (event.clientX - reactFlowBounds.left) / scale,
                y: (event.clientY - reactFlowBounds.top) / scale,
            };

            // Check for overlapping nodes
            const isOverlapping = nodes.some((node) => {
                const xOverlap = Math.abs(node.position.x - position.x) < 150;
                const yOverlap = Math.abs(node.position.y - position.y) < 50;
                return xOverlap && yOverlap;
            });

            // Adjust position if overlapping
            if (isOverlapping) {
                position.x += 160;
            }
            const newNode = {
                id: `${type}-${nodes.length + 1}`,
                type: 'customNode',
                position,
                data: {
                    label: name || type,
                },
            };
            setNodes((nds) => nds.concat(newNode));
        },
        [nodes, setNodes],
    );
    return (
        <div className="flex h-screen bg-black text-white">
            {/* Main Sidebar */}
            <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">ELIZAFlow</h2>
                </div>

                <nav className="flex flex-col gap-2">
                    <SidebarItem
                        icon={<IconHome size={20} />}
                        text="Agents"
                        href="/agents"
                        active={pathname === '/agents'}
                    />

                    <SidebarItem
                        icon={<IconBoxMultiple size={20} />}
                        text="Workflows"
                        href="/workflows"
                        active={pathname === '/workflows'}
                    />

                    <SidebarItem
                        icon={<IconTools size={20} />}
                        text="Tools"
                        href="/tools"
                        active={pathname === '/tools'}
                    />

                    <SidebarItem
                        icon={<IconBook size={20} />}
                        text="Resources"
                        href="/resources"
                        active={pathname === '/resources'}
                    />

                    <SidebarItem
                        icon={<IconRoute size={20} />}
                        text="Scenarios"
                        href="/scenarios"
                        active={pathname === '/scenarios'}
                    />

                    <SidebarItem
                        icon={<IconSettings size={20} />}
                        text="Settings"
                        href="/settings"
                        active={pathname === '/settings'}
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex">
                {/* Flow Editor */}
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="h-14 border-b border-gray-800 flex items-center justify-between px-4">
                        <div className="flex items-center gap-2">
                            <span>Workflows</span>
                            <IconChevronRight size={16} className="text-gray-500" />

                            <span>New Workflow</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="px-3 py-1.5 text-sm rounded bg-gray-800 hover:bg-gray-700">
                                <IconDownload size={16} />
                            </button>
                            <button className="px-3 py-1.5 text-sm rounded bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
                                <IconRocket size={16} />
                                Deploy
                            </button>
                        </div>
                    </div>

                    {/* Flow Canvas */}
                    <div className="flex-1" onDragOver={onDragOver} onDrop={onDrop}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            nodeTypes={nodeTypes}
                            fitView
                        >
                            <Background />
                            <Controls />
                            <Panel position="top-left">
                                <div className="bg-gray-900 p-2 rounded">
                                    <div className="text-sm text-gray-400">
                                        {nodes.length} nodes · {edges.length} connections
                                    </div>
                                </div>
                            </Panel>
                        </ReactFlow>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div
                    className={`bg-[#111111] transition-all duration-200 ${sidebarCollapsed ? 'w-12' : 'w-64'}`}
                >
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className={sidebarCollapsed ? 'hidden' : 'block'}>
                                <div className="relative">
                                    <IconSearch
                                        size={16}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Search nodes..."
                                        className="w-full bg-gray-900 rounded pl-8 pr-4 py-1.5 text-sm"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                                className="p-1 hover:bg-gray-800 rounded"
                            >
                                <IconLayoutSidebarRightCollapse
                                    size={20}
                                    className={sidebarCollapsed ? 'rotate-180' : ''}
                                />
                            </button>
                        </div>

                        {!sidebarCollapsed && (
                            <div className="space-y-2">
                                <NodeCategory
                                    title="AGENTS"
                                    isOpen={selectedCategory === 'AGENTS'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'AGENTS' ? null : 'AGENTS',
                                        )
                                    }
                                >
                                    <DraggableNode
                                        name="Marketing Agent"
                                        description="Analyzes market sentiment"
                                    />

                                    <DraggableNode
                                        name="Token Researcher"
                                        description="Analyzes token fundamentals"
                                    />

                                    <DraggableNode
                                        name="Investor Relations"
                                        description="Manages stakeholder communications"
                                    />
                                </NodeCategory>

                                <NodeCategory
                                    title="INPUT"
                                    isOpen={selectedCategory === 'INPUT'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'INPUT' ? null : 'INPUT',
                                        )
                                    }
                                />

                                <NodeCategory
                                    title="ACTIONS"
                                    isOpen={selectedCategory === 'ACTIONS'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'ACTIONS' ? null : 'ACTIONS',
                                        )
                                    }
                                />

                                <NodeCategory
                                    title="TOOLS"
                                    isOpen={selectedCategory === 'TOOLS'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'TOOLS' ? null : 'TOOLS',
                                        )
                                    }
                                />

                                <NodeCategory
                                    title="OUTPUT"
                                    isOpen={selectedCategory === 'OUTPUT'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'OUTPUT' ? null : 'OUTPUT',
                                        )
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
function SidebarItem({
    icon,
    text,
    active = false,
    href,
}: {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    href: string;
}) {
    return (
        <Link href={href}>
            <div
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer ${active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
            >
                {icon}
                <span>{text}</span>
            </div>
        </Link>
    );
}
function NodeCategory({
    title,
    children,
    isOpen,
    onClick,
}: {
    title: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="space-y-2">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between text-sm text-gray-400 hover:text-white"
            >
                <span>{title}</span>
                <IconChevronRight
                    size={16}
                    className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
                />
            </button>
            {isOpen && children && <div className="space-y-2">{children}</div>}
        </div>
    );
}
function DraggableNode({ name, description }: { name: string; description: string }) {
    const onDragStart = (event: React.DragEvent, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('nodeName', name);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, 'default')}
            className="bg-gray-900 p-3 rounded cursor-move hover:bg-gray-800"
        >
            <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{name}</span>
                <IconPlus size={16} className="text-gray-500" />
            </div>
            <p className="text-xs text-gray-500">{description}</p>
        </div>
    );
}
