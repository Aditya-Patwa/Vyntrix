import { ModeToggle } from "@/components/ModeToggle";
import { Mail } from "lucide-react";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";


const geistMono = Geist_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


export default function About() {
    return (
        <section className="w-full h-full h-screen overflow-y-scroll grid bg-diagonal-lines px-4 md:px-8">
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


                    <div className="grid gap-4">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                            The Problem
                        </h1>
                        {/* <div className={"border-l-4 border-primary pl-4 py-2 text-sm sm:text-base " + geistMono.className}>
                            Empower anyone to build on Solana — fast, intuitively, and without limits.
                        </div> */}
                        <p className="text-muted-foreground text-sm sm:text-base">
                            When we started building on Solana, we realized something: <br />
                            Learning Rust, Anchor, IDLs, CPIs, and deploying programs was way harder than it needed to be — especially for non-blockchain developers.
                            <br />
                            And once we got the contracts running, we still needed to manage users, tokens, NFTs, storage, payments, and even notifications — all spread across different tools and platforms.
                        </p>
                    </div>


                    <div className="grid gap-4">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                            The Spark
                        </h1>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            Inspired by the simplicity of tools like Supabase for backend dev, we asked ourselves:
                        </p>
                        <div className={"border-l-4 border-primary pl-4 py-2 text-sm sm:text-base " + geistMono.className}>
                            "Why can&apos;t Solana dev feel the same?"
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            That&apos;s when Vyntrix was born — a unified no-code platform to handle everything from smart contract creation to deployment, management, token/NFT issuance, and beyond.
                        </p>
                    </div>



                    <div className="grid gap-4">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                            What You Can Do with Vyntrix
                        </h1>
                        {/* <p className="text-muted-foreground text-sm sm:text-base">
                            Inspired by the simplicity of tools like Supabase for backend dev, we asked ourselves:
                        </p> */}
                        {/* <div className={"border-l-4 border-primary pl-4 py-2 text-sm sm:text-base " + geistMono.className}>
                            "Why can&apos;t Solana dev feel the same?"
                        </div> */}
                        <ul className="text-muted-foreground text-sm sm:text-base list-decimal list-inside">
                            <li>Visually create Solana smart contracts</li>
                            <li>Define fields like PublicKey, String, Int, etc.</li>
                            <li>Set permissions (editable, deletable)</li>
                            <li>One-click Rust & IDL code generation</li>
                            <li>Deploy to Solana Mainnet/Testnet</li>
                            <li>Manage users, Blinks, IPFS storage, NFTs, Tokens — all from one place</li>
                            <li>No-code UI, blazing-fast developer experience</li>
                        </ul>
                    </div>



                    <div className="grid gap-4">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                            Our Vision
                        </h1>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            We&apos;re building the Webflow + Firebase for Solana — a full-stack platform where anyone can go from idea → dApp in minutes, not weeks.
                        </p>
                        <div className={"border-l-4 border-primary pl-4 py-2 text-sm sm:text-base " + geistMono.className}>
                            <p>We imagine a future where:</p>
                            <ul className="list-disc list-inside mt-4">
                                <li>
                                    Hackathon teams can launch faster
                                </li>
                                <li>
                                    Solana founders can test ideas quickly
                                </li>
                                <li>
                                    Creators can own their smart contracts, tokens, and communities — with zero code
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="grid">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                            Built for Builders
                        </h1>
                        <p className="text-muted-foreground text-sm sm:text-base mt-4">
                            Whether you&apos;re participating in a hackathon like Colosseum or launching your next NFT project — Vyntrix gives you all the power, none of the complexity.
                        </p>
                        {/* <div className={"border-l-4 border-primary pl-4 py-2 text-sm sm:text-base " + geistMono.className}>
                            "Why can&apos;t Solana dev feel the same?"
                        </div> */}
                        <p className="text-muted-foreground text-sm sm:text-base mt-2">
                            We&apos;re currently in early access and building fast. <br />
                            Our roadmap includes:
                        </p>
                        <ul className="text-muted-foreground text-sm sm:text-base list-disc list-inside mt-2">
                            <li>UI builders for contracts</li>
                            <li>GitHub integration for versioning</li>
                            <li>Pay-as-you-go deployment</li>
                            <li>
                                Templates for common contract types
                            </li>
                            <li>
                                Community marketplace for sharing modules
                            </li>
                        </ul>
                    </div>


                    <div className="grid gap-4">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                            Join Us Early
                        </h1>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            Be part of our journey. Give feedback, request features, or just vibe with us on X.
                        </p>
                        <div className={"border-l-4 border-primary pl-4 py-2 text-sm sm:text-base " + geistMono.className}>
                            <ul className="list-disc list-inside">
                                <li>
                                    <Link href={"/#cta"}>
                                        Join the <span className="font-semibold underline">Waitlist</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/try"}>
                                        Try the Demo
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"https://x.com/VyntrixHQ/"} target="_blank">
                                        Follow us on <span className="font-semibold underline">X</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                            Built by Builders, for Builders
                        </h1>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            Vyntrix is built by indie hackers and Web3 devs who&apos;ve been in your shoes. <br />
                            We're building tools we wished existed — now we're making them real, for you.
                        </p>
                    </div>
                </div>

                <footer className="mt-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href={"/"}>
                                <h1 className="text-lg font-semibold tracking-tight leading-none">
                                    VYNTRIX
                                </h1>
                            </Link>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <Link href="mailto:vyntrixhq@gmail.com" aria-label="Email"><Mail size={16} /></Link>
                            <Link href="https://discord.gg/gsaApAQR" aria-label="Discord">
                                <Image src={"/Discord-Symbol-White.png"} alt="Discord" width={16} height={16} className="invert dark:invert-0" />
                            </Link>
                            <Link href="https://x.com/VyntrixHQ" aria-label="Twitter">
                                <Image src={"/x-logo.png"} alt="Discord" width={16} height={16} className="invert dark:invert-0" />
                            </Link>
                        </div>
                    </div>
                </footer>
            </main>
        </section>
    )
}