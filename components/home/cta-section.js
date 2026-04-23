import { AnimatedButton } from "./ui";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-ultraLightGray py-20 xl:py-32">
      <div 
        className="absolute inset-0 z-0 opacity-90 animate-pan-blueprint" 
        style={{ backgroundImage: "url('/assets/blueprint_bg.png')" }}
      />
      <div className="relative z-10 w-full px-5 py-8 text-center xl:p-8">
        <h1 className="montserrat-font reveal-on-scroll mx-auto w-full pb-8 text-4xl uppercase leading-tight lg:w-9/12 lg:text-[60px] xl:text-[80px] font-bold 2xl:text-[100px]">
          Ready to build your vision?
        </h1>
        <p className="moderustic-font reveal-on-scroll mx-auto max-w-2xl pb-12 text-lg leading-relaxed">
          Contact our team of experts today to start discussing your next architectural project. Let's turn your ideas into enchanting realities.
        </p>
        <div className="reveal-on-scroll flex justify-center">
          <a href="mailto:contact@pieach.com">
            <button
              type="button"
              className="anim-btn rounded-md bg-black-PIEACH px-8 py-4 text-sm uppercase text-white transition-transform duration-300 hover:scale-105 xl:text-xl"
            >
              <AnimatedButton label="Get in Touch" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
