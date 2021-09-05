import { client } from "prismic.config";
import Prismic from "prismic-javascript";

async function getArticles(req, res) {
  const data = await client.query(
    Prismic.Predicates.at("document.type", "article"),
    {
      pageSize: 10,
    }
  );

  res.status(200).json(data);
}

export default getArticles;
