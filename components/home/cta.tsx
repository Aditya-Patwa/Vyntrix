"use client";
import { Loader2, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import React from "react";

export default function CTA() {
    const [isSubmitting, setSubmitting] = React.useState(false);
    const [email, setEmail] = React.useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            setSubmitting(true);
            const res = await fetch("/api/join-waitlist", { body: JSON.stringify({ email: email }), method: "POST" });
            if (res.status === 200) {
                toast.success("Email added to waitlist");
            } else if (res.status === 400) {
                toast.error("Email is required");
            } else {
                toast.error("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.log("Error Occured: ", error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setEmail("");
            setSubmitting(false);
        }
    }

    return (
        <section className="w-full grid border-b border-dashed px-4" id="cta">
            <section className="max-w-6xl w-full justify-self-center bg-background px-4 md:px-8 py-12 md:py-16 grid gap-6 border border-dashed relative">
                <div className="absolute w-full h-full left-0 h-0 bg-[url('/metal.png')] mix-blend-overlay"></div>
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                    <Plus className="size-6 stroke-1" />
                </div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                    <Plus className="size-6 stroke-1" />
                </div>
                <div className="grid gap-2 z-20 text-center">
                    <h1 className="max-w-md justify-self-center text-3xl md:text-3xl font-semibold tracking-tight leading-none z-10">
                        Join Vyntrix Early.
                    </h1>
                    <p className="max-w-md font-light text-sm sm:text-base z-10 justify-self-center text-muted-foreground">
                        Be the first to know when we launch and get exclusive access to our beta program.
                    </p>
                </div>
                <div className="grid z-20">
                    <form className="grid sm:flex gap-2 items-center justify-self-center" onSubmit={handleSubmit}>
                        <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full max-w-md" />
                        <Button type="submit" className="cursor-pointer" disabled={isSubmitting}>
                            {isSubmitting ? <Loader2 className="animate-spin" /> : "Join Waitlist"}
                        </Button>
                    </form>
                </div>
            </section>
        </section>
    )
}