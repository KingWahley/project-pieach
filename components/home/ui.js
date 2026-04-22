export function AnimatedButton({ label }) {
  return (
    <div className="overflow-hidden relative">
      <div className="anim-btn-top relative top-0 left-0 transition-transform duration-300">
        {label}
      </div>
      <div className="anim-btn-bottom absolute top-0 left-0 translate-y-full transition-transform duration-300">
        {label}
      </div>
    </div>
  );
}

export function SectionLabel({ children, centered = false }) {
  return (
    <>
      <h3
        className={`ibm-mono reveal-on-scroll uppercase text-sm 3xl:text-lg ${
          centered ? "text-center" : ""
        }`}
      >
        {children}
      </h3>
      <hr className="section-rule my-2" />
    </>
  );
}
