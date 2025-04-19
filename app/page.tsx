import CTA from "@/components/home/cta";
import FAQ from "@/components/home/faq";
import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Workflow from "@/components/home/workflow";

export default function Home() {
  return (
    <main className="grid">
      <section className="w-full grid border-b border-dashed">
        <Header />
      </section>

      <Hero />
      <Features />
      <Workflow />


      <FAQ />
      <CTA />

      <Footer />
    </main>
  )
}