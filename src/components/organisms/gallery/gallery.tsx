"use client";

import { useState } from "react";
import { ColumnsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Section } from "#app/components/templates";
import { setGalleryColumns } from "./gallery.helpers.ts";

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

const breakpoints = [1024, 768];

const images = [
  nursery1url,
  nursery2url,
  nursery3url,
  nursery4url,
  nursery5url,
  nursery6url,
  nursery7url,
  nursery8url,
  nursery9url,
  nursery10url,
].map(({ src, width, height }) => ({
  src: src,
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: src,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(-1);
  const gallery = "gallery";

  return (
    <Section className="flex flex-col gap-strong" aria-labelledby={gallery}>
      <h1 className="lg font-headings text-h2 text-text" id={gallery}>
        Galeria zdjęć
      </h1>
      <ColumnsPhotoAlbum
        columns={setGalleryColumns}
        photos={images}
        onClick={({ index }) => setPhotoIndex(index)}
      />

      <Lightbox
        index={photoIndex}
        slides={images}
        open={photoIndex >= 0}
        close={() => setPhotoIndex(-1)}
        plugins={[Counter, Thumbnails]}
      />
    </Section>
  );
};
