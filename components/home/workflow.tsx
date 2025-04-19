export default function Workflow() {
    return (
        <section className="w-full grid border-b border-dashed px-4" id="workflow">
            <div className="w-full py-2 bg-muted max-w-6xl w-full justify-self-center"></div>
            <section className="max-w-6xl w-full justify-self-center grid gap-4 border-x border-dashed grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x divide-dashed">
                <div className="space-y-2 px-4 md:px-8 py-12 md:py-16 border-b border-dashed">
                    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                        From Idea to On-Chain in Minutes
                    </h1>
                    <p className="text-muted-foreground">
                        Launch Solana smart contracts without the dev headache.
                    </p>
                </div>

                <div className="grid divide-y divide-dashed border-t border-dashed md:border-x py-4">
                    <div className="p-4 md:p-8 grid gap-2">
                        <h1 className="text-lg md:text-xl font-semibold tracking-tight leading-none">
                            1. Define Your Logic
                        </h1>
                        <p className="text-muted-foreground">
                            Use our intuitive interface to visually structure your contract logic — no code required.
                        </p>
                    </div>
                    <div className="p-4 md:p-8 grid gap-2">
                        <h1 className="text-lg md:text-xl font-semibold tracking-tight leading-none">
                            2. Customize & Preview
                        </h1>
                        <p className="text-muted-foreground">
                            Tweak parameters, add permissions, or integrate Solana Pay — all from your dashboard.
                        </p>
                    </div>
                    <div className="p-4 md:p-8 grid gap-2">
                        <h1 className="text-lg md:text-xl font-semibold tracking-tight leading-none">
                            3. Generate Smart Contract
                        </h1>
                        <p className="text-muted-foreground">
                            Vyntrix instantly generates clean, production-ready smart contract code.
                        </p>
                    </div>
                    <div className="p-4 md:p-8 grid gap-2">
                        <h1 className="text-lg md:text-xl font-semibold tracking-tight leading-none">
                            4. Deploy or Export
                        </h1>
                        <p className="text-muted-foreground">
                            Deploy to Solana mainnet/devnet with one click — or export the code to go your own way.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}