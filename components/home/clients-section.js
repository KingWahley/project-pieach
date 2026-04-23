import { SectionLabel } from "./ui";
import { clients } from "./data";

export function ClientsSection() {
  return (
    <section className="content-section w-full bg-white px-5 py-20 xl:p-8 xl:py-32">
      <SectionLabel>OUR CLIENTS</SectionLabel>

      <div className="mx-auto w-full pt-12 xl:w-10/12">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="montserrat-font reveal-on-scroll text-3xl uppercase leading-tight md:w-6/12 xl:text-5xl font-bold">
            Trusted by Visionaries Worldwide
          </h2>
          <p className="moderustic-font reveal-on-scroll text-base leading-relaxed md:w-5/12 xl:text-lg">
            We collaborate with leading global developers, civic organizations, and private estates to engineer spaces that redefine the human experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="reveal-on-scroll flex aspect-video flex-col items-center justify-center border border-gray-200 bg-ultraLightGray p-6 text-center transition-all duration-300 hover:border-black-PIEACH hover:bg-black-PIEACH hover:text-white group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3 className="montserrat-font text-lg font-bold uppercase tracking-wide">
                {client.name}
              </h3>
              <span className="ibm-mono mt-2 text-xs opacity-50 group-hover:opacity-80">
                {client.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
