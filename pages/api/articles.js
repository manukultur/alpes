import { client } from "prismic.config";
import Prismic from "prismic-javascript";

const getArticles = async (req, res) => {
  const { data } = await client.query(
    Prismic.Predicates.at("document.type", "article"),
    { pageSize: 100, lang: "*" }
  );

  return res.status(200).json(data);
};

export default getArticles;
