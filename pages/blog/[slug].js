import React from "react";
import { client } from "prismic.config";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import Prismic from "prismic-javascript";
import ErrorPage from "next/error";
import CircleIndicator from "@/components/motion";
import Article from "@/slices/Article";

const Slices = dynamic(import("@/layouts/slices"));

export default function BlogArticle({ data, slug }) {
  console.log(data);

  const Schema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "",
    url: "",
    sameAs: [
      "https://twitter.com/",
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.pinterest.com/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressRegion: "",
      postalCode: "",
      addressCountry: "DE",
    },
  };

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (!data || !slug) {
    return (
      <React.Fragment>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorPage statusCode={404} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Head>
        {/* Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
          key="viewport"
        />

        <title>{data.meta_title}</title>
        <meta
          name="description"
          content={data.meta_description}
          key="description"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@" key="twhandle" />
        <meta name="twitter:title" content={data.meta_title} key="twtitle" />
        <meta
          name="twitter:image"
          content={data.meta_image?.url}
          key="twimage"
        />
        <meta
          name="twitter:description"
          content={data.meta_description}
          key="twdescription"
        />
        <meta name="twitter:site" content={`/${slug}`} key="twsite" />

        {/* Open Graph */}
        <meta property="og:url" content={`/${slug}`} key="ogurl" />
        <meta
          property="og:image"
          content={data.meta_image?.url}
          key="ogimage"
        />
        <meta property="og:site_name" content="" key="ogsitename" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:locale" content="de_DE" key="oglocale" />
        <meta property="og:title" content={data.meta_title} key="ogtitle" />
        <meta
          property="og:description"
          content={data.meta_description}
          key="ogdesc"
        />

        <link rel="icon" type="image/png" href="" />
        <script
          key={`JSON-Schema`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema) }}
        />
      </Head>
      <Article
        body={data.body}
        title={data.title}
        data={data}
        features={data.features}
      />
      <Slices data={data} />
    </React.Fragment>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { data } = await client.getByUID("article", slug, {
    fetchLinks: "page.title",
  });

  return {
    props: {
      data,
      slug: slug,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "article"),
    { pageSize: 100, lang: "*" }
  );
  const paths = results.map((article) => ({
    params: {
      slug: article.uid,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
