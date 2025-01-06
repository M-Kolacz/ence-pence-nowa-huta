import { Button } from "#app/components/atoms";
import { Section } from "#app/components/templates";
import Image from "next/image";
import notFoundSrc from "#app/images/not-found.svg";
import Link from "next/link";

export const NotFound = () => {
  const notFoundTitle = "not-found-title";
  return (
    <Section
      className="flex flex-col gap-strong md:flex-row md:items-center md:justify-between"
      aria-labelledby={notFoundTitle}
    >
      <div className="flex flex-col gap-strong">
        <div className="flex flex-col gap-subtle">
          <h1 className="font-headings text-h1 text-text" id={notFoundTitle}>
            Błąd 404 - Strona nie istnieje.
          </h1>
          <p className="max-w-prose text-p1 text-text-subtle">
            Nie znaleziono strony. Jeśli trafiłeś tutaj przez pomyłkę,
            skorzystaj z menu lub kliknij poniższy przycisk, aby wrócić na
            stronę główną.
          </p>
        </div>
        <div className="flex flex-wrap gap-subtle">
          <Button asChild>
            <Link href="/">Wróć do strony głównej</Link>
          </Button>
        </div>
      </div>
      <Image src={notFoundSrc} alt="" className="md:w-[400px] lg:w-[500px]" />
    </Section>
  );
};
