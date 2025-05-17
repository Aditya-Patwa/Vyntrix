import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, MousePointerClick } from "lucide-react";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="w-full grid border-b border-dashed px-4">
            <section className="max-w-6xl w-full justify-self-center px-4 md:px-8 py-8 md:py-10 grid gap-4 border-x border-dashed">
                <div className="grid gap-4">
                    <Badge variant={"secondary"}>Build Smart Contracts, FAST.</Badge>
                    <div className="grid gap-2">
                        <h1 className="max-w-xl text-3xl md:text-3xl font-semibold tracking-tight leading-none">
                            Your No-Code & Low-Code Platform to Build Smart Contracts on Solana.
                        </h1>
                        <p className="max-w-2xl font-light text-sm sm:text-base">
                            From contract creation to real-time backend, user auth, and payment integration — Vyntrix is the Solana dev stack reimagined.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link href={"/try"}>
                            <Button className="font-semibold cursor-pointer">
                                Try Vyntrix Now
                                <span>
                                    <MousePointerClick />
                                </span>
                            </Button>
                        </Link>
                        <Link href={"/#cta"}>
                            <Button variant={"link"} className="group cursor-pointer">
                                Join Waitlist
                                <ChevronRight className="group-hover:translate-x-1 transition-ease duration-100" />
                            </Button>
                        </Link>
                    </div>

                    <div className="flex gap-2 items-center py-1">
                        <span className="text-sm font-medium">
                            Powered by
                        </span>
                        <div className="flex gap-1.5 items-center">
                            <img src="/solanaLogoMark.png" alt="Solana Logo" className="h-4" />
                            <img src="/solanaWordMark.png" alt="Solana Logo" className="h-3 invert dark:invert-0" />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}