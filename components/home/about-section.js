import { useState, useEffect } from "react";
import { stats, assets } from "./data";

export function AboutSection() {
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    const statTimer = window.setInterval(() => {
      setActiveStat((value) => (value + 1) % stats.length);
    }, 5500);

    return () => window.clearInterval(statTimer);
  }, []);

  const onPrevStat = () => {
    setActiveStat((value) => (value - 1 + stats.length) % stats.length);
  };

  const onNextStat = () => {
    setActiveStat((value) => (value + 1) % stats.length);
  };

  return (
    <section id="about" className="w-full px-5 py-8 xl:p-8">
      <div className="gap-6 py-10 lg:flex">
        <div className="w-full pr-10 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
          <div className="flex items-center">
            <div className="w-8/12">
              <h3 className="ibm-mono reveal-on-scroll uppercase text-sm">
                Highlights
              </h3>
            </div>
            <div className="flex w-4/12 justify-end">
              <span className="ibm-mono text-sm">
                {String(activeStat + 1).padStart(2, "0")} /{" "}
                {String(stats.length).padStart(2, "0")}
              </span>
            </div>
          </div>
          <hr className="section-rule my-2" />

          <div className="reveal-on-scroll py-4">
            <div className="py-4">
              <h3 className="text-5xl font-bold 3xl:text-6xl">
                {stats[activeStat].value}
              </h3>
              {stats[activeStat].title && (
                <h4 className="mt-2 text-2xl font-semibold opacity-90 uppercase tracking-widest">
                  {stats[activeStat].title}
                </h4>
              )}
            </div>
            <p className="text-base leading-relaxed xl:text-lg">
              {stats[activeStat].description}
            </p>
          </div>

          <div className="flex w-6/12 gap-3 py-8 lg:w-5/12 xl:w-4/12">
            <button
              type="button"
              className="w-full rounded-md bg-ultraLightGray p-2"
              onClick={onPrevStat}
            >
              {"<-"}
            </button>
            <button
              type="button"
              className="w-full rounded-md bg-ultraLightGray p-2"
              onClick={onNextStat}
            >
              {"->"}
            </button>
          </div>
        </div>

        <div className="w-full pt-20 lg:w-7/12 lg:pt-0 xl:w-8/12 2xl:w-9/12">
          <h3 className="ibm-mono reveal-on-scroll uppercase text-sm">About us</h3>
          <hr className="section-rule my-2" />
          <h1 className=" reveal-on-scroll py-5 pr-5 text-base leading-relaxed xl:text-lg  ">
            <span>Pieach Limited was established in 1997. We are a 15-person firm of architects, planners, interior designers, and project managers with an industry-leading reputation in Nigeria and the West African sub region Our award-winning practice provides a wide range of services, from full service architectural and interior design for the project planning, restorations, renovations, and additions.</span>
          </h1>
          <div className="py-4">
            <a
              href="https://PIEACH.ca/en/about/"
              target="_blank"
              rel="noreferrer"
              className="btn-square relative inline-block aspect-square h-[124px] w-[124px] cursor-pointer border border-black p-4"
            >
              <div className="btn-square-arrow absolute top-3 right-3 -rotate-45">
                <img src={assets.arrowIcon} alt="Arrow icon" />
              </div>
              <div className="flex h-full w-full items-end uppercase text-sm">
                About us
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
