import { client } from "prismic.config";
import Prismic from "prismic-javascript";
import Link from "next/link";
import { Date, RichText } from "prismic-reactjs";
import { format } from "date-fns";
import { PlayIcon } from "@heroicons/react/solid";

export default function BlogIndex({ data }) {
  console.log(data);
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Neues aus der Küche
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {data.results.map((article) => (
            <div
              key={article.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                {article.data.cover_image.url ? (
                  <img
                    className="object-cover w-full h-48"
                    src={article.data.cover_image.url}
                    alt={article.data.cover_image.alt}
                  />
                ) : (
                  <div className="h-48 bg-gray-50">
                    {article.data.video.thumbnail_url && (
                      <div className="relative flex items-center">
                        <PlayIcon className="absolute w-full h-24 text-white opacity-95" />
                        <img
                          src={article.data.video.thumbnail_url}
                          className="object-cover w-full h-48"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p
                    className={`text-sm font-medium ${
                      article.data.category === "Blue"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    <a href="" className="hover:underline">
                      {article.data.category}
                    </a>
                  </p>
                  <Link href={`/blog/${article.uid}`}>
                    <a href="" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {RichText.asText(article.data.title)}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {article.data.snippet}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="flex items-center mt-6">
                  <div className="">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={article.data.publication_date}>
                        {format(
                          Date(article.data.publication_date),
                          "dd. LLL, yyyy"
                        )}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await client.query(
    Prismic.Predicates.at("document.type", "article"),
    { pageSize: 100, orderings: "[my.article.publication_date desc]" }
  );

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}
