import { Metadata } from "next";
import { News } from "#app/components/pages";

export const metadata: Metadata = {
  title: "Aktualności | Ence Pence Żłobek Nowa Huta",
};

const NewsPage = () => {
  return <News />;
};

export default NewsPage;
