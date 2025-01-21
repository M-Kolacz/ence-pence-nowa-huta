import { Metadata } from "next";
import { Offer } from "#app/components/pages";

export const metadata: Metadata = {
  title: "Oferta | Ence Pence Żłobek Nowa Huta",
};

const OfferPage = () => {
  return <Offer />;
};

export default OfferPage;
