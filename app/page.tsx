'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import ChartDemo from '@/components/ui/chart-demo';
import {
    ChatBubble,
    ChatBubbleMessage,
    ChatInput,
    ChatMessageList,
    ExpandableChat,
    ExpandableChatBody,
    ExpandableChatFooter,
    ExpandableChatHeader
} from '@/components/ui/expandable-chat';
import {
    IconArrowUpRight,
    IconBrain,
    IconRobot,
    IconWallet
} from '@tabler/icons-react';
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
        <div className="flex h-screen bg-background">
            <Sidebar />

            <div className="flex-1 flex">
                {/* Main Content */}
                <div className="flex-1 p-8 space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <IconRobot className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-semibold text-foreground">Cairos</h1>
                                    <p className="text-sm text-muted-foreground">Professional-grade autonomous trading agent</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground max-w-2xl">
                                A professional-grade autonomous agent designed to manage multi-million-dollar hedge fund capital.
                                Capable of implementing sophisticated trading strategies such as statistical arbitrage, market-neutral,
                                and macro-driven trades.
                            </p>
                        </div>
                        <Button variant="secondary" className="gap-2">
                            <IconWallet className="h-4 w-4" />
                            Select Wallet to Invest
                        </Button>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card className="border-0 bg-card">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    Total Value
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-foreground">$28,971.30</div>
                                <div className="flex items-center gap-1 text-xs text-green-400 mt-1">
                                    <IconArrowUpRight className="h-3 w-3" />
                                    <span>+$17,000 (58.7%)</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    All Time PNL
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-foreground">6.59%</div>
                                <div className="text-xs text-muted-foreground mt-1">90 Days Performance</div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    Max Drawdown
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-foreground">1.58%</div>
                                <div className="text-xs text-muted-foreground mt-1">Historical Maximum</div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    Sharpe Ratio
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-foreground">7.52</div>
                                <div className="text-xs text-muted-foreground mt-1">Risk-Adjusted Returns</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Performance Chart */}
                    <Card className="border-0 bg-card">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-base font-medium text-card-foreground">
                                        Performance
                                    </CardTitle>
                                    <CardDescription>Historical returns and projections</CardDescription>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="text-xs">1W</Button>
                                    <Button variant="outline" size="sm" className="text-xs">30D</Button>
                                    <Button variant="outline" size="sm" className="text-xs">60D</Button>
                                    <Button variant="outline" size="sm" className="text-xs">90D</Button>
                                    <Button variant="outline" size="sm" className="text-xs">1Y</Button>
                                    <Button variant="outline" size="sm" className="text-xs">ALL</Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ChartDemo />
                        </CardContent>
                    </Card>

                    {/* Additional Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="border-0 bg-card">
                            <CardHeader>
                                <CardTitle className="text-base font-medium text-card-foreground">
                                    Performance Statistics
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Annualized</span>
                                    <span className="text-sm font-medium text-foreground">42.00%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Volatility of Daily Returns</span>
                                    <span className="text-sm font-medium text-foreground">4.71%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Sortino Ratio</span>
                                    <span className="text-sm font-medium text-foreground">4.77</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Correlation to BTC</span>
                                    <span className="text-sm font-medium text-foreground">0.19</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card">
                            <CardHeader>
                                <CardTitle className="text-base font-medium text-card-foreground">
                                    Simulated Returns
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Initial Investment</span>
                                    <span className="text-sm font-medium text-foreground">$100,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Final Value</span>
                                    <span className="text-sm font-medium text-foreground">$131,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Max Drawdown</span>
                                    <span className="text-sm font-medium text-foreground">1.58%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Sharpe Ratio</span>
                                    <span className="text-sm font-medium text-foreground">7.52</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card">
                            <CardHeader>
                                <CardTitle className="text-base font-medium text-card-foreground">
                                    Strategy Configuration
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-foreground mb-2">Entry</h3>
                                        <p className="text-sm text-muted-foreground">
                                            The strategy involves funding arbitrage.
                                        </p>
                                        <ul className="list-disc text-sm text-muted-foreground ml-4 mt-2 space-y-1">
                                            <li>Trade only perpetual pairs with sufficient volume (more than 1m daily volume)</li>
                                            <li>Trade only perpetual pairs with a significant funding rate (more than 0.007% per hour)</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Chat Component */}
                <div className="w-[400px] border-l border-border">
                    <ExpandableChat>
                        <ExpandableChatHeader>
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <IconBrain className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium">Cairos Assistant</h3>
                                    <p className="text-xs text-muted-foreground">AI-powered trading assistant</p>
                                </div>
                            </div>
                        </ExpandableChatHeader>
                        <ExpandableChatBody>
                            <ChatMessageList>
                                {messages.map((message, index) => (
                                    <ChatBubble
                                        key={index}
                                        variant={message.role === 'agent' ? 'received' : 'sent'}
                                        className="flex gap-2"
                                    >
                                        {message.role === 'agent' && (
                                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                <IconBrain className="h-4 w-4 text-primary" />
                                            </div>
                                        )}
                                        <ChatBubbleMessage>
                                            {message.content}
                                            <span className="block text-[10px] text-muted-foreground mt-1">
                                                {message.timestamp}
                                            </span>
                                        </ChatBubbleMessage>
                                    </ChatBubble>
                                ))}
                            </ChatMessageList>
                        </ExpandableChatBody>
                        <ExpandableChatFooter>
                            <form onSubmit={sendMessage} className="flex gap-2">
                                <ChatInput
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Ask me anything about trading..."
                                />
                                <Button type="submit" size="icon">
                                    <IconArrowUpRight className="h-4 w-4" />
                                </Button>
                            </form>
                        </ExpandableChatFooter>
                    </ExpandableChat>
                </div>
            </div>
        </div>
    );
}
