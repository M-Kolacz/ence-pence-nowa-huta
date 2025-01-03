import { Icon } from "#app/components/atoms";
import { Section } from "#app/components/templates";
import layetteSrc from "#app/images/layette.svg";
import Image from "next/image";

export const Layette = () => {
  const layetteTitle = "leyette";
  return (
    <Section
      className="flex flex-col gap-strong md:flex-row md:items-center"
      aria-labelledby={layetteTitle}
    >
      <div className="flex flex-col gap-subtle md:justify-center">
        <h2
          className="w-full max-w-prose font-headings text-h2 text-text"
          id={layetteTitle}
        >
          Wyprawka obejmuje:
        </h2>
        <div className="flex flex-col gap-subtle">
          <ul className="flex flex-col gap-4">
            <li className="flex gap-2 align-middle">
              <Icon name="diaper" className="h-8 w-8" />
              <p className="max-w-prose text-p1 text-text-subtle">
                Środki higieniczne: pampersy oraz chusteczki nawilżające.
              </p>
            </li>
            <li className="flex gap-2 align-middle">
              <Icon name="milk-bottle" className="h-8 w-8" />
              <p className="max-w-prose text-p1 text-text-subtle">
                Kubek lub butelka - w przypadku, gdy dziecko nie pije jeszcze z
                normalnego kubka.
              </p>
            </li>
            <li className="flex gap-2 align-middle">
              <Icon name="shoes" className="h-8 w-8" />
              <p className="max-w-prose text-p1 text-text-subtle">
                Obuwie na zmianę (na rzepy lub zatrzask) dla chodzących dzieci,
                lub skarpetki antypoślizgowe.
              </p>
            </li>
            <li className="flex gap-2 align-middle">
              <Icon name="blanket" className="h-8 w-8" />
              <p className="max-w-prose text-p1 text-text-subtle">
                Komplet pościeli: kocyk lub kołderka, poduszka, prześcieradło.
              </p>
            </li>
            <li className="flex gap-2 align-middle">
              <Icon name="pacifier" className="h-8 w-8" />
              <p className="max-w-prose text-p1 text-text-subtle">
                Smoczek - tylko jeśli dziecko go potrzebuje.
              </p>
            </li>
          </ul>
          <p className="max-w-prose text-p1 text-text-subtle">
            Proszę pamiętać, aby wszystkie rzeczy dziecka były podpisane.
          </p>
        </div>
      </div>
      <Image
        src={layetteSrc}
        alt=""
        className="max-h-[500px] max-w-[500px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
      />
    </Section>
  );
};
