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
            <img className="w-6/12 h-full" src={footerLogo} alt="PIEACH footer logo" />
           
          </div>
        </div>

      </div>

      

    

      <div className="w-full text-sm">
       
        <hr className="section-rule my-2" />
        <div className="items-center pt-5 text-sm lg:flex lg:pt-2">
          <div className="w-full lg:w-9/12">
            <p>
              &copy;PIEACH 2026, all reserved.
            </p>
          </div>
          <div className="w-full pt-5 lg:w-3/12 lg:pt-0">
            <a className="underline" href="https://PIEACH.ca/en/privacy-policy/">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
