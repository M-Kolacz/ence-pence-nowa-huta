import { Gallery } from "#app/components/organisms";

import "react-photo-album/columns.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "#app/styles/gallery.css";

export const GalleryPage = () => {
  return (
    <>
      <Gallery />
    </>
  );
};
