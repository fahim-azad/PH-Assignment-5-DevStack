import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="DevStack Logo"
              className="h-8 mb-6 object-contain"
            />
            <p className="text-[14px] text-slate-500 mb-6 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm font-semibold text-slate-700 hover:text-black transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-slate-700 hover:text-black transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-slate-700 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#0F172A] mb-6 text-sm tracking-wide uppercase">
              Product
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-[14px] text-slate-500 hover:text-[#0F172A] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-slate-500 hover:text-[#0F172A] transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-slate-500 hover:text-[#0F172A] transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0F172A] mb-6 text-sm tracking-wide uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-[14px] text-slate-500 hover:text-[#0F172A] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-slate-500 hover:text-[#0F172A] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-slate-500 hover:text-[#0F172A] transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0F172A] mb-6 text-sm tracking-wide uppercase">
              Legal
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-[14px] text-slate-500 hover:text-[#0F172A] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-slate-500 hover:text-[#0F172A] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-slate-400">
            &copy; 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-[13px] text-slate-400 hover:text-slate-600 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[13px] text-slate-400 hover:text-slate-600 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
