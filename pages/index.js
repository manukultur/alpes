import { client } from "prismic.config";
import Head from "next/head";
import Slices from "@/layouts/slices";
import CircleIndicator from "@/components/motion";

export default function Home({ data }) {
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

  return (
    <>
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
        <meta name="twitter:site" content="" key="twsite" />

        {/* Open Graph */}
        <meta property="og:url" content="" key="ogurl" />
        <meta
          property="og:image"
          content={data.meta_image?.url}
          key="ogimage"
        />
        <meta property="og:site_name" content="" key="ogsitename" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:locale" content="de_DE" key="oglocale" />
        <meta
          property="og:title"
          content={data.meta_title + " | "}
          key="ogtitle"
        />
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
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.getByUID("page", "startseite", {
    fetchLinks: "page.title",
  });

  return {
    props: { data },
    revalidate: 2,
  };
}
