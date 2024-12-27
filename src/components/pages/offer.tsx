import { Invitation, Catering, Layette, Cost } from "#app/components/organisms";

export const Offer = () => {
  return (
    <>
      <h1 className="col-span-full text-center font-headings text-h1 text-text lg:col-start-2 lg:col-end-12">
        Oferta edukacyjna i opiekuńcza
      </h1>
      <Invitation />
      <Catering />
      <Layette />
      <Cost />
    </>
  );
};
