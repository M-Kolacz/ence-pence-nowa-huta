import { Button } from "#app/components/atoms";
import { Section } from "#app/components/templates";
import Image from "next/image";
import heroSrc from "#app/images/happy-baby.svg";
import Link from "next/link";

export const Hero = () => {
  const heroTitle = "hero-title";
  return (
    <Section
      className="flex flex-col gap-strong md:flex-row md:items-center md:justify-between"
      aria-labelledby={heroTitle}
    >
      <div className="flex flex-col gap-strong">
        <div className="flex flex-col gap-subtle">
          <h1 className="font-headings text-h1 text-text" id={heroTitle}>
            Żłobek
            <span className="block">Ence-Pence</span>
            <span className="block">Nowa Huta</span>
          </h1>
          <p className="max-w-prose text-p1 text-text-subtle">
            Naszym priorytetem jest stworzenie przestrzeni, w której dzieci mogą
            odkrywać świat, rozwijać swoje umiejętności i spędzać czas na
            kreatywnej zabawie, zawsze otoczone troską i opieką profesjonalnych
            wychowawców.
          </p>
        </div>
        <div className="flex flex-wrap gap-subtle">
          <Button asChild>
            <Link href="/oferta">Poznaj naszą ofertę</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/kontakt">Zapytaj nas</Link>
          </Button>
        </div>
      </div>
      <Image src={heroSrc} alt="" className="max-h-[500px] max-w-[500px]" />
    </Section>
  );
};
