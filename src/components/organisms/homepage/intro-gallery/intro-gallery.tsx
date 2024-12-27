"use client";

import { motion } from "framer-motion";
import { Button, Icon } from "#app/components/atoms";
import { ImagesSlider } from "#app/components/molecules";
import { Section } from "#app/components/templates";

import nursery1url from "#app/images/nursery/1.jpg";
import nursery2url from "#app/images/nursery/2.jpg";
import nursery3url from "#app/images/nursery/3.jpg";
import nursery4url from "#app/images/nursery/4.jpg";
import nursery5url from "#app/images/nursery/5.jpg";
import nursery6url from "#app/images/nursery/6.jpg";
import nursery7url from "#app/images/nursery/7.jpg";
import nursery8url from "#app/images/nursery/8.jpg";
import nursery9url from "#app/images/nursery/9.jpg";
import nursery10url from "#app/images/nursery/10.jpg";

export const IntroGallery = () => {
  const images = [
    nursery1url.src,
    nursery2url.src,
    nursery3url.src,
    nursery4url.src,
    nursery5url.src,
    nursery6url.src,
    nursery7url.src,
    nursery8url.src,
    nursery9url.src,
    nursery10url.src,
  ] as string[];

  return (
    <Section className="sm -mx-app h-[640px] md:h-[800px] lg:col-start-1 lg:col-end-13 lg:h-[900px]">
      <ImagesSlider images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col items-center justify-center md:gap-base"
        >
          <div className="hidden flex-col items-center justify-center md:flex">
            <motion.p className="w-fit rounded-t-lg bg-success-700 px-3 py-1 font-headings text-h3 text-neutral-white">
              Zajrzyj do naszej galerii
            </motion.p>
            <motion.p className="w-fit rounded-lg bg-success-700 px-3 py-1 font-headings text-h3 text-neutral-white">
              zobacz, jak wygląda nauka i zabawa w
            </motion.p>
            <motion.p className="w-fit rounded-b-lg bg-success-700 px-3 py-1 font-headings text-h3 text-neutral-white">
              naszym żłobku.
            </motion.p>
          </div>
          <Button
            variant="secondary"
            className="relative text-xl"
            size={"lg"}
            asChild
          >
            <a href="/galeria">
              Zobacz naszą galerie
              <Icon name="image" className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </ImagesSlider>
    </Section>
  );
};
