import Link from "next/link";

export default function GetStarted() {
    return (
        <main className="w-full">
            <div className="w-full grid p-4 md:px-8 border-b">
                <header className="max-w-7xl w-full justify-self-center">
                    <Link href={"/"}>
                        <h1 className="text-2xl font-semibold tracking-tight leading-none">
                            VYNTRIX
                        </h1>
                    </Link>
                </header>
            </div>
        </main>
    )
} 