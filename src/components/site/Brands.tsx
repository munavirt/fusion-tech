const brands = ["Control4", "Lutron", "Crestron", "KNX", "Hikvision", "Bose", "Somfy", "Ubiquiti"];

export function Brands() {
  return (
    <section className="border-y border-border bg-background py-14">
      <p className="text-center text-sm tracking-[0.24em] text-muted-foreground uppercase">
        Technology partners
      </p>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max [animation:marquee_38s_linear_infinite]">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="px-14 font-display text-xl font-semibold tracking-tight text-muted-foreground/70 whitespace-nowrap"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}