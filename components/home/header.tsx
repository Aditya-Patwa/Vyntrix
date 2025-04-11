import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <header className="max-w-7xl w-full p-4 md:py-4 md:px-8 justify-self-center flex items-center justify-between">
            <div>
                <Link href={"/"}>
                    <h1 className="text-xl font-semibold tracking-tight leading-none">
                        VYNTRIX
                    </h1>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-2">
                <Link href={"/"}>
                    <Button variant={"link"} className="cursor-pointer">
                        Features
                    </Button>
                </Link>
                <Link href={"/"}>
                    <Button variant={"link"} className="cursor-pointer">
                        Pricing
                    </Button>
                </Link>
                <Link href={"/"}>
                    <Button variant={"link"} className="cursor-pointer">
                        FAQ
                    </Button>
                </Link>
            </div>

            <div>
                <Link href={"/"}>
                    <Button variant={"secondary"} className="cursor-pointer">
                        Connect Wallet
                    </Button>
                </Link>
            </div>
        </header>
    )
}