import { Section } from "#app/components/templates";
import Image from "next/image";
import ourApproachSrc from "#app/images/our-approach.svg";

export const OurApproach = () => {
  const outApproachTitle = "our-approach-title";
  return (
    <Section
      className="flex flex-col gap-strong md:flex-row md:items-center md:justify-between"
      aria-labelledby={outApproachTitle}
    >
      <div className="flex flex-col gap-strong">
        <div className="flex flex-col gap-subtle">
          <h2 className="font-headings text-h2 text-text" id={outApproachTitle}>
            Jak podchodzimy do rozwoju Twojego dziecka
          </h2>
          <p className="max-w-prose text-p1 text-text-subtle">
            Naszą misją jest wspieranie mam w codziennej opiece nad ich dziećmi.
            Stawiamy na stworzenie przyjaznej, domowej atmosfery, w której
            maluchy czują się bezpiecznie. Zabawy i zajęcia są starannie
            dopasowane do potrzeb, możliwości i tempa rozwoju każdego dziecka.
            Placówka została wyposażona w bezpieczne, atestowane zabawki oraz
            pomoce edukacyjne.
          </p>
        </div>
      </div>
      <Image
        src={ourApproachSrc}
        alt=""
        className="md:w-[400px] lg:w-[500px] md:order-first"
      />
    </Section>
  );
};
