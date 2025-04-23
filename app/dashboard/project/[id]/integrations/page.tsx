import { OtherProducts } from "../overview/page";

export default function Integrations() {
    return (
        <main className="grid">
            <div className="p-4 md:px-6 md:py-8 w-full border-b">
                <h1 className="text-xl font-semibold tracking-tight">
                    Integrations
                </h1>
            </div>
            <OtherProducts />
        </main>
    )
}