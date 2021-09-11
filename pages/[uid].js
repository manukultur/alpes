import React from "react";
import { client } from "prismic.config";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import Prismic from "prismic-javascript";
import ErrorPage from "next/error";
import CircleIndicator from "@/components/motion";

const Slices = dynamic(import("@/layouts/slices"));

export default function Page({ data, uid }) {
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

  if (!data || !uid) {
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
        <meta name="twitter:site" content={`/${uid}`} key="twsite" />

        {/* Open Graph */}
        <meta property="og:url" content={`/${uid}`} key="ogurl" />
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
      <Slices data={data} />
    </React.Fragment>
  );
}

export async function getStaticProps({ params }) {
  const { uid } = params;

  const { data } = await client.getByUID("page", uid, {
    fetchLinks: "page.title",
  });

  return {
    props: {
      data,
      uid: uid,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "page"),
    { pageSize: 100, lang: "*" }
  );
  const paths = results.map((page) => ({
    params: {
      uid: page.uid,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
