import { Zap } from "lucide-react";
import Link from "next/link";

export default function GetStarted() {
    return (
        <main className="w-full min-h-screen">
            <div className="w-full grid p-4 md:px-8 border-b">
                <header className="max-w-7xl w-full justify-self-center">
                    <Link href={"/"}>
                        <h1 className="text-2xl font-semibold tracking-tight leading-none">
                            VYNTRIX
                        </h1>
                    </Link>
                </header>
            </div>
            <div className="w-full h-full grid py-24">
                <div className="max-w-md w-full justify-self-center grid border relative">
                    <div className="w-2 h-2 absolute bg-secondary left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
                    <div className="p-2 px-4 flex gap-2 items-center">
                        <Zap className="size-4" fill="currentColor" />
                        <h1 className="text-lg font-medium tracking-tight">
                            Get Started
                        </h1>
                    </div>
                </div>
            </div>
        </main>
    )
} 