import Header from "@/components/home/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid">
      <section className="w-full grid border-b border-dashed">
        <Header />
      </section>

      <section className="w-full grid border-b border-dashed">
        <section className="max-w-7xl w-full justify-self-center px-4 md:px-8 py-8 md:py-10 grid gap-4 xl:border-x border-dashed">
          <div className="grid gap-4">
            <Badge variant={"secondary"}>Build Smart Contracts, FAST.</Badge>
            <div className="grid gap-2">
              <h1 className="max-w-xl text-3xl md:text-3xl font-semibold tracking-tight leading-none">
                Your No-Code & Low-Code Platform to Build Smart Contracts on Solana.
              </h1>
              <p className="max-w-2xl font-light text-base">
                From contract creation to real-time backend, user auth, and payment integration — Vyntrix is the Solana dev stack reimagined.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href={"/"}>
                <Button>
                  Join Waitlist
                </Button>
              </Link>
              <Link href={"/"}>
                <Button variant={"link"} className="group cursor-pointer">
                  Learn more
                  <ChevronRight className="group-hover:translate-x-1 transition-ease duration-100" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}