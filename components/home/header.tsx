import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";

export default function Header() {
    return (
        <header className="max-w-7xl w-full p-4 md:py-4 md:px-8 justify-self-center flex items-center justify-between">
            <div>
                <Link href={"/"}>
                    <h1 className="text-2xl font-semibold tracking-tight leading-none">
                        VYNTRIX
                    </h1>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-2">
                <Link href={"/#features"}>
                    <Button variant={"ghost"} className="cursor-pointer">
                        Features
                    </Button>
                </Link>
                <Link href={"mailto:vyntrixhq@gmail.com"}>
                    <Button variant={"ghost"} className="cursor-pointer">
                        Contact
                    </Button>
                </Link>
                <Link href={"/#faq"}>
                    <Button variant={"ghost"} className="cursor-pointer">
                        FAQ
                    </Button>
                </Link>
            </div>

            <div className="flex gap-1">
                <Link href={"/#cta"}>
                    <Button variant={"secondary"} className="cursor-pointer">
                        Join Waitlist
                    </Button>
                </Link>
                <ModeToggle />
            </div>
        </header>
    )
}