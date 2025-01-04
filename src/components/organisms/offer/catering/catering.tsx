import { Icon, ListItem } from "#app/components/atoms";
import { Section } from "#app/components/templates";
import beHealthySrc from "#app/images/be-healthy.png";
import fruidSaladSrc from "#app/images/fruid-salad.svg";
import Image from "next/image";

export const Catering = () => {
  const cateringTitle = "catering";
  return (
    <Section
      className="flex flex-col gap-strong md:flex-row md:items-center"
      aria-labelledby={cateringTitle}
    >
      <div className="flex flex-col gap-subtle md:justify-center">
        <h2
          className="w-full max-w-prose font-headings text-h2 text-text"
          id={cateringTitle}
        >
          Stawka żywieniowa: 15 zł/dzień. W cenie 4 zbilansowane posiłki:
        </h2>
        <div className="flex flex-col gap-subtle">
          <ul className="flex flex-col gap-4">
            <ListItem icon={<Icon name="breakfast" size="large" />}>
              Śniadanie - 2,00 zł
            </ListItem>
            <ListItem icon={<Icon name="cereal" size="large" />}>
              Drugie śniadanie - 1,50 zł
            </ListItem>
            <ListItem icon={<Icon name="salad" size="large" />}>
              Obiad (zupa + drugie danie) - 9,50 zł
            </ListItem>
            <ListItem icon={<Icon name="bubble-tea" size="large" />}>
              Podwieczorek - 2,00 zł
            </ListItem>
          </ul>
          <p className="max-w-prose text-p1 text-text-subtle">
            Indywidualnie wyceniamy opłaty za diety specjalistyczne, eliminujące
            szkodliwe składniki lub dostosowane do potrzeb dziecka - zgodnie z
            życzeniem rodzica.
          </p>
          <p className="max-w-prose text-p1 text-text-subtle">
            Catering zapewnia firma Be Healthy - zdrowa kuchnia, dopasowana do
            potrzeb dzieci.
          </p>
        </div>
        <Image
          src={beHealthySrc}
          alt=""
          className="max-h-[131px] max-w-[387px]"
        />
      </div>
      <Image
        src={fruidSaladSrc}
        alt=""
        className="max-h-[500px] max-w-[500px] md:order-first md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
      />
    </Section>
  );
};
