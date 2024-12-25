import { Button, Icon, NavigationLink } from "#app/components/atoms";
import { navigationLinks } from "#app/ssot/navigation.ts";
import logoUrl from "#app/images/logo.svg";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="col-span-full flex flex-col justify-center gap-strong md:flex-row md:flex-wrap">
      <div className="flex flex-col items-center gap-base md:basis-full md:flex-row md:justify-between">
        <Link href="/">
          <Image
            src={logoUrl}
            alt="Żłobek Ence Pence Nowa Huta"
            className="h-[80px] w-[100px] md:h-[121px] md:w-[150px]"
          />
        </Link>
        <nav aria-label="Dolna nawigacja strony">
          <ul className="flex flex-wrap items-center justify-evenly gap-strong">
            {navigationLinks
              .filter((link) => link.href !== "/galeria")
              .map((link) => {
                if (link.href === "/kontakt")
                  return (
                    <li key={link.href}>
                      <Button variant={"outline"} asChild>
                        <Link {...link} />
                      </Button>
                    </li>
                  );

                return (
                  <li key={link.href} className="px-2 py-4">
                    <NavigationLink href={link.href}>
                      {link.children}
                    </NavigationLink>
                  </li>
                );
              })}
          </ul>
        </nav>
        <div className="flex gap-subtle">
          <Button size="icon" variant="outline" title="Galeria" asChild>
            <Link href="/galeria">
              <Icon name="image" />
            </Link>
          </Button>

          <Button
            size="icon"
            variant="outline"
            title="Fanpage żłobka na Facebook-u"
            asChild
          >
            <a href="https://www.facebook.com/encepencehuta">
              <Icon name="facebook" />
            </a>
          </Button>
        </div>
      </div>
      <p className="text-center text-p5 text-muted-foreground">
        Wszelkie prawa zastrzeżone © Żłobek Ence Pence Nowa Huta {currentYear}
      </p>
    </footer>
  );
};
