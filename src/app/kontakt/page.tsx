import { Metadata } from "next";
import { ContactPage } from "#app/components/pages";

export const metadata: Metadata = {
  title: "Kontakt | Ence Pence Żłobek Nowa Huta",
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
