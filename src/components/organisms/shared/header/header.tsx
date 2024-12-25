"use client";

import { useState } from "react";
import {
  Button,
  NavigationLink,
  Icon,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "#app/components/atoms";
import { navigationLinks } from "#app/ssot/navigation.ts";
import logoUrl from "#app/images/logo.svg";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="col-span-full flex items-center justify-between">
      <Link href="/">
        <Image
          src={logoUrl}
          alt="Ence Pence Nowa Huta"
          className="md:h-[121px] md:w-[150px]"
        />
      </Link>
      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
        <DrawerTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="visible md:hidden"
            title="Nawigacja strony"
            data-testid="menu-button"
          >
            <Icon name="add" />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="flex flex-col gap-section p-app outline-none">
          <DrawerHeader className="flex items-center justify-between">
            <Image
              src={logoUrl}
              alt="Ence Pence Nowa Huta"
              className="md:h-[121px] md:w-[150px]"
            />
            <DrawerClose asChild>
              <Button size="icon" variant="outline" title="Nawigacja strony">
                <Icon name="cancel" />
              </Button>
            </DrawerClose>
          </DrawerHeader>

          <ul className="flex flex-col gap-base">
            {navigationLinks.map((link) => (
              <li key={link.href} className="w-full">
                <Button
                  variant="secondary"
                  className="w-full justify-start text-left"
                  asChild
                >
                  <Link href={link.href}>
                    <Icon name={link.icon} className="mr-2.5" />
                    {link.children}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>

      <nav className="hidden md:block" aria-label="Nawigacja strony">
        <ul className="list-none gap-subtle md:flex">
          {navigationLinks.map((link) => {
            if (link.href === "/kontakt")
              return (
                <li
                  key={link.href}
                  className="flex items-center justify-center"
                >
                  <Button variant={"outline"} asChild>
                    <Link {...link} />
                  </Button>
                </li>
              );

            return (
              <li key={link.href} className="flex items-center justify-center">
                <NavigationLink {...link} className="text-xl font-bold" />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
