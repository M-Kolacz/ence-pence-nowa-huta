import { type ColumnsPhotoAlbumProps } from "react-photo-album";

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

const breakpoints = {
  md: 768,
  lg: 1024,
} as const;

export const images = [
  { ...nursery1url, alt: "Żłobek" },
  { ...nursery2url, alt: "Żłobek" },
  { ...nursery3url, alt: "Żłobek" },
  { ...nursery4url, alt: "Żłobek" },
  { ...nursery5url, alt: "Żłobek" },
  { ...nursery6url, alt: "Żłobek" },
  { ...nursery7url, alt: "Żłobek" },
  { ...nursery8url, alt: "Żłobek" },
  { ...nursery9url, alt: "Żłobek" },
  { ...nursery10url, alt: "Żłobek" },
].map(({ src, width, height, alt }) => ({
  src,
  alt,
  width,
  height,
  srcSet: Object.values(breakpoints).map((breakpoint) => ({
    src: src,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export const setGalleryColumns: ColumnsPhotoAlbumProps["columns"] = (
  containerWidth
) => {
  if (containerWidth < breakpoints.md) return 1;
  else if (containerWidth >= breakpoints.md && containerWidth < breakpoints.lg)
    return 2;
  else return 3;
};
