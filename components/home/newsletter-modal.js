export function NewsletterModal({ isOpen, onClose }) {
  return (
    <section
      className={`newsletter-modal fixed inset-0 z-50 bg-overlay ${
        isOpen ? "is-visible" : "is-hidden"
      }`}
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-pointer"
        onClick={onClose}
        aria-label="Close newsletter modal"
      />

      <div className="flex h-full w-full items-center justify-center p-4">
        <div className="modal-card relative z-10 h-full w-full rounded-md bg-white p-8 pb-2 lg:h-auto lg:w-[460px] xl:w-[520px] 3xl:w-[650px]">
          <button
            type="button"
            className="absolute top-5 right-5 text-xs underline"
            onClick={onClose}
          >
            Closed
          </button>
          <h3 className="ibm-mono pt-5 text-xs uppercase">Newsletter</h3>
          <hr className="section-rule my-2" />
          <div className="py-4">
            <h3 className="montserrat-font text-3xl uppercase 3xl:text-5xl">
              Subscribe to our newsletter
            </h3>
          </div>
          <div className="text-sm">
            Don&apos;t miss any of our news! Subscribe to our newsletter to find
            out more about our projects, events and initiatives, and discover how
            performing arts entertain innovation!
          </div>

          <form className="mt-8 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Organization" />

            <label className="flex items-start gap-3 text-sm leading-relaxed">
              <input className="mt-1 w-auto" type="checkbox" />
              <span>
                By clicking on &quot;Subscribe&quot;, you agree to receive email
                updates from PIEACH. You can unsubscribe at any time via the link in
                our emails. See our privacy policy.
              </span>
            </label>

            <button
              type="submit"
              className="rounded-md bg-black-PIEACH px-4 py-3 text-xs uppercase text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
