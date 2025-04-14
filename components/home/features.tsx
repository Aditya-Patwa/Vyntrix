import { CloudUpload, LayoutDashboard, MousePointerClick, Table2, Wallet } from "lucide-react";
import { Badge } from "../ui/badge";


export default function Features() {
    return (
        <section className="w-full grid border-b border-dashed px-4">
            <section className="max-w-6xl w-full justify-self-center grid gap-4 border-x border-dashed">
                <div className="border-b border-dashed w-full text-center grid px-4 md:px-8 py-8 md:py-10 relative bg-gradient-to-bl from-rose-800 to-indigo-800">
                    <div className="absolute w-full h-full top-0 left-0 bg-[url('/metal.png')] mix-blend-overlay"></div>
                    <div className="max-w-xl justify-self-center text-center z-10">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                            Everything you need to create, customize, and deploy smart contracts
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-y divide-dashed border-t border-dashed">
                    <div className="px-4 py-8 md:p-8 space-y-4">
                        <Badge variant={"secondary"}>
                            <MousePointerClick /> No-code & Low-code Interface
                        </Badge>
                        <h1 className="text-2xl md:text-2xl lg:text-3xl max-w-md font-medium tracking-tight">
                            Design your contract logic <span className="text-muted-foreground">through an intuitive interface</span>
                        </h1>
                    </div>
                    <div className="px-4 py-8 md:p-8 space-y-4">
                        <Badge variant={"secondary"}>
                            <LayoutDashboard /> Production-grade Templates
                        </Badge>
                        <h1 className="text-2xl md:text-2xl lg:text-3xl max-w-md font-medium tracking-tight">
                            Your designs turn into clean <span className="text-muted-foreground">modular Rust-based smart contracts.</span>
                        </h1>
                    </div>
                    <div className="p-4 md:p-8 md:col-span-2 space-y-4">
                        <Badge variant={"secondary"}>
                            <CloudUpload /> Solana-Ready in Seconds
                        </Badge>
                        <h1 className="text-2xl md:text-2xl lg:text-3xl max-w-lg font-medium tracking-tight">
                            Deploy smart contracts directly, <span className="text-muted-foreground">to devnet or mainnet from the platform.</span>
                        </h1>
                    </div>
                    <div className="px-4 py-8 md:p-8 space-y-4">
                        <Badge variant={"secondary"}>
                            <Table2 /> Schema-Driven Contracts
                        </Badge>
                        <h1 className="text-2xl md:text-2xl lg:text-3xl max-w-md font-medium tracking-tight">
                            Just define your data structure.  <span className="text-muted-foreground">Vyntrix transforms it into smart contracts.</span>
                        </h1>
                    </div>
                    <div className="px-4 py-8 md:p-8 space-y-4 border-b border-dashed">
                        <Badge variant={"secondary"}>
                            <Wallet /> Accept payments
                        </Badge>
                        <h1 className="text-2xl md:text-2xl lg:text-3xl max-w-md font-medium tracking-tight">
                            Launch monetized apps  <span className="text-muted-foreground">faster with built-in Solana Pay tools.</span>
                        </h1>
                    </div>
                </div>

                <div className="border-t border-dashed w-full text-center grid px-4 md:px-8 py-12 md:py-16">
                    <div className="max-w-xl w-full justify-self-center text-center">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            Manage users, notify on-chain, accept payments — launch without limits.
                        </h1>
                    </div>
                </div>
            </section>
        </section>
    )
}