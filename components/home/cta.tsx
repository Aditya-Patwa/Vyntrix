import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CTA() {
    return (
        <section className="w-full grid border-b border-dashed px-4" id="cta">
            <section className="max-w-6xl w-full justify-self-center px-4 md:px-8 py-12 md:py-16 grid gap-6 border-x border-dashed relative">
                <div className="absolute w-full h-full left-0 h-0 bg-[url('/metal.png')] mix-blend-overlay"></div>
                <div className="grid gap-2 z-20 text-center">
                    <h1 className="max-w-md justify-self-center text-3xl md:text-3xl font-semibold tracking-tight leading-none z-10">
                        Join Vyntrix Early.
                    </h1>
                    <p className="max-w-md font-light text-sm sm:text-base z-10 justify-self-center text-muted-foreground">
                        Be the first to know when we launch and get exclusive access to our beta program.
                    </p>
                </div>
                <div className="grid z-20">
                    <form className="grid sm:flex gap-2 items-center justify-self-center">
                        <Input type="email" placeholder="Enter your email" className="w-full max-w-md" />
                        <Button type="submit" className="cursor-pointer">
                            Join Waitlist
                        </Button>
                    </form>
                </div>
            </section>
        </section>
    )
}