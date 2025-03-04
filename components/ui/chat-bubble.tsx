'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';
import { MessageLoading } from './message-loading';

interface ChatBubbleProps {
    variant?: 'sent' | 'received';
    layout?: 'default' | 'ai';
    className?: string;
    children: React.ReactNode;
}

export function ChatBubble({
    variant = 'received',
    layout = 'default',
    className,
    children,
}: ChatBubbleProps) {
    return (
        <div
            className={cn(
                'flex items-start gap-2 mb-4',
                variant === 'sent' && 'flex-row-reverse',
                className,
            )}
            data-oid="enn_4ig"
        >
            {children}
        </div>
    );
}

interface ChatBubbleMessageProps {
    variant?: 'sent' | 'received';
    isLoading?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export function ChatBubbleMessage({
    variant = 'received',
    isLoading,
    className,
    children,
}: ChatBubbleMessageProps) {
    return (
        <div
            className={cn(
                'rounded-lg p-3',
                variant === 'sent' ? 'bg-primary text-primary-foreground' : 'bg-muted',
                className,
            )}
            data-oid="q647uz5"
        >
            {isLoading ? (
                <div className="flex items-center space-x-2" data-oid="lvd_6_j">
                    <MessageLoading data-oid="r.wfwyx" />
                </div>
            ) : (
                children
            )}
        </div>
    );
}

interface ChatBubbleAvatarProps {
    src?: string;
    fallback?: string;
    className?: string;
}

export function ChatBubbleAvatar({ src, fallback = 'AI', className }: ChatBubbleAvatarProps) {
    return (
        <Avatar className={cn('h-8 w-8', className)} data-oid="8lo_xtl">
            {src && <AvatarImage src={src} data-oid="p:l1nk8" />}
            <AvatarFallback data-oid="m3u1cw_">{fallback}</AvatarFallback>
        </Avatar>
    );
}

interface ChatBubbleActionProps {
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export function ChatBubbleAction({ icon, onClick, className }: ChatBubbleActionProps) {
    return (
        <Button
            variant="ghost"
            size="icon"
            className={cn('h-6 w-6', className)}
            onClick={onClick}
            data-oid="12:_vt7"
        >
            {icon}
        </Button>
    );
}

export function ChatBubbleActionWrapper({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={cn('flex items-center gap-1 mt-2', className)} data-oid="ex:a0l5">
            {children}
        </div>
    );
}
