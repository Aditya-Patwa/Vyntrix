import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">VYNTRIX</h2>
          <p className="text-sm text-muted-foreground">
            Create smart contracts visually, manage users and data in real-time, and launch full-stack dApps on Solana — all without leaving your browser.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col md:flex-row justify-between gap-8 md:px-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-muted-foreground">Company</h3>
            <ul className="space-y-2 text-sm">

              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-muted-foreground">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/#faq" className="hover:underline">FAQs</Link></li>
              <li><Link href="mailto:vyntrixhq@gmail.com" className="hover:underline">Help Center</Link></li>
            </ul>
          </div>
        </div>

        {/* <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="mailto:vyntrixhq@gmail.com" aria-label="Email"><Mail /></Link>
            <Link href="https://discord.gg/gsaApAQR" aria-label="Discord">
              <Image src={"/Discord-Symbol-White.png"} alt="Discord" width={24} height={24} />
            </Link>
            <Link href="https://x.com/VyntrixHQ" aria-label="Twitter">
              <Image src={"/x-logo.png"} alt="Discord" width={24} height={24} />
            </Link>
          </div>
        </div> */}
      </div>

      <div className="max-w-7xl justify-self-center w-full mt-10 border-t border-dashed pt-6 text-sm flex justify-between items-center sm:px-4">
        <div className="text-muted-foreground">
          &copy; {new Date().getFullYear()} {" "} All rights reserved.
        </div>

        <div className="flex gap-6">
          <h3 className="hidden sm:grid text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 items-center">
            <Link href="mailto:vyntrixhq@gmail.com" aria-label="Email"><Mail /></Link>
            <Link href="https://discord.gg/gsaApAQR" aria-label="Discord">
              <Image src={"/Discord-Symbol-White.png"} alt="Discord" width={24} height={24} className="invert dark:invert-0" />
            </Link>
            <Link href="https://x.com/VyntrixHQ" aria-label="Twitter">
              <Image src={"/x-logo.png"} alt="Discord" width={20} height={20} className="invert dark:invert-0" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
