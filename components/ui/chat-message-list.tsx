import { useAutoScroll } from '@/hooks/use-auto-scroll';
import { ArrowDown } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';

interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {
    smooth?: boolean;
}

const ChatMessageList = React.forwardRef<HTMLDivElement, ChatMessageListProps>(
    ({ className, children, smooth = false, ...props }, _ref) => {
        const { scrollRef, isAtBottom, autoScrollEnabled, scrollToBottom, disableAutoScroll } =
            useAutoScroll({
                smooth,
                content: children,
            });

        return (
            <div className="relative w-full h-full" data-oid="78-iq-n">
                <div
                    className={`flex flex-col w-full h-full p-4 overflow-y-auto ${className}`}
                    ref={scrollRef}
                    onWheel={disableAutoScroll}
                    onTouchMove={disableAutoScroll}
                    {...props}
                    data-oid="m:b45hs"
                >
                    <div className="flex flex-col gap-6" data-oid="4i:p41i">
                        {children}
                    </div>
                </div>

                {!isAtBottom && (
                    <Button
                        onClick={() => {
                            scrollToBottom();
                        }}
                        size="icon"
                        variant="outline"
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 inline-flex rounded-full shadow-md"
                        aria-label="Scroll to bottom"
                        data-oid="cl5e824"
                    >
                        <ArrowDown className="h-4 w-4" data-oid="dbre._2" />
                    </Button>
                )}
            </div>
        );
    },
);

ChatMessageList.displayName = 'ChatMessageList';

export { ChatMessageList };
