import Image from "next/image";
import { AnimatedButton } from "./ui";

export function HeroSection({ heroImages, repeatedMarquee, splineBackground }) {
  return (
    <section className="relative min-h-screen w-full">
      <div className="h-screen w-full overflow-hidden bg-PIEACH-black xl:h-[170vh]">
        {splineBackground}
      </div>

      <div className="absolute top-[75vh] z-10 overflow-hidden whitespace-nowrap lg:top-[80vh] xl:top-[65vh]">
        <div className="marquee items-center">
          {repeatedMarquee.map((_, groupIndex) => (
            <div className="title-el flex items-center" key={groupIndex}>
              <h1 className="montserrat-font flex items-center gap-6 text-6xl uppercase text-white lg:gap-12 lg:text-[15vw]">
                <span>Redefining Space</span>
                
                <span>Through Design</span>
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/3 mx-auto w-full px-5 lg:left-8 lg:top-1/2 lg:w-5/12 lg:px-0 xl:right-8 xl:left-auto xl:top-8 xl:w-3/12">
        <div className="hero-copy-card hero-panel bg-white">
          <div className="w-full p-8 xl:pt-28">
            <h2 className="ibm-mono reveal-on-scroll text-sm font-normal uppercase tracking-widest">
              Modern Architecture
            </h2>
            <hr className="section-rule mt-2 mb-8" />
            <p className="reveal-on-scroll text-base leading-relaxed xl:text-xl">
              Engineering spatial experiences that inspire and endure.
            </p>
            <div className="reveal-on-scroll pt-8">
              <a href="#services">
                <button
                  type="button"
                  className="anim-btn rounded-md bg-black-PIEACH px-4 py-2 text-xs uppercase text-white xl:text-lg"
                >
                  <AnimatedButton label="learn more" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
