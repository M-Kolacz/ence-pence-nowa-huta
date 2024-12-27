import { Divider } from "#app/components/atoms";
import { Donation, Registration } from "#app/components/organisms";

export const News = () => {
  return (
    <>
      <h1 className="col-span-full text-center font-headings text-h1 text-text lg:col-start-2 lg:col-end-12">
        Aktualności w naszym żłobku
      </h1>
      <Registration />
      <Divider className="col-span-full lg:col-start-2 lg:col-end-12" />
      <Donation />
    </>
  );
};
