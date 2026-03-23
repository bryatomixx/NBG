import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#10393C] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="text-xl font-bold mb-2">
            NBG <span className="text-[#EA7F49]">Insurance</span>
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            PROSPER WITH PURPOSE FINANCIAL INC<br />
            dba National Brokers Group
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-white/50">Company</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/latino" className="hover:text-white transition-colors">NBG Latino</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-white/50">Products</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/products/term-life-insurance" className="hover:text-white transition-colors">Term Life</Link></li>
            <li><Link href="/products/whole-life-insurance" className="hover:text-white transition-colors">Whole Life</Link></li>
            <li><Link href="/products/universal-life-insurance" className="hover:text-white transition-colors">Universal Life</Link></li>
            <li><Link href="/quote" className="hover:text-white transition-colors">Get a Quote</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-white/50">Contact</h3>
          <address className="not-italic text-sm text-white/70 space-y-2">
            <p>2520 NW 97th Ave Suite 120<br />Doral, FL 33172</p>
            <p><a href="tel:+15614231793" className="hover:text-white transition-colors">+1 (561) 423-1793</a></p>
            <p><a href="mailto:info@nbg-insurance.com" className="hover:text-white transition-colors">info@nbg-insurance.com</a></p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white/40">
        <p>© {new Date().getFullYear()} National Brokers Group. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white/70 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
