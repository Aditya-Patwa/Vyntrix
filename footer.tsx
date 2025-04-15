import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">VYNTRIX</h2>
          <p className="text-sm">Let's build Smart Contracts fast.<br></br>Let's build the future together.</p>
        </div>  

        <div className="md:w-1/3 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/privacypolicy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/faq" className="hover:underline">FAQs</a></li>
              <li><a href="mailto:recipient@vyntrixhq@gmail.com" className="hover:underline">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="mailto:recipient@vyntrixhq@gmail.com" aria-label="Email"><MdEmail /></a>
            <a href="https://discord.gg/gsaApAQR" aria-label="Discord"><FaDiscord /></a>
            <a href="https://x.com/VyntrixHQ" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()}All rights reserved.
      </div>
    </footer>
  );
}
