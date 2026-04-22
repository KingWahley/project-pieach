import Lottie from "lottie-react";
import { AnimatedButton, SectionLabel } from "./ui";

export function Footer({
  footerAnimation,
  footerLogo,
  encLogo,
  usefulLinks,
  arrowIcon,
  onOpenModal,
}) {
  return (
    <footer id="contact" className="w-full px-5 py-8 xl:p-8">
      <hr className="section-rule my-2" />

      <div className="flex items-center justify-between gap-6 lg:gap-3 xl:-mt-16">
        <div className="w-6/12 py-5 lg:w-7/12 lg:p-5">
          <div className="flex items-center">
            <img className="w-6/12 h-full" src={footerLogo} alt="HUPR footer logo" />
            <div className="-ml-2 w-5/12 xl:-ml-8">
              {footerAnimation ? (
                <Lottie animationData={footerAnimation} loop autoplay />
              ) : (
                <div className="aspect-square rounded-full border border-black/20" />
              )}
            </div>
          </div>
        </div>

        <div className="flex w-6/12 justify-end lg:w-4/12 xl:w-3/12">
          <div>
            <img src={encLogo} alt="National Circus School logo" />
          </div>
        </div>
      </div>

      <div className="w-full pt-10 lg:w-5/12 lg:pt-0">
        <p className="text-sm">
          * Some of the images featured on this site were generated using artificial
          intelligence.
        </p>
      </div>

      <div className="pt-10 lg:pt-20">
        <div className="gap-8 xl:flex xl:flex-nowrap">
          <div className="w-full gap-8 lg:flex xl:w-9/12">
            <div className="w-full lg:w-6/12 xl:w-4/12">
              <SectionLabel>Useful links</SectionLabel>
              <div className="pt-4 text-sm">
                <ul className="flex flex-col">
                  {usefulLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        className={`inline-block pb-2 underline ${link.className ?? ""}`}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full pt-10 text-sm lg:w-6/12 lg:pt-0 xl:w-8/12">
              <SectionLabel>Contact information</SectionLabel>
              <div className="pt-4 text-sm xl:w-4/12 3xl:text-lg">
                <address className="not-italic">
                  8181 Cirque Avenue, Montreal (Quebec) Canada H1Z 4N9
                </address>
                <div className="py-4">
                  <span>Phone: </span>
                  <a href="tel:5149820859">
                    <span>514 982-0859</span>
                  </a>
                </div>
                <div className="py-2">
                  <a
                    href="https://hupr.ca/en/contact/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="anim-btn rounded-md bg-black-hupr px-4 py-2 text-xs uppercase text-white"
                    >
                      <AnimatedButton label="Contact us" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-10 xl:w-3/12 xl:pt-0">
            <SectionLabel>Newsletter</SectionLabel>
            <div className="pt-4">
              <h3 className="montserrat-font text-3xl font-bold uppercase 3xl:text-5xl">
                Subscribe to our newsletter
              </h3>
              <div className="py-4">
                <button
                  type="button"
                  className="btn-square relative inline-block aspect-square h-[124px] w-[124px] cursor-pointer border border-black p-4 text-left"
                  onClick={onOpenModal}
                >
                  <div className="btn-square-arrow absolute top-3 right-3 -rotate-45">
                    <img src={arrowIcon} alt="Arrow icon" />
                  </div>
                  <div className="flex h-full w-full items-end uppercase text-sm">
                    Subscribe
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-sm">
        <div className="flex py-4">
          <div className="w-6/12 lg:w-3/12">
            <a
              className="underline"
              href="https://www.linkedin.com/company/centre-hupr/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="w-6/12 lg:w-9/12">
            <a href="https://hupr.ca/" className="underline">
              Francais
            </a>
          </div>
        </div>
        <hr className="section-rule my-2" />
        <div className="items-center pt-5 text-sm lg:flex lg:pt-2">
          <div className="w-full lg:w-9/12">
            <p>
              &copy;HUPR 2026, all reserved. - Digital experience designed by{" "}
              <a
                className="underline"
                href="https://instynctweb.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instynct web
              </a>
            </p>
          </div>
          <div className="w-full pt-5 lg:w-3/12 lg:pt-0">
            <a className="underline" href="https://hupr.ca/en/privacy-policy/">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
