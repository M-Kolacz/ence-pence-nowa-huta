import { type IconName } from "#app/components/atoms";

export const navigationLinks = [
  { href: "/", children: "Strona główna", icon: "web" },
  { href: "/aktualnosci", children: "Aktualności", icon: "newspaper" },
  { href: "/oferta", children: "Oferta", icon: "offer" },
  { href: "/galeria", children: "Galeria", icon: "image" },
  { href: "/kontakt", children: "Kontakt", icon: "phone-call" },
] satisfies Array<{ href: string; children: string; icon: IconName }>;
