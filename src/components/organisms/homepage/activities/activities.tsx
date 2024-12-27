import {
  ActivityCard,
  activityCardVariations,
} from "#app/components/molecules";
import { Section } from "#app/components/templates";

export const Activities = () => {
  return (
    <Section className="flex flex-col gap-strong">
      <h2 className="max-w-prose text-center text-h2 font-bold text-text">
        Najlepszy start w naukę - odkryj nasz multidyscyplinarny system edukacji
      </h2>
      <div className="flex flex-wrap justify-evenly gap-strong">
        {activityCardVariations.map((activity) => (
          <ActivityCard key={activity} variant={activity} />
        ))}
      </div>
    </Section>
  );
};
