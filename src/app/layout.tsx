import type { Metadata } from "next";
import "#app/styles/global.css";
import { roboto, robotoCondensed } from "#app/styles/font.ts";
import { AppContainer, Main } from "#app/components/templates";
import { Header, Footer } from "#app/components/organisms";

export const metadata: Metadata = {
  title: "Ence Pence Żłobek Nowa Huta",
  description:
    "Ence Pence Żłobek Nowa Huta - profesjonalna opieka dla dzieci od 5 miesięcy do 3/4 lat. Bezpieczne i przyjazne środowisko wspierające rozwój dziecka. Zapisz swoje dziecko już dziś!",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon/favicon-96x96.png",
      sizes: "96x96",
    },
    { rel: "icon", url: "/favicon/favicon.svg", type: "image/svg+xml" },
    { rel: "shortcut icon", url: "/favicon/favicon.ico" },
    { rel: "icon", url: "/favicon/favicon.ico", sizes: "48x48" },
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
    { rel: "manifest", url: "/favicon/site.webmanifest" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${roboto.className} ${robotoCondensed.variable} antialiased bg-background text-foreground`}
      >
        <AppContainer>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </AppContainer>
      </body>
    </html>
  );
}
