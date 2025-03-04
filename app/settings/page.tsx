'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
        icon: <IconMail className="h-5 w-5" data-oid="v.8js.c" />,
        connected: true,
    },
    {
        id: 'slack',
        name: 'Slack',
        icon: <IconBrandSlack className="h-5 w-5" data-oid="i7gvw04" />,
        connected: false,
    },
    {
        id: 'discord',
        name: 'Discord',
        icon: <IconBrandDiscord className="h-5 w-5" data-oid="q1v__b1" />,
        connected: true,
    },
    {
        id: 'telegram',
        name: 'Telegram',
        icon: <IconBrandTelegram className="h-5 w-5" data-oid="y30fmn2" />,
        connected: false,
    },
];

export default function SettingsPage() {
    return (
        <div className="flex h-screen bg-background" data-oid="mid--8y">
            <Sidebar data-oid="9yqx6_f" />

            <div className="flex-1 p-8 space-y-8" data-oid="hc7dr71">
                {/* Header */}
                <div data-oid="a6lta2w">
                    <h1 className="text-2xl font-semibold" data-oid="k3uir7o">
                        Settings
                    </h1>
                    <p className="text-muted-foreground" data-oid="9p3:p7r">
                        Manage your account settings and preferences
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="ifwrs.2">
                    {/* General Settings */}
                    <Card
                        className="border-border hover:bg-muted/50 transition-colors"
                        data-oid="_5-11jd"
                    >
                        <CardHeader data-oid="8x.o:uv">
                            <div className="flex items-center gap-2" data-oid="aj9xscl">
                                <IconSettings
                                    className="h-5 w-5 text-muted-foreground"
                                    data-oid="z2vw3qe"
                                />

                                <CardTitle className="text-base font-medium" data-oid="y6de:.z">
                                    General
                                </CardTitle>
                            </div>
                            <CardDescription data-oid="cojosr-">
                                Configure your general preferences
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6" data-oid="9ormylq">
                            <div data-oid="ispgdte">
                                <label className="text-sm font-medium" data-oid="u77p:qg">
                                    Time Zone
                                </label>
                                <p className="text-sm text-muted-foreground" data-oid="nz43yzl">
                                    Currently set to: UTC-07:00 (Pacific Time)
                                </p>
                            </div>
                            <div data-oid="q7oxa5x">
                                <label className="text-sm font-medium" data-oid="zj7cygh">
                                    Language
                                </label>
                                <p className="text-sm text-muted-foreground" data-oid=".0gj4dp">
                                    Currently set to: English
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-border"
                                data-oid="c5gvjuy"
                            >
                                Edit Preferences
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Notifications */}
                    <Card
                        className="border-border hover:bg-muted/50 transition-colors"
                        data-oid="0e2l1dj"
                    >
                        <CardHeader data-oid="0c.enn_">
                            <div className="flex items-center gap-2" data-oid="8q-uf3-">
                                <IconBell
                                    className="h-5 w-5 text-muted-foreground"
                                    data-oid="we..wyo"
                                />

                                <CardTitle className="text-base font-medium" data-oid="ieu1fp:">
                                    Notifications
                                </CardTitle>
                            </div>
                            <CardDescription data-oid="g6mfcw6">
                                Manage your notification preferences
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6" data-oid="c3yz:hu">
                            <div className="space-y-4" data-oid="siomr9c">
                                {notificationChannels.map((channel) => (
                                    <div
                                        key={channel.id}
                                        className="flex items-center justify-between"
                                        data-oid="dc:po21"
                                    >
                                        <div className="flex items-center gap-3" data-oid="ood6las">
                                            <div
                                                className="text-muted-foreground"
                                                data-oid="qh8tqld"
                                            >
                                                {channel.icon}
                                            </div>
                                            <span
                                                className="text-sm font-medium"
                                                data-oid="3:yh.i."
                                            >
                                                {channel.name}
                                            </span>
                                        </div>
                                        <Button
                                            variant={channel.connected ? 'outline' : 'default'}
                                            size="sm"
                                            className={channel.connected ? 'border-border' : ''}
                                            data-oid="j1tj6ru"
                                        >
                                            {channel.connected ? 'Connected' : 'Connect'}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Security */}
                    <Card
                        className="border-border hover:bg-muted/50 transition-colors"
                        data-oid="p30w1j9"
                    >
                        <CardHeader data-oid="o3y:7k6">
                            <div className="flex items-center gap-2" data-oid="r3ow.cz">
                                <IconShield
                                    className="h-5 w-5 text-muted-foreground"
                                    data-oid="hodom1:"
                                />

                                <CardTitle className="text-base font-medium" data-oid="r_t78dv">
                                    Security
                                </CardTitle>
                            </div>
                            <CardDescription data-oid="_y46cut">
                                Manage your security settings
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6" data-oid="gmh8ldk">
                            <div data-oid="cn:wm00">
                                <h3 className="text-sm font-medium mb-1" data-oid="29qm805">
                                    Two-Factor Authentication
                                </h3>
                                <p
                                    className="text-sm text-muted-foreground mb-3"
                                    data-oid="0nyygwk"
                                >
                                    Add an extra layer of security to your account
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-border"
                                    data-oid="h6ip62l"
                                >
                                    Enable 2FA
                                </Button>
                            </div>
                            <Separator className="bg-border" data-oid="s0bke_f" />
                            <div data-oid="u.ptfsp">
                                <h3 className="text-sm font-medium mb-1" data-oid="xecozvm">
                                    API Key Management
                                </h3>
                                <p
                                    className="text-sm text-muted-foreground mb-3"
                                    data-oid="lpmblx5"
                                >
                                    Manage your API keys and access tokens
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-border"
                                    data-oid="78sezlu"
                                >
                                    View API Keys
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* System */}
                    <Card
                        className="border-border hover:bg-muted/50 transition-colors"
                        data-oid="ux70g:4"
                    >
                        <CardHeader data-oid="9a614so">
                            <CardTitle className="text-base font-medium" data-oid="nwna1fq">
                                System Information
                            </CardTitle>
                            <CardDescription data-oid="9:oq2qu">
                                View system status and information
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4" data-oid="ae42j5r">
                            <div data-oid="6zbtogn">
                                <label className="text-sm font-medium" data-oid="adzzin6">
                                    Version
                                </label>
                                <p className="text-sm text-muted-foreground" data-oid="r1fq7j9">
                                    1.0.0
                                </p>
                            </div>
                            <div data-oid="amsvkm3">
                                <label className="text-sm font-medium" data-oid="iljf133">
                                    Last Updated
                                </label>
                                <p className="text-sm text-muted-foreground" data-oid="uubkete">
                                    2 days ago
                                </p>
                            </div>
                            <div data-oid="x7xb8cn">
                                <label className="text-sm font-medium" data-oid="5.5k2x-">
                                    Status
                                </label>
                                <div className="flex items-center gap-2" data-oid="15kuin2">
                                    <div
                                        className="h-2 w-2 rounded-full bg-green-500"
                                        data-oid="zn_ydf-"
                                    />

                                    <p className="text-sm text-muted-foreground" data-oid="hp-iung">
                                        All systems operational
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
