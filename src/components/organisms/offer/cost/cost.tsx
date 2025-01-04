import { Icon, ListItem } from "#app/components/atoms";
import { Section } from "#app/components/templates";
import costSrc from "#app/images/cost.svg";
import Image from "next/image";

export const Cost = () => {
  const CostTitle = "cost";
  return (
    <Section
      className="flex flex-col gap-strong md:flex-row md:items-center"
      aria-labelledby={CostTitle}
    >
      <div className="flex flex-col gap-subtle md:justify-center">
        <h2
          className="w-full max-w-prose font-headings text-h2 text-text"
          id={CostTitle}
        >
          Opłaty związane z pobytem dziecka
        </h2>
        <div className="flex flex-col gap-subtle">
          <ul className="flex flex-col gap-4">
            <ListItem
              icon={
                <Icon
                  name="document-money"
                  size="large"
                  className="flex-shrink-0"
                />
              }
            >
              Wpisowe w wysokości 450 zł - to opłata jednorazowa, bezzwrotna,
              płatna przy podpisaniu umowy.
            </ListItem>
            <ListItem
              icon={
                <Icon name="dollars" size="large" className="flex-shrink-0" />
              }
            >
              Podstawowe czesne: 1860 zł - kwota bez uwzględnienia dotacji.
            </ListItem>
            <ListItem
              icon={
                <Icon
                  name="piggy-bank"
                  size="large"
                  className="flex-shrink-0"
                />
              }
            >
              Czesne z uwzględnieniem dotacji z ZUS i UM wynosi około 750 zł za
              10 godzin.
            </ListItem>
          </ul>
        </div>
      </div>
      <Image
        src={costSrc}
        alt=""
        className="md:w-[400px] lg:w-[500px] md:order-first"
      />
    </Section>
  );
};
