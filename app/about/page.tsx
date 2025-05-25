import { ModeToggle } from "@/components/ModeToggle";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";


const geistMono = Geist_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


export default function About() {
    return (
        <section className="w-full h-full min-h-screen grid bg-diagonal-lines px-4 md:px-8">
            <main className="max-w-5xl justify-self-center w-full space-y-4 px-4 md:px-8 py-4 md:py-8 bg-background border-x">
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <h1 className="text-2xl font-semibold tracking-tight leading-none">
                            VYNTRIX
                        </h1>
                    </Link>
                    <ModeToggle />
                </div>

                <div className="mt-8 grid gap-8">
                    <div>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            Welcome to Vyntrix — your no-code control panel for the Solana blockchain. Whether you&apos;re a developer, founder, or creator, we&apos;re here to simplify your journey into the world of smart contracts, dApps, NFTs, and tokens — all without touching a line of Rust (unless you really want to 😄).
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                            Our Mission
                        </h1>
                        <div className={"border-l-4 border-primary pl-4 py-2 text-sm sm:text-base " + geistMono.className}>
                            Empower anyone to build on Solana — fast, intuitively, and without limits.
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            We believe blockchain development shouldn&apos;t feel like rocket science. Vyntrix exists to make launching and managing Web3 projects on Solana as easy as dragging and dropping. If you can use Notion, you can use Vyntrix.
                        </p>
                    </div>
                </div>
            </main>
        </section>
    )
}