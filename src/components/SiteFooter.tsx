import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-white">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            A website design agency building modern, mobile-friendly,
            SEO-ready sites that help businesses attract customers.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white hover:brightness-110 transition"
          >
            Request a Website
          </a>

        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Studio</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#work" className="hover:text-white">Work</a></li>
            <li><a href="#process" className="hover:text-white">Process</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>hello@dinexity.com</li>
            <li>+1 (415) 555-0140</li>
            <li className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Dinexity. All rights reserved.</p>
          <p>Built with care in San Francisco.</p>
        </div>
      </div>
    </footer>
  );
}
