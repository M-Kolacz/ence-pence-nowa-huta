"use client";

import { useState } from "react";
import { ColumnsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Section } from "#app/components/templates";
import { setGalleryColumns, images } from "./gallery.helpers.ts";

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
        componentsProps={{ button: { "aria-label": "Zobacz zdjęcie" } }}
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
