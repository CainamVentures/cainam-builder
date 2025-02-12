'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    IconBell,
    IconBrandDiscord,
    IconBrandSlack,
    IconBrandTelegram,
    IconMail,
    IconSettings,
    IconShield,
} from '@tabler/icons-react';
import Sidebar from '../components/Sidebar';

interface NotificationChannel {
    id: string;
    name: string;
    icon: React.ReactNode;
    connected: boolean;
}

const notificationChannels: NotificationChannel[] = [
    {
        id: 'email',
        name: 'Email',
        icon: <IconMail className="h-5 w-5" />,
        connected: true,
    },
    {
        id: 'slack',
        name: 'Slack',
        icon: <IconBrandSlack className="h-5 w-5" />,
        connected: false,
    },
    {
        id: 'discord',
        name: 'Discord',
        icon: <IconBrandDiscord className="h-5 w-5" />,
        connected: true,
    },
    {
        id: 'telegram',
        name: 'Telegram',
        icon: <IconBrandTelegram className="h-5 w-5" />,
        connected: false,
    },
];

export default function SettingsPage() {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />

            <div className="flex-1 p-8 space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-semibold">Settings</h1>
                    <p className="text-muted-foreground">
                        Manage your account settings and preferences
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* General Settings */}
                    <Card className="border-border hover:bg-muted/50 transition-colors">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <IconSettings className="h-5 w-5 text-muted-foreground" />
                                <CardTitle className="text-base font-medium">General</CardTitle>
                            </div>
                            <CardDescription>Configure your general preferences</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <label className="text-sm font-medium">Time Zone</label>
                                <p className="text-sm text-muted-foreground">
                                    Currently set to: UTC-07:00 (Pacific Time)
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Language</label>
                                <p className="text-sm text-muted-foreground">Currently set to: English</p>
                            </div>
                            <Button variant="outline" size="sm" className="border-border">
                                Edit Preferences
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Notifications */}
                    <Card className="border-border hover:bg-muted/50 transition-colors">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <IconBell className="h-5 w-5 text-muted-foreground" />
                                <CardTitle className="text-base font-medium">Notifications</CardTitle>
                            </div>
                            <CardDescription>Manage your notification preferences</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                {notificationChannels.map((channel) => (
                                    <div key={channel.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="text-muted-foreground">{channel.icon}</div>
                                            <span className="text-sm font-medium">{channel.name}</span>
                                        </div>
                                        <Button
                                            variant={channel.connected ? 'outline' : 'default'}
                                            size="sm"
                                            className={channel.connected ? 'border-border' : ''}
                                        >
                                            {channel.connected ? 'Connected' : 'Connect'}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Security */}
                    <Card className="border-border hover:bg-muted/50 transition-colors">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <IconShield className="h-5 w-5 text-muted-foreground" />
                                <CardTitle className="text-base font-medium">Security</CardTitle>
                            </div>
                            <CardDescription>Manage your security settings</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="text-sm font-medium mb-1">Two-Factor Authentication</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Add an extra layer of security to your account
                                </p>
                                <Button variant="outline" size="sm" className="border-border">
                                    Enable 2FA
                                </Button>
                            </div>
                            <Separator className="bg-border" />
                            <div>
                                <h3 className="text-sm font-medium mb-1">API Key Management</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Manage your API keys and access tokens
                                </p>
                                <Button variant="outline" size="sm" className="border-border">
                                    View API Keys
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* System */}
                    <Card className="border-border hover:bg-muted/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-base font-medium">System Information</CardTitle>
                            <CardDescription>View system status and information</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium">Version</label>
                                <p className="text-sm text-muted-foreground">1.0.0</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Last Updated</label>
                                <p className="text-sm text-muted-foreground">2 days ago</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Status</label>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                    <p className="text-sm text-muted-foreground">All systems operational</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
