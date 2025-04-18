import Link from "next/link";
import Accordion from "./Accordion";
import { faqs } from "./data";

export default function FAQ() {
    return (
        <section className="w-full grid border-b border-dashed px-4" id="faq">
            <section className="max-w-6xl w-full justify-self-center grid gap-4 border-x border-dashed grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x divide-dashed">
                <div className="space-y-2 px-4 md:px-8 py-8 md:py-16 border-b border-dashed">
                    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-muted-foreground">
                        Have another question? Contact us on <span><Link href={"https://x.com/VyntrixHQ"} target="_blank" className="text-foreground underline">X</Link></span> or by <span><Link href={"mailto:vyntrixhq@gmail.com"} className="text-foreground underline">email</Link></span>.
                    </p>
                </div>

                <div className="grid divide-y divide-dashed border-t border-dashed md:border-x pb-4">
                    {faqs.map((faq, i) => 
                        <Accordion key={i} question={faq.question} answer={faq.answer} isAccordionOpen={faq.isAccordionOpen} />
                    )}
                    {/* <div className="p-4 md:p-8 grid gap-2">
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
                    </div> */}
                </div>
            </section>
        </section>
    )
}