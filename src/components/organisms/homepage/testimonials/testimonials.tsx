"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDot,
} from "#app/components/atoms";
import {
  AvatarCaption,
  AvatarImg,
  AvatarRoot,
  AvatarTextRoot,
  AvatarTitle,
} from "#app/components/molecules";
import { Section } from "#app/components/templates";

import { testimonials } from "./testimonials.helpers.ts";

export const Testimonials = () => {
  return (
    <Section className="flex flex-col items-center gap-strong">
      <div className="flex flex-col items-center gap-subtle">
        <h2 className="max-w-prose text-center text-h2 font-bold text-text">
          Zobacz, co rodzice mówią o naszym żłobku
        </h2>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[Autoplay({ delay: 10000 })]}
        className="w-full max-w-prose"
      >
        <CarouselContent>
          <>
            {testimonials.map(
              ({ avatarCaption, avatarTitle, description, src }) => (
                <CarouselItem
                  key={avatarTitle}
                  className="flex basis-full flex-col items-center gap-subtle"
                >
                  <p className="max-w-prose flex-grow text-center text-p1 text-text-subtle">
                    {description}
                  </p>
                  <AvatarRoot>
                    <AvatarImg src={src} alt="" />
                    <AvatarTextRoot>
                      <AvatarTitle>{avatarTitle}</AvatarTitle>
                      <AvatarCaption>{avatarCaption}</AvatarCaption>
                    </AvatarTextRoot>
                  </AvatarRoot>
                </CarouselItem>
              )
            )}
          </>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
        <div className="flex justify-center gap-6 pt-6">
          {testimonials.map((_, index) => (
            <CarouselDot
              key={index}
              index={index}
              aria-label={`Wyświetl opinie numer ${index}`}
            />
          ))}
        </div>
      </Carousel>
    </Section>
  );
};
