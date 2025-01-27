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
            data-oid="mggbbeo"
        >
            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 !bg-orange-600"
                data-oid="cskfnd:"
            />

            <div className="text-sm font-medium" data-oid="hkhcou5">
                {data.label}
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 !bg-orange-600"
                data-oid="fa8f_qy"
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
        <div className="flex h-screen bg-black text-white" data-oid="2sw3khi">
            {/* Main Sidebar */}
            <div className="w-64 bg-[#111111] p-4 flex flex-col gap-2" data-oid="0qq.hop">
                <div className="mb-8" data-oid="2-epqd:">
                    <h2 className="text-xl font-semibold" data-oid="649gh_0">
                        ELIZAFlow
                    </h2>
                </div>

                <nav className="flex flex-col gap-2" data-oid="a8piljz">
                    <SidebarItem
                        icon={<IconHome size={20} data-oid="7nuazwy" />}
                        text="Agents"
                        href="/agents"
                        active={pathname === '/agents'}
                        data-oid="eeh.4od"
                    />

                    <SidebarItem
                        icon={<IconBoxMultiple size={20} data-oid="5wypbvu" />}
                        text="Workflows"
                        href="/workflows"
                        active={pathname === '/workflows'}
                        data-oid="_s-bqf1"
                    />

                    <SidebarItem
                        icon={<IconTools size={20} data-oid="hqsakd_" />}
                        text="Tools"
                        href="/tools"
                        active={pathname === '/tools'}
                        data-oid="a.pkk.w"
                    />

                    <SidebarItem
                        icon={<IconBook size={20} data-oid="veww-ec" />}
                        text="Resources"
                        href="/resources"
                        active={pathname === '/resources'}
                        data-oid="t_4_0g9"
                    />

                    <SidebarItem
                        icon={<IconRoute size={20} data-oid="mu5k2qh" />}
                        text="Scenarios"
                        href="/scenarios"
                        active={pathname === '/scenarios'}
                        data-oid="z:4ugu7"
                    />

                    <SidebarItem
                        icon={<IconSettings size={20} data-oid="sov8idi" />}
                        text="Settings"
                        href="/settings"
                        active={pathname === '/settings'}
                        data-oid="ld8r_4j"
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex" data-oid="f3bttmt">
                {/* Flow Editor */}
                <div className="flex-1 flex flex-col" data-oid="13h8sjb">
                    {/* Header */}
                    <div
                        className="h-14 border-b border-gray-800 flex items-center justify-between px-4"
                        data-oid="953d89v"
                    >
                        <div className="flex items-center gap-2" data-oid="i.jojsr">
                            <span data-oid="po0r-95">Workflows</span>
                            <IconChevronRight
                                size={16}
                                className="text-gray-500"
                                data-oid="z-ptkrg"
                            />

                            <span data-oid="y6xy9wg">New Workflow</span>
                        </div>
                        <div className="flex items-center gap-4" data-oid="fn-05sr">
                            <button
                                className="px-3 py-1.5 text-sm rounded bg-gray-800 hover:bg-gray-700"
                                data-oid="2rw93__"
                            >
                                <IconDownload size={16} data-oid="._ws6dr" />
                            </button>
                            <button
                                className="px-3 py-1.5 text-sm rounded bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
                                data-oid="-ys_9la"
                            >
                                <IconRocket size={16} data-oid="4ifhbx5" />
                                Deploy
                            </button>
                        </div>
                    </div>

                    {/* Flow Canvas */}
                    <div
                        className="flex-1"
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                        data-oid="o.z:els"
                    >
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            nodeTypes={nodeTypes}
                            fitView
                            data-oid="ne89w0w"
                        >
                            <Background data-oid="b704f9c" />
                            <Controls data-oid="jlh7hzd" />
                            <Panel position="top-left" data-oid="950_n0-">
                                <div className="bg-gray-900 p-2 rounded" data-oid="6:s9jvp">
                                    <div className="text-sm text-gray-400" data-oid="93hg5b8">
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
                    data-oid="fuezmpp"
                >
                    <div className="p-4" data-oid="x-44.yx">
                        <div className="flex items-center justify-between mb-4" data-oid="7a3ptea">
                            <div
                                className={sidebarCollapsed ? 'hidden' : 'block'}
                                data-oid="32axgly"
                            >
                                <div className="relative" data-oid="ms:qmfz">
                                    <IconSearch
                                        size={16}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        data-oid="yj9lc-c"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Search nodes..."
                                        className="w-full bg-gray-900 rounded pl-8 pr-4 py-1.5 text-sm"
                                        data-oid="sgz0rwu"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                                className="p-1 hover:bg-gray-800 rounded"
                                data-oid="8s_l7tq"
                            >
                                <IconLayoutSidebarRightCollapse
                                    size={20}
                                    className={sidebarCollapsed ? 'rotate-180' : ''}
                                    data-oid="hwvrt-r"
                                />
                            </button>
                        </div>

                        {!sidebarCollapsed && (
                            <div className="space-y-2" data-oid="d05_d8q">
                                <NodeCategory
                                    title="AGENTS"
                                    isOpen={selectedCategory === 'AGENTS'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'AGENTS' ? null : 'AGENTS',
                                        )
                                    }
                                    data-oid="up1m-d4"
                                >
                                    <DraggableNode
                                        name="Marketing Agent"
                                        description="Analyzes market sentiment"
                                        data-oid="1.ebcdw"
                                    />

                                    <DraggableNode
                                        name="Token Researcher"
                                        description="Analyzes token fundamentals"
                                        data-oid="5lqc2z4"
                                    />

                                    <DraggableNode
                                        name="Investor Relations"
                                        description="Manages stakeholder communications"
                                        data-oid="coc05uw"
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
                                    data-oid="5vvd6_5"
                                />

                                <NodeCategory
                                    title="ACTIONS"
                                    isOpen={selectedCategory === 'ACTIONS'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'ACTIONS' ? null : 'ACTIONS',
                                        )
                                    }
                                    data-oid="gq.dpxe"
                                />

                                <NodeCategory
                                    title="TOOLS"
                                    isOpen={selectedCategory === 'TOOLS'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'TOOLS' ? null : 'TOOLS',
                                        )
                                    }
                                    data-oid="h2be1yp"
                                />

                                <NodeCategory
                                    title="OUTPUT"
                                    isOpen={selectedCategory === 'OUTPUT'}
                                    onClick={() =>
                                        setSelectedCategory(
                                            selectedCategory === 'OUTPUT' ? null : 'OUTPUT',
                                        )
                                    }
                                    data-oid="77nq7ql"
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
        <Link href={href} data-oid="u51if9j">
            <div
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer ${active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                data-oid="4w.ztc-"
            >
                {icon}
                <span data-oid="i0--7if">{text}</span>
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
        <div className="space-y-2" data-oid="d45ppw:">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between text-sm text-gray-400 hover:text-white"
                data-oid="tw7ka:7"
            >
                <span data-oid="-fdjzrd">{title}</span>
                <IconChevronRight
                    size={16}
                    className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    data-oid=":-2yhti"
                />
            </button>
            {isOpen && children && (
                <div className="space-y-2" data-oid="g06wx-1">
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
            data-oid="-f-eyn5"
        >
            <div className="flex items-center justify-between mb-1" data-oid=".845rnr">
                <span className="text-sm font-medium" data-oid="2wjy66j">
                    {name}
                </span>
                <IconPlus size={16} className="text-gray-500" data-oid="9wgj7:6" />
            </div>
            <p className="text-xs text-gray-500" data-oid="sjowjrf">
                {description}
            </p>
        </div>
    );
}
