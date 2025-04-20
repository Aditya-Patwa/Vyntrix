import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BellRingIcon, ChevronRight, CoinsIcon, Link2Icon, PackageIcon, type LucideIcon } from "lucide-react"
import Link from "next/link"
import React from "react"


function ProductCard({name, description, icon, url}: {name: string, description: string, icon?: LucideIcon, url: string}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                    {icon && React.createElement(icon)}
                    <h1>
                        {name}
                    </h1>
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-2">
                <Link href={url}>
                    <Button size={"sm"} className="text-xs">
                        Explore
                    </Button>
                </Link>
                <Link href={"#"}>
                    <Button size={"sm"} variant={"ghost"} className="gap-1 text-xs">
                        Learn more <ChevronRight />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}


const products = [
    {
        title: "Storage",
        description: "Decentralized file storage with IPFS — fast, secure, and on-chain linked.",
        icon: PackageIcon, 
        url: "#",
    },
    {
        title: "Blinks",
        description: "Actionable Solana links for social apps, chats, and easy dApp triggers.",
        icon: Link2Icon,
        url: "#",
    },
    {
        title: "Payments",
        description: "Accept crypto payments instantly with VYNTRIX Pay — smooth and low-fee.",
        icon: CoinsIcon,
        url: "#",
    },
    {
        title: "On-Chain Notifications",
        description: "Send wallet-based alerts for contract activity in real time.",
        icon: BellRingIcon,
        url: "#",
    }
]



function OtherProducts() {
    return (
        <section className="bg-neutral-50 dark:bg-neutral-950 w-full border-b border-dashed px-4 py-6 md:px-6 md:py-8 grid gap-6">
            <div className="grid gap-2 max-w-xl w-full">
                <h1 className="text-xl font-semibold tracking-tight leading-none">
                    Explore our other products
                </h1>
                <p className="text-base text-muted-foreground">
                    Discover the full power of the Vyntrix ecosystem.
                </p>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {products.map((product, i) => (
                    <ProductCard key={i} name={product.title} description={product.description} icon={product.icon} url={product.url} />
                ))}
            </div>
        </section>
    )
}



export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log(id);

    return (
        <main className="grid">
            <section className="w-full border-b border-dashed px-4 py-6 md:px-6 md:py-8 grid sm:flex items-center justify-between gap-6">
                <div className="grid gap-1">
                    {/* <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="/VYNTRIX.png" alt="@vyntrixhq" />
                            <AvatarFallback>V</AvatarFallback>
                        </Avatar> */}
                    <h1 className="text-2xl font-semibold tracking-tight leading-none">
                        VYNTRIX
                    </h1>
                    {/* </div> */}
                    <p className="text-sm text-muted-foreground">
                        Your No-code platform for build & manage Smart Contracts on Solana.
                    </p>
                </div>
                <Badge variant={"secondary"} className="bg-emerald-500 text-white">
                    ACTIVE
                </Badge>
            </section>

            <OtherProducts />
        </main>
    )
}