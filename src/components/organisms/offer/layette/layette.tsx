import { Icon, ListItem } from "#app/components/atoms";
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
            <ListItem icon={<Icon name="diaper" size="large" />}>
              Środki higieniczne: pampersy oraz chusteczki nawilżające.
            </ListItem>
            <ListItem icon={<Icon name="milk-bottle" size="large" />}>
              Kubek lub butelka - w przypadku, gdy dziecko nie pije jeszcze z
              normalnego kubka.
            </ListItem>
            <ListItem icon={<Icon name="shoes" size="large" />}>
              Obuwie na zmianę (na rzepy lub zatrzask) dla chodzących dzieci,
              lub skarpetki antypoślizgowe.
            </ListItem>
            <ListItem icon={<Icon name="blanket" size="large" />}>
              Komplet pościeli: kocyk lub kołderka, poduszka, prześcieradło.
            </ListItem>
            <ListItem icon={<Icon name="pacifier" size="large" />}>
              Smoczek - tylko jeśli dziecko go potrzebuje.
            </ListItem>
          </ul>
          <p className="max-w-prose text-p1 text-text-subtle">
            Proszę pamiętać, aby wszystkie rzeczy dziecka były podpisane.
          </p>
        </div>
      </div>
      <Image src={layetteSrc} alt="" className="md:w-[400px] lg:w-[500px]" />
    </Section>
  );
};
