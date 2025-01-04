import { Icon, Link, ListItem } from "#app/components/atoms";
import { Section } from "#app/components/templates";
import invitationSrc from "#app/images/invitation.svg";
import { getRegistrationYears } from "../../news/registration/registration.helpers";
import Image from "next/image";

export const Invitation = () => {
  const contactTitle = "invitation";
  const { currentYear, nextYear } = getRegistrationYears();
  return (
    <Section
      className="flex flex-col gap-strong md:flex-row"
      aria-labelledby={contactTitle}
    >
      <div className="flex flex-col gap-subtle md:justify-center">
        <h2
          className="w-full max-w-prose font-headings text-h2 text-text"
          id={contactTitle}
        >
          Rekrutacja na rok {currentYear}/{nextYear}
        </h2>
        <div className="flex flex-col gap-subtle">
          <p className="max-w-prose text-p1 text-text-subtle">
            Rekrutacja trwa cały rok – przyjmujemy dzieci w zależności od
            dostępnych miejsc. W celu zapisu prosimy o wypełnienie i przesłanie
            wymaganych dokumentów, które znajdziesz poniżej:
          </p>
          <ul>
            <ListItem icon={<Icon name="folder" size="large" />}>
              <Link href="/docs/karta-zgłoszenia-dziecka.doc" className="h-fit">
                Karta zgłoszenia dziecka do żłobka
              </Link>
            </ListItem>
          </ul>
        </div>
      </div>
      <Image src={invitationSrc} alt="" className="md:w-[400px] lg:w-[500px]" />
    </Section>
  );
};
