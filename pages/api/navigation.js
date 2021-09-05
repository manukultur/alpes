import { client } from "prismic.config";

async function getNavigation(req, res) {
  const doc = await client.getSingle("navigation");

  res.status(200).json(doc);
}

export default getNavigation;
