import artSrc from "#app/images/art.svg";
import musicSrc from "#app/images/music.svg";
import sportSrc from "#app/images/sport.svg";

export const activityCardState = {
  sport: {
    title: "Sport i zabawa",
    description: "Uczymy współpracy przez ruch i radość.",
    src: sportSrc,
  },
  music: {
    title: "Muzyka, śpiew, taniec",
    description: "Magiczna podróż w świat dźwięków!",
    src: musicSrc,
  },
  art: {
    title: "Zajęcia artystyczne",
    description: "Twórcze chwile pełne inspiracji i radości.",
    src: artSrc,
  },
} as const;
