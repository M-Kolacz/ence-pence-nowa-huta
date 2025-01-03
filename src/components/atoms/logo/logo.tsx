import Link from "next/link";
import Image, { ImageProps } from "next/image";
import logoUrl from "#app/images/logo.svg";

export const Logo = (logoProps: Partial<ImageProps>) => {
  return (
    <Link href="/">
      <Image
        src={logoUrl}
        alt="Ence Pence Nowa Huta"
        className="md:h-[121px] md:w-[150px]"
        {...logoProps}
      />
    </Link>
  );
};
