import { PackageIcon } from "lucide-react"

function PluginCard() {
    return (
        <div className="flex p-4 gap-2 rounded bg-neutral-900 border">
            <div>
                <PackageIcon />
            </div>
            <div className="grid">
                <h1 className="text-base font-semibold tracking-tight">
                    Storage
                </h1>
                <p className="text-muted-foreground text-sm">
                    Decentralized file storage with IPFS
                </p>
            </div>
        </div>
    )
}


export default function Integrations() {
    return (
        <main className="grid">
            <div className="p-4 md:px-6 md:py-8 w-full border-b">
                <h1 className="text-xl font-semibold tracking-tight">
                    Integrations
                </h1>
            </div>
            <div className="p-4 md:px-6 md:py-8 w-full border-b grid gap-8">
                <div className="grid">
                    <h1 className="text-lg font-semibold tracking-tight">
                        All Integrations
                    </h1>
                    <p className="text-muted-foreground">
                        Extend your app capabilities by integrating other powerful technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <PluginCard />
                    <PluginCard />
                    <PluginCard />
                    <PluginCard />
                    <PluginCard />
                </div>
            </div>
        </main>
    )
}