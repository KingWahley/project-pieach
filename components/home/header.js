"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedButton } from "./ui";

export function Header({ navItems, headerLogo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  const onCloseMenu = () => setIsMenuOpen(false);
  const onToggleMenu = () => setIsMenuOpen((value) => !value);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="flex items-start px-5 py-8 xl:p-8">
        <div className="w-7/12 lg:w-9/12 lg:flex items-center">
          <div className="w-10/12 xl:w-6/12 lg:flex items-center lg:gap-3">
            <div className="w-6/12 py-5 lg:w-4/12 lg:p-5">
              <a href="#" className="block">
                <Image
                  className="block h-auto w-full"
                  src={headerLogo}
                  alt="PIEACH logo"
                  width={320}
                  height={120}
                  priority
                />
              </a>
            </div>
            <div className="inline-block w-full lg:hidden lg:w-4/12">
              <p className="text-xs text-white">
                Research Centre for Human Potential
              </p>
            </div>
          </div>
        </div>

        <div className="fixed right-5 z-40 w-5/12 overflow-hidden lg:w-3/12 xl:right-8">
          <div className="py-5 lg:p-4">
            <button
              type="button"
              className="flex h-full w-full cursor-pointer items-center rounded-[4px] bg-lightGray p-2 text-left"
              onClick={onToggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative h-full w-9/12 overflow-hidden text-sm uppercase lg:w-10/12">
                <div
                  className={`absolute left-0 top-0 transition-transform duration-300 ${
                    isMenuOpen ? "-translate-y-full" : "translate-y-0"
                  }`}
                >
                  Menu
                </div>
                <div
                  className={`absolute left-0 top-0 transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  Close
                </div>
              </div>
              <div className="flex h-full w-3/12 flex-col items-end justify-around gap-1 lg:w-2/12">
                <span
                  className={`h-[2px] w-[40px] origin-left bg-black transition-all duration-300 ${
                    isMenuOpen ? "translate-y-[5px] rotate-12" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-[40px] origin-left bg-black transition-all duration-300 ${
                    isMenuOpen ? "-translate-y-[5px] -rotate-12" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-20 bg-overlay transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onCloseMenu}
      >
        <div className="relative h-full w-full xl:p-8">
          <div
            className={`ml-auto h-full w-full rounded-md bg-white px-5 transition-transform duration-300 lg:px-0 xl:w-[calc(100%/4+1rem)] ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-full w-full flex-col px-5 pb-5 pt-32 xl:pt-20">
              <ul className="montserrat-font w-full text-right text-[40px] font-bold uppercase leading-[60px] lg:text-[80px] lg:leading-[110px] xl:text-3xl">
                {navItems.map((item) => (
                  <li key={item.label} className="anim-btn">
                    <a href={item.href} onClick={onCloseMenu}>
                      <AnimatedButton label={item.label} />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto text-xs">
                <div className="my-2 border-t border-[#323234]" />
                <div className="flex justify-between gap-3 pt-10">
                  <a
                    href="https://www.linkedin.com/company/centre-PIEACH/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a href="https://PIEACH.ca/">Francais</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
