import Features from "@/components/home/features";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="grid">
      <section className="w-full grid border-b border-dashed">
        <Header />
      </section>

      <Hero />
      <Features />
    </main>
  )
}