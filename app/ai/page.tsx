"use client";
import { useChat } from "@ai-sdk/react";
import { ArrowUp, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'; // or choose another theme



function WelcomeScreen() {
    return (
        <main className="w-full justify-self-center max-w-xl px-8 py-8 space-y-4 mt-32">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">
                    VyntrixAI
                </h1>
                <p className="text-base text-muted-foreground">
                    Hey! I&apos;m VyntrixAI, your expert guide to developing secure and scalable smart contracts on Solana with Rust and Anchor.
                </p>
            </div>
        </main>
    )
}



function ChatHeader() {
    const router = useRouter();

    return (
        <header className="w-full max-w-4xl p-4 flex justify-between items-center fixed top-0 z-30 bg-background">
            <div className="flex gap-2">
                <Button variant={"ghost"} onClick={() => router.back()} size={"icon"}>
                    <ChevronLeft className="size-6" />
                </Button>

                {/* <Link href={`/personas/${persona.slug}`} className="flex gap-2 items-center"> */}
                <h1 className="text-xl font-semibold tracking-tight">
                    VyntrixAI
                </h1>
                {/* </Link> */}
            </div>
            <ModeToggle />
        </header>
    )
}


export default function ChatInteface() {
    const [isStreaming, setIsStreaming] = useState(false);
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        onResponse() {
            setIsStreaming(true); // streaming started
        },
        onFinish() {
            setIsStreaming(false); // streaming ended
        }
    });

    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scroll into view when messages change
        if (!isStreaming) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isStreaming]);

    return (
        <main className="w-full grid">
            <section className="max-w-4xl w-full justify-self-center">
                <ChatHeader />
                {messages.length == 0 ? (
                    <section className="w-full grid">
                        <WelcomeScreen />
                    </section>
                ) : (
                    <div className="max-w-4xl w-full justify-self-center px-4 pt-24 pb-56 grid gap-8">
                        {messages.map(message =>
                            message.role == "user" ? (
                                <div key={message.id} className="justify-self-end max-w-sm px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                                    {message.parts.map((part, i) => {
                                        switch (part.type) {
                                            case 'text':
                                                return <div key={`${message.id}-${i}`}>{part.text}</div>;
                                        }
                                    })}
                                </div>
                            ) : (
                                <div key={message.id} className='justify-self-start w-full overflow-x-scroll py-2 border-b border-dashed pb-4'>
                                    <p>
                                        {message.parts.map((part, i) => {
                                            switch (part.type) {
                                                case 'text':
                                                    return <ReactMarkdown
                                                        key={i}
                                                        children={part.text}
                                                        components={{
                                                            code({ className, children, ...props }) {
                                                                const match = /language-(\w+)/.exec(className || '');
                                                                // 'inline' is a prop, not a direct parameter
                                                                // @typescript-eslint/no-explicit-any
                                                                const isInline = (props as any).inline;
                                                                return !isInline && match ? (
                                                                    <SyntaxHighlighter
                                                                        style={dracula}
                                                                        language={match[1]}
                                                                        PreTag="div"
                                                                        {...props}
                                                                    >
                                                                        {String(children).replace(/\n$/, '')}
                                                                    </SyntaxHighlighter>
                                                                ) : (
                                                                    <code className="bg-neutral-200 text-neutral-900 px-1 py-0.5 rounded text-sm" {...props}>
                                                                        {children}
                                                                    </code>
                                                                );
                                                            },
                                                        }}
                                                    />
                                            }
                                        })}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                )}

                <div ref={bottomRef} />
                <div className={'max-w-4xl w-full px-4 justify-self-center ' + ("fixed bottom-0 bg-background pt-4 pb-4")}>
                    <form onSubmit={handleSubmit} className={'w-full p-2 rounded-2xl border bg-seondary grid gap-2 bg-neutral-50 dark:bg-neutral-900'}>
                        <input type='text' value={input} onChange={handleInputChange} placeholder='Ask me anything about Solana, Rust, or Anchor...' className='w-full outline-none p-2' />
                        <div className='flex justify-end'>
                            <Button className='rounded-full' size={"icon"} type='submit'>
                                <ArrowUp className='size-5' />
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
};