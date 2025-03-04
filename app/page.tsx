'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ChartDemo from '@/components/ui/chart-demo';
import {
    ChatBubble,
    ChatBubbleMessage,
    ChatInput,
    ChatMessageList,
    ExpandableChat,
    ExpandableChatBody,
    ExpandableChatFooter,
    ExpandableChatHeader,
} from '@/components/ui/expandable-chat';
import { IconArrowUpRight, IconBrain, IconRobot, IconWallet } from '@tabler/icons-react';
import { FormEvent, useState } from 'react';
import Sidebar from './components/Sidebar';

interface Message {
    role: 'agent' | 'user';
    content: string;
    timestamp: string;
}

export default function HomePage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'agent',
            content: 'How I can help you?',
            timestamp: '12:00',
        },
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(true);

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const newMessage: Message = {
            role: 'user',
            content: inputMessage,
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages([...messages, newMessage]);
        setInputMessage('');
    };

    return (
        <div className="flex min-h-screen bg-background" data-oid="mvu4.r-">
            <Sidebar data-oid="ka41spd" />

            <div className="flex-1 flex flex-col lg:flex-row" data-oid="xmgf06y">
                {/* Main Content */}
                <div className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6" data-oid="tfuni1h">
                    {/* Header */}
                    <div
                        className="flex flex-col md:flex-row justify-between items-start gap-4"
                        data-oid="_a7i2-v"
                    >
                        <div data-oid="h--bkc:">
                            <div className="flex items-center gap-3 mb-2" data-oid=":w7k:6o">
                                <div
                                    className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center"
                                    data-oid="6s-vf-8"
                                >
                                    <IconRobot
                                        className="h-5 w-5 md:h-6 md:w-6 text-primary"
                                        data-oid="yf7mo4."
                                    />
                                </div>
                                <div data-oid=".:31ar:">
                                    <h1
                                        className="text-xl md:text-2xl font-semibold text-foreground"
                                        data-oid="zze-w8o"
                                    >
                                        Cairos
                                    </h1>
                                    <p className="text-sm text-muted-foreground" data-oid="cjlxpxf">
                                        Professional-grade autonomous trading agent
                                    </p>
                                </div>
                            </div>
                            <p
                                className="text-sm md:text-base text-muted-foreground max-w-2xl"
                                data-oid="tuv2ewd"
                            >
                                A professional-grade autonomous agent designed to manage
                                multi-million-dollar hedge fund capital. Capable of implementing
                                sophisticated trading strategies such as statistical arbitrage,
                                market-neutral, and macro-driven trades.
                            </p>
                        </div>
                        <Button
                            variant="secondary"
                            className="gap-2 w-full md:w-auto"
                            data-oid="fjf0ioy"
                        >
                            <IconWallet className="h-4 w-4" data-oid="6-ndax." />
                            Connect Wallet
                        </Button>
                    </div>

                    {/* Key Metrics */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                        data-oid="-..dlxc"
                    >
                        <Card className="border-0 bg-card" data-oid="k29blp1">
                            <CardHeader className="pb-2" data-oid="1d9tde0">
                                <CardTitle
                                    className="text-sm font-medium text-muted-foreground"
                                    data-oid="9_ag2bd"
                                >
                                    Total Value
                                </CardTitle>
                            </CardHeader>
                            <CardContent data-oid="pymk4:4">
                                <div
                                    className="text-xl md:text-2xl font-bold text-foreground"
                                    data-oid="dvo.xc8"
                                >
                                    $28,971.30
                                </div>
                                <div
                                    className="flex items-center gap-1 text-xs text-green-400 mt-1"
                                    data-oid="2150agi"
                                >
                                    <IconArrowUpRight className="h-3 w-3" data-oid="b5n.hsy" />
                                    <span data-oid="7txkdd-">+$17,000 (58.7%)</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card" data-oid="3n7fi1h">
                            <CardHeader className="pb-2" data-oid="og:8fcd">
                                <CardTitle
                                    className="text-sm font-medium text-muted-foreground"
                                    data-oid=".hfy-o_"
                                >
                                    All Time PNL
                                </CardTitle>
                            </CardHeader>
                            <CardContent data-oid="cq51re5">
                                <div
                                    className="text-xl md:text-2xl font-bold text-foreground"
                                    data-oid="56kxhxs"
                                >
                                    6.59%
                                </div>
                                <div
                                    className="text-xs text-muted-foreground mt-1"
                                    data-oid="b_2nz52"
                                >
                                    90 Days Performance
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card" data-oid="lmdhyhb">
                            <CardHeader className="pb-2" data-oid="ydjjc6v">
                                <CardTitle
                                    className="text-sm font-medium text-muted-foreground"
                                    data-oid="p3.dh-k"
                                >
                                    Max Drawdown
                                </CardTitle>
                            </CardHeader>
                            <CardContent data-oid="e:6_w-m">
                                <div
                                    className="text-xl md:text-2xl font-bold text-foreground"
                                    data-oid="di4u5w4"
                                >
                                    1.58%
                                </div>
                                <div
                                    className="text-xs text-muted-foreground mt-1"
                                    data-oid="cyqp1xf"
                                >
                                    Historical Maximum
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card" data-oid="ue0c3ea">
                            <CardHeader className="pb-2" data-oid="abq5xa5">
                                <CardTitle
                                    className="text-sm font-medium text-muted-foreground"
                                    data-oid="wo67b2-"
                                >
                                    Sharpe Ratio
                                </CardTitle>
                            </CardHeader>
                            <CardContent data-oid="8dhetxx">
                                <div
                                    className="text-xl md:text-2xl font-bold text-foreground"
                                    data-oid="ec8h.x-"
                                >
                                    7.52
                                </div>
                                <div
                                    className="text-xs text-muted-foreground mt-1"
                                    data-oid="q4_32kc"
                                >
                                    Risk-Adjusted Returns
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Performance Chart */}
                    <Card className="border-0 bg-card" data-oid="e:qg::n">
                        <CardHeader data-oid="m4ua15n">
                            <div
                                className="flex flex-col md:flex-row md:items-center justify-between gap-4"
                                data-oid="ey56llk"
                            >
                                <div data-oid="-sfpgfr">
                                    <CardTitle
                                        className="text-base font-medium text-card-foreground"
                                        data-oid="1c.u5rq"
                                    >
                                        Performance
                                    </CardTitle>
                                    <CardDescription data-oid="b3zr2yb">
                                        Historical returns and projections
                                    </CardDescription>
                                </div>
                                <div className="flex flex-wrap gap-2" data-oid="zd1b95-">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs"
                                        data-oid="-2m2s0w"
                                    >
                                        1W
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs"
                                        data-oid="kbed66b"
                                    >
                                        30D
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs"
                                        data-oid="-n4:f4u"
                                    >
                                        60D
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs"
                                        data-oid="klewa47"
                                    >
                                        90D
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs"
                                        data-oid="n91awf9"
                                    >
                                        1Y
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs"
                                        data-oid="fmjz.pq"
                                    >
                                        ALL
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent data-oid="vkhob6_">
                            <ChartDemo data-oid="7kcascv" />
                        </CardContent>
                    </Card>

                    {/* Additional Stats */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
                        data-oid="0_k2byq"
                    >
                        <Card className="border-0 bg-card" data-oid="ncdeq:2">
                            <CardHeader data-oid="531jelz">
                                <CardTitle
                                    className="text-base font-medium text-card-foreground"
                                    data-oid="4grnvdf"
                                >
                                    Performance Statistics
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4" data-oid="-xbh4mq">
                                <div
                                    className="flex justify-between items-center"
                                    data-oid=".fp-8_r"
                                >
                                    <span
                                        className="text-sm text-muted-foreground"
                                        data-oid=":vsi8an"
                                    >
                                        Annualized
                                    </span>
                                    <span
                                        className="text-sm font-medium text-foreground"
                                        data-oid="k1374_c"
                                    >
                                        42.00%
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="z5etfa7"
                                >
                                    <span
                                        className="text-sm text-muted-foreground"
                                        data-oid="p8q_70m"
                                    >
                                        Volatility of Daily Returns
                                    </span>
                                    <span
                                        className="text-sm font-medium text-foreground"
                                        data-oid="7upgc9r"
                                    >
                                        4.71%
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="9m5xd85"
                                >
                                    <span
                                        className="text-sm text-muted-foreground"
                                        data-oid="m3ar-q3"
                                    >
                                        Sortino Ratio
                                    </span>
                                    <span
                                        className="text-sm font-medium text-foreground"
                                        data-oid="ad-_nb9"
                                    >
                                        4.77
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="puheq8p"
                                >
                                    <span
                                        className="text-sm text-muted-foreground"
                                        data-oid="5rzl9ti"
                                    >
                                        Correlation to BTC
                                    </span>
                                    <span
                                        className="text-sm font-medium text-foreground"
                                        data-oid="tyum-vs"
                                    >
                                        0.19
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card" data-oid="8m_o2yd">
                            <CardHeader data-oid="duk47qe">
                                <CardTitle
                                    className="text-base font-medium text-card-foreground"
                                    data-oid="f230tlo"
                                >
                                    Simulated Returns
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4" data-oid="0xc4qq6">
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="vn.3ccv"
                                >
                                    <span
                                        className="text-sm text-muted-foreground"
                                        data-oid="3mg-7y0"
                                    >
                                        Initial Investment
                                    </span>
                                    <span
                                        className="text-sm font-medium text-foreground"
                                        data-oid="dr-:57i"
                                    >
                                        $100,000
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="gdjlt:y"
                                >
                                    <span
                                        className="text-sm text-muted-foreground"
                                        data-oid="s9-bo7z"
                                    >
                                        Final Value
                                    </span>
                                    <span
                                        className="text-sm font-medium text-foreground"
                                        data-oid="7ytwsrz"
                                    >
                                        $131,000
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid=".-pr_rm"
                                >
                                    <span
                                        className="text-sm text-muted-foreground"
                                        data-oid="25tq14z"
                                    >
                                        Max Drawdown
                                    </span>
                                    <span
                                        className="text-sm font-medium text-foreground"
                                        data-oid="xv-eoev"
                                    >
                                        1.58%
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="w3_mfmt"
                                >
                                    <span
                                        className="text-sm text-muted-foreground"
                                        data-oid="3.2r62r"
                                    >
                                        Sharpe Ratio
                                    </span>
                                    <span
                                        className="text-sm font-medium text-foreground"
                                        data-oid="so-g0jl"
                                    >
                                        7.52
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card
                            className="border-0 bg-card md:col-span-2 lg:col-span-1"
                            data-oid="k:ay41d"
                        >
                            <CardHeader data-oid="x84v5io">
                                <CardTitle
                                    className="text-base font-medium text-card-foreground"
                                    data-oid="k06:mxp"
                                >
                                    Strategy Configuration
                                </CardTitle>
                            </CardHeader>
                            <CardContent data-oid=":lkc52v">
                                <div className="space-y-4" data-oid="y648gv5">
                                    <div data-oid="s8z:m.u">
                                        <h3
                                            className="text-sm font-medium text-foreground mb-2"
                                            data-oid="yhoyv6a"
                                        >
                                            Entry
                                        </h3>
                                        <p
                                            className="text-sm text-muted-foreground"
                                            data-oid=":xfp09u"
                                        >
                                            The strategy involves funding arbitrage.
                                        </p>
                                        <ul
                                            className="list-disc text-sm text-muted-foreground ml-4 mt-2 space-y-1"
                                            data-oid="j_5ev7c"
                                        >
                                            <li data-oid="i4iqjh-">
                                                Trade only perpetual pairs with sufficient volume
                                                (more than 1m daily volume)
                                            </li>
                                            <li data-oid="::_rciy">
                                                Trade only perpetual pairs with a significant
                                                funding rate (more than 0.007% per hour)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Chat Component */}
                <div
                    className={`${isChatOpen ? 'fixed inset-y-0 right-0 w-full sm:w-[400px] z-50 lg:static' : 'hidden lg:block lg:w-[400px]'} border-l border-border bg-background`}
                    data-oid="fytdhbe"
                >
                    <ExpandableChat data-oid="0fxx9ez">
                        <ExpandableChatHeader data-oid="_hso40d">
                            <div
                                className="flex items-center justify-between w-full"
                                data-oid="jqu:rmb"
                            >
                                <div className="flex items-center gap-2" data-oid="s88mg0x">
                                    <div
                                        className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"
                                        data-oid="38xfuef"
                                    >
                                        <IconBrain
                                            className="h-4 w-4 text-primary"
                                            data-oid="4cwv_t0"
                                        />
                                    </div>
                                    <div data-oid="7o-ug35">
                                        <h3 className="text-sm font-medium" data-oid="roeehx4">
                                            Cairos Assistant
                                        </h3>
                                        <p
                                            className="text-xs text-muted-foreground"
                                            data-oid="3mvtx6e"
                                        >
                                            AI-powered trading assistant
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="lg:hidden"
                                    onClick={() => setIsChatOpen(false)}
                                    data-oid="p-4pgq_"
                                >
                                    <IconArrowUpRight
                                        className="h-4 w-4 rotate-180"
                                        data-oid="3438:ah"
                                    />
                                </Button>
                            </div>
                        </ExpandableChatHeader>
                        <ExpandableChatBody data-oid="ydvmgte">
                            <ChatMessageList data-oid="qos:m4n">
                                {messages.map((message, index) => (
                                    <ChatBubble
                                        key={index}
                                        variant={message.role === 'agent' ? 'received' : 'sent'}
                                        className="flex gap-2"
                                        data-oid="-zo.lvt"
                                    >
                                        {message.role === 'agent' && (
                                            <div
                                                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"
                                                data-oid="ry.3_wy"
                                            >
                                                <IconBrain
                                                    className="h-4 w-4 text-primary"
                                                    data-oid="no.8eor"
                                                />
                                            </div>
                                        )}
                                        <ChatBubbleMessage data-oid="8ae_6hy">
                                            {message.content}
                                            <span
                                                className="block text-[10px] text-muted-foreground mt-1"
                                                data-oid="je7:evu"
                                            >
                                                {message.timestamp}
                                            </span>
                                        </ChatBubbleMessage>
                                    </ChatBubble>
                                ))}
                            </ChatMessageList>
                        </ExpandableChatBody>
                        <ExpandableChatFooter data-oid="49jg-yi">
                            <form onSubmit={sendMessage} className="flex gap-2" data-oid="_k.98-6">
                                <ChatInput
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Ask me anything about trading..."
                                    data-oid="q_d3218"
                                />

                                <Button type="submit" size="icon" data-oid="rvhzg85">
                                    <IconArrowUpRight className="h-4 w-4" data-oid="67rxewe" />
                                </Button>
                            </form>
                        </ExpandableChatFooter>
                    </ExpandableChat>
                </div>

                {/* Mobile Chat Toggle */}
                <Button
                    variant="secondary"
                    size="icon"
                    className="fixed right-4 bottom-4 rounded-full shadow-lg lg:hidden"
                    onClick={() => setIsChatOpen(true)}
                    data-oid="8walapy"
                >
                    <IconBrain className="h-4 w-4" data-oid="-r2xihy" />
                </Button>
            </div>
        </div>
    );
}
