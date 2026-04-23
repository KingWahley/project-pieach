import Image from "next/image";
import { SectionLabel } from "./ui";
import { clients } from "./data";

export function ClientsSection() {
  return (
    <section className="content-section w-full bg-white px-5 py-20 xl:p-8 xl:py-32">
      <div className="w-full">
        <SectionLabel>OUR CLIENTS</SectionLabel>
      </div>

      <div className="mx-auto w-full pt-12 xl:w-10/12">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="montserrat-font reveal-on-scroll text-3xl uppercase leading-tight md:w-6/12 xl:text-5xl font-bold">
            Trusted Worldwide
          </h2>
          <p className="moderustic-font reveal-on-scroll text-base leading-relaxed md:w-5/12 xl:text-lg">
            We collaborate with leading global developers, civic organizations, and private estates to engineer spaces that redefine the human experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:flex-nowrap">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="reveal-on-scroll flex aspect-[1.8/1] min-w-0 flex-[0_1_150px] items-center justify-center border border-gray-200 bg-ultraLightGray p-3 transition-all duration-300 md:flex-[0_1_160px]"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative h-[76%] w-[92%]">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 768px) 42vw, (max-width: 1024px) 24vw, 13vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
