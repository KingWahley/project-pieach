import Image from "next/image";

export function Footer({ footerLogo }) {
  return (
    <footer id="contact" className="w-full bg-white px-5 py-20 xl:px-8">
      <hr className="section-rule mb-16" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Brand Column */}
        <div className="lg:col-span-5">
          <Image
            src={footerLogo}
            alt="PIEACH logo"
            width={180}
            height={60}
            className="mb-8"
          />
          <p className="max-w-xs text-lg leading-relaxed opacity-80">
            Architecture for the human condition — crafted with precision, guided by vision.
          </p>
        </div>

        {/* Navigate Column */}
        <div className="lg:col-span-2">
          <h4 className="ibm-mono mb-6 text-xs uppercase tracking-widest opacity-40">
            Navigate
          </h4>
          <ul className="flex flex-col gap-4 text-sm font-medium uppercase tracking-tight">
            <li><a href="#" className="footer-nav-link">Home</a></li>
            <li><a href="#about" className="footer-nav-link">About</a></li>
            <li><a href="#services" className="footer-nav-link">Services</a></li>
            <li><a href="#projects" className="footer-nav-link">Projects</a></li>
            <li><a href="#careers" className="footer-nav-link">Careers</a></li>
            <li><a href="#blog" className="footer-nav-link">Blog</a></li>
            <li><a href="#contact" className="footer-nav-link">Contact</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-2">
          <h4 className="ibm-mono mb-6 text-xs uppercase tracking-widest opacity-40">
            Services
          </h4>
          <ul className="flex flex-col gap-4 text-sm font-medium uppercase tracking-tight">
            <li>Architectural Design</li>
            <li>Interior Design</li>
            <li>Urban Planning</li>
            <li>Project Management</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-3">
          <h4 className="ibm-mono mb-6 text-xs uppercase tracking-widest opacity-40">
            Contact
          </h4>
          <div className="flex flex-col gap-6 text-sm leading-relaxed">
            <a href="mailto:studio@pieach.com" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
              studio@pieach.com
            </a>
            <p className="font-bold">+234 (0) 816 453 6434</p>
            <p className="opacity-80">
              1st Floor, 274A Kofo Abayomi Street,<br />
              Victoria Island, Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 pt-8 border-t border-black/5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-[10px] uppercase tracking-widest opacity-40">
        <p>© 2026 PIEACH LIMITED. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
