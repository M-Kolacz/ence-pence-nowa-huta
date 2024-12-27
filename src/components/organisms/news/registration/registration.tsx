import { Link } from "#app/components/atoms";
import { Section } from "#app/components/templates";
import { getRegistrationYears } from "./registration.helpers";
import adultTalkingSrc from "#app/images/news/adult-talking.svg";
import Image from "next/image";

export const Registration = () => {
  const { currentYear, nextYear } = getRegistrationYears();

  return (
    <Section className="flex flex-col items-center gap-strong">
      <div className="flex flex-col items-center gap-subtle">
        <h2 className="text-center font-headings text-h2 text-text">
          Zapisy na rok {currentYear}/{nextYear}
        </h2>
        <p className="max-w-prose text-center text-p1 text-text-subtle">
          Zapisy na rok {currentYear}/{nextYear} już rozpoczęte. Nasz żłobek
          znajduje się na Osiedlu Kliny, zaledwie kilka kroków od pętli
          autobusowej. Aby zapytać o dostępność miejsc, skontaktuj się z nami
          pod numerem telefonu <Link href="tel:+48691999935">691 999 935</Link>{" "}
          lub skorzystaj z{" "}
          <Link href="/kontakt#contact-form-title">
            formularza kontaktowego
          </Link>{" "}
          na stronie.{" "}
          <Link href="https://www.facebook.com/encepencehuta">
            Sprawdź również nasz fanpage
          </Link>
          {", "}
          aby dowiedzieć się więcej!{" "}
        </p>
      </div>
      <Image src={adultTalkingSrc} alt="" />
    </Section>
  );
};
