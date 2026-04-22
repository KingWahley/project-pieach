import { AnimatedButton } from "./ui";

export function NewsSection({ news }) {
  return (
    <section className="py-20">
      <div className="w-full px-5 py-8 xl:p-8">
        <h1 className="montserrat-font reveal-on-scroll mx-auto w-full pb-20 text-center text-5xl uppercase lg:w-9/12 lg:text-[80px] xl:text-[90px] 2xl:text-[120px] 3xl:text-[160px]">
          News
        </h1>

        {news.map((item) => (
          <article key={item.title} className="w-full py-4">
            <hr className="section-rule my-2" />
            <div className="gap-10 py-4 lg:flex">
              <div className="w-full lg:w-6/12 xl:w-3/12">
                <div className="aspect-[calc(4/2.8)] overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 xl:flex xl:w-9/12">
                <div className="w-full px-0 py-5 xl:w-6/12 xl:px-20 xl:py-0">
                  <h3 className="montserrat-font reveal-on-scroll text-2xl font-bold uppercase lg:text-2xl 2xl:text-3xl 3xl:text-5xl">
                    {item.title}
                  </h3>
                  <div className="py-2 text-sm">{item.date}</div>
                </div>

                <div className="w-full xl:w-6/12">
                  <div className="moderustic-font reveal-on-scroll text-lg leading-relaxed">
                    <p>{item.description}</p>
                  </div>
                  <div className="pt-4">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="anim-btn rounded-md bg-black-hupr px-4 py-2 text-xs uppercase text-white xl:text-lg"
                      >
                        <AnimatedButton label="Read more" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
