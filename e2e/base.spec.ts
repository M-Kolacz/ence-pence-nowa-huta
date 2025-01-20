import { test, expect } from "@playwright/test";

test("Should all pages be visible for the users", async ({ page }) => {
  await page.goto("/");
  const header = page.getByRole("banner");

  const heading1 = page.getByRole("heading", {
    level: 1,
    name: "Żłobek Ence-Pence Nowa Huta",
  });
  await expect(heading1).toBeVisible();

  await header.getByRole("link", { name: "Aktualności" }).click();
  const newsHeading1 = page.getByRole("heading", {
    level: 1,
    name: "Aktualności w naszym żłobku",
  });
  await expect(newsHeading1).toBeVisible();

  await header.getByRole("link", { name: "Oferta" }).click();
  const offerHeading1 = page.getByRole("heading", {
    level: 1,
    name: "Oferta edukacyjna i opiekuńcza",
  });
  await expect(offerHeading1).toBeVisible();

  await header.getByRole("link", { name: "Galeria" }).click();
  const galleryHeading1 = page.getByRole("heading", {
    level: 1,
    name: "Galeria zdjęć",
  });
  await expect(galleryHeading1).toBeVisible();

  await header.getByRole("link", { name: "Kontakt" }).click();
  const contactHeading2 = page.getByRole("heading", {
    level: 2,
    name: "Jak się z nami skontaktować?",
  });
  await expect(contactHeading2).toBeVisible();
});
