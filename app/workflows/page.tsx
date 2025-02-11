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
        <div
            className="bg-gray-900 border border-orange-600 rounded-md px-4 py-2 shadow-lg"
            data-oid="nksf.0h"
        >
            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 !bg-orange-600"
                data-oid="iz1lr9g"
            />

            <div className="text-sm font-medium" data-oid="o-qpciq">
                {data.label}
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 !bg-orange-600"
                data-oid=".keyhxv"
            />
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
        <div className="flex h-screen bg-black text-white" data-oid="bru:_ct">
            {/* Main Sidebar */}
            <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2" data-oid="wk7f.b4">
                <div className="mb-8" data-oid="o55k366">
                    <h2 className="text-xl font-semibold" data-oid=":f1d2bf">
                        ELIZAFlow
                    </h2>
                </div>

                <nav className="flex flex-col gap-2" data-oid="6hwk2w1">
                    <SidebarItem
                        icon={<IconHome size={20} data-oid="6:vbtk8" />}
                        text="Agents"
                        href="/agents"
                        active={pathname === '/agents'}
                        data-oid="yq_g4_u"
                    />

                    <SidebarItem
                        icon={<IconBoxMultiple size={20} data-oid="ttvqt6u" />}
                        text="Workflows"
                        href="/workflows"
                        active={pathname === '/workflows'}
                        data-oid="gqgh9df"
                    />

                    <SidebarItem
                        icon={<IconTools size={20} data-oid="hbpiaqi" />}
                        text="Tools"
                        href="/tools"
                        active={pathname === '/tools'}
                        data-oid="g43p2q3"
                    />

                    <SidebarItem
                        icon={<IconBook size={20} data-oid="-kvs1_w" />}
                        text="Resources"
                        href="/resources"
                        active={pathname === '/resources'}
                        data-oid="zsqb6ah"
                    />

                    <SidebarItem
                        icon={<IconRoute size={20} data-oid="rf0859_" />}
                        text="Scenarios"
                        href="/scenarios"
                        active={pathname === '/scenarios'}
                        data-oid="v_0zs-0"
                    />

                    <SidebarItem
                        icon={<IconSettings size={20} data-oid="v5wie83" />}
                        text="Settings"
                        href="/settings"
                        active={pathname === '/settings'}
                        data-oid="ge102db"
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex" data-oid="nn0b-l3">
                {/* Flow Editor */}
                <div className="flex-1 flex flex-col" data-oid=".40n:dc">
                    {/* Header */}
                    <div
                        className="h-14 border-b border-gray-800 flex items-center justify-between px-4"
                        data-oid="y8.nlin"
                    >
                        <div className="flex items-center gap-2" data-oid="y66nioc">
                            <span data-oid="5.4127o">Workflows</span>
                            <IconChevronRight
                                size={16}
                                className="text-gray-500"
                                data-oid="3sv_406"
                            />

                            <span data-oid=":dleb67">New Workflow</span>
                        </div>
                        <div className="flex items-center gap-4" data-oid="2-gry.y">
                            <button
                                className="px-3 py-1.5 text-sm rounded bg-gray-800 hover:bg-gray-700"
                                data-oid="32x-:nc"
                            >
                                <IconDownload size={16} data-oid="z1fdf8l" />
                            </button>
                            <button
                                className="px-3 py-1.5 text-sm rounded bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
                                data-oid="d.c5_7g"
                            >
                                <IconRocket size={16} data-oid="u5ml:v3" />
                                Deploy
                            </button>
                        </div>
                    </div>

                    {/* Flow Canvas */}
                    <div
                        className="flex-1"
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                        data-oid="jaq44p3"
                    >
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            nodeTypes={nodeTypes}
                            fitView
                            data-oid="hbq8we:"
                        >
                            <Background data-oid="0zu4lv1" />
                            <Controls data-oid="fm1gk_h" />
                            <Panel position="top-left" data-oid="nmy:mi8">
                                <div className="bg-gray-900 p-2 rounded" data-oid="yod9c-0">
                                    <div className="text-sm text-gray-400" data-oid="1lbk8pr">
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
                    data-oid="2hw-az-"
                >
                    <div className="p-4" data-oid="gedfvhq">
                        <div className="flex items-center justify-between mb-4" data-oid="q2u5932">
                            <div
                                className={sidebarCollapsed ? 'hidden' : 'block'}
                                data-oid="54em38g"
                            >
                                <div className="relative" data-oid="yi_yi:j">
                                    <IconSearch
                                        size={16}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        data-oid="34kd5x_"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Search nodes..."
                                        className="w-full bg-gray-900 rounded pl-8 pr-4 py-1.5 text-sm"
                                        data-oid="_tt5y-4"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                                className="p-1 hover:bg-gray-800 rounded"
                                data-oid="tax5617"
                            >
                                <IconLayoutSidebarRightCollapse
                                    size={20}
                                    className={sidebarCollapsed ? 'rotate-180' : ''}
                                    data-oid="qwp7the"
                                />
                            </button>
                        </div>

                        {!sidebarCollapsed && (
                            <div className="space-y-2" data-oid="xl59891">
                                <NodeCategory
                                    title="AGENTS"
                                    isOpen={selectedCategory === 'AGENTS'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'AGENTS' ? null : 'AGENTS',
                                        )
                                    }
                                    data-oid="_9f..g2"
                                >
                                    <DraggableNode
                                        name="Marketing Agent"
                                        description="Analyzes market sentiment"
                                        data-oid="ifmjbta"
                                    />

                                    <DraggableNode
                                        name="Token Researcher"
                                        description="Analyzes token fundamentals"
                                        data-oid="uyhc9sv"
                                    />

                                    <DraggableNode
                                        name="Investor Relations"
                                        description="Manages stakeholder communications"
                                        data-oid="ui_mmo2"
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
                                    data-oid="p6_kwk9"
                                />

                                <NodeCategory
                                    title="ACTIONS"
                                    isOpen={selectedCategory === 'ACTIONS'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'ACTIONS' ? null : 'ACTIONS',
                                        )
                                    }
                                    data-oid="j6gzkdi"
                                />

                                <NodeCategory
                                    title="TOOLS"
                                    isOpen={selectedCategory === 'TOOLS'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'TOOLS' ? null : 'TOOLS',
                                        )
                                    }
                                    data-oid="xccnj2s"
                                />

                                <NodeCategory
                                    title="OUTPUT"
                                    isOpen={selectedCategory === 'OUTPUT'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'OUTPUT' ? null : 'OUTPUT',
                                        )
                                    }
                                    data-oid="qa.jx4f"
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
        <Link href={href} data-oid="jsum.y_">
            <div
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer ${active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                data-oid="ewl5j1i"
            >
                {icon}
                <span data-oid="5s3yfd.">{text}</span>
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
        <div className="space-y-2" data-oid="zjpabfg">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between text-sm text-gray-400 hover:text-white"
                data-oid="8v7r87h"
            >
                <span data-oid="p4n1x06">{title}</span>
                <IconChevronRight
                    size={16}
                    className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    data-oid="n9bvux_"
                />
            </button>
            {isOpen && children && (
                <div className="space-y-2" data-oid="zbv_pt:">
                    {children}
                </div>
            )}
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
            data-oid="aqj08jh"
        >
            <div className="flex items-center justify-between mb-1" data-oid="bpm1q_m">
                <span className="text-sm font-medium" data-oid=":dh3opo">
                    {name}
                </span>
                <IconPlus size={16} className="text-gray-500" data-oid="n3-2.el" />
            </div>
            <p className="text-xs text-gray-500" data-oid="ygi.v.2">
                {description}
            </p>
        </div>
    );
}
