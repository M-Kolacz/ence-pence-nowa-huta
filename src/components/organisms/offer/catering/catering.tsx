import { Icon } from "#app/components/atoms";
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
            <li className="flex gap-2 align-middle">
              <Icon name="breakfast" className="h-8 w-8" />
              <p className="max-w-prose text-p1 text-text-subtle">
                Śniadanie - 2,00 zł
              </p>
            </li>
            <li className="flex gap-2 align-middle">
              <Icon name="cereal" className="h-8 w-8" />
              <p className="max-w-prose text-p1 text-text-subtle">
                Drugie śniadanie - 1,50 zł
              </p>
            </li>
            <li className="flex gap-2 align-middle">
              <Icon name="salad" className="h-8 w-8" />
              <p className="max-w-prose text-p1 text-text-subtle">
                Obiad (zupa + drugie danie) - 9,50 zł
              </p>
            </li>
            <li className="flex gap-2 align-middle">
              <Icon name="bubble-tea" className="h-8 w-8" />
              <p className="max-w-prose text-p1 text-text-subtle">
                Podwieczorek - 2,00 zł
              </p>
            </li>
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
