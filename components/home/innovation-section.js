import { useState } from "react";
import { innovations, assets } from "./data";
import { SectionLabel } from "./ui";

export function InnovationSection() {
  const [activeInnovation, setActiveInnovation] = useState(0);
  
  const onSelectInnovation = (index) => {
    setActiveInnovation(index);
  };

  const sphereArrow = assets.sphereArrow;

  return (
    <section className="bg-ultraLightGray px-5 py-8 pt-20 xl:min-h-[calc(100vh+5rem)] xl:p-8 flex flex-col">
      <div className="w-full">
        <SectionLabel>Recent Projects</SectionLabel>
      </div>

      <div className="h-full xl:flex flex-1">
        <div className="w-full py-10 xl:w-7/12 2xl:w-8/12 flex flex-col justify-center">
          <div className="montserrat-font flex h-full items-center text-3xl font-bold uppercase leading-none lg:text-[3.8vw] xl:text-[3.5vw] xl:leading-[80px]">
            <ul className="flex w-auto flex-col items-start">
              {innovations.map((item, index) => (
                <li
                  key={item.title}
                  className={`innovation-title mb-2 inline-flex cursor-pointer items-center opacity-30 transition-opacity duration-300 lg:mb-4 xl:mb-2 ${
                    activeInnovation === index ? "active opacity-100" : ""
                  }`}
                  onMouseEnter={() => onSelectInnovation(index)}
                  onFocus={() => onSelectInnovation(index)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 text-left"
                    onClick={() => onSelectInnovation(index)}
                  >
                    <span>{item.title}</span>
                    <span className="arrow-select-sphere relative -right-4 hidden rotate-45 overflow-hidden opacity-0 lg:inline-flex">
                      <img
                        className="w-[70%] 2xl:w-full"
                        src={sphereArrow}
                        alt=""
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full py-8 xl:w-5/12 2xl:w-4/12 flex flex-col justify-center">
          <div className="w-full">
            <div className="overflow-hidden aspect-video xl:aspect-[4/3] w-full">
              <img
                className="h-full w-full object-cover object-top transition-all duration-500"
                src={innovations[activeInnovation].image}
                alt={innovations[activeInnovation].title}
              />
            </div>
            <p className="moderustic-font reveal-on-scroll py-8 text-lg leading-relaxed xl:py-6 xl:pr-5">
              {innovations[activeInnovation].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
