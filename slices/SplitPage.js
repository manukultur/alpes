import Image from "next/image";
import Title from "@/components/title";
import RichText from "@/components/richtext";

export default function SplitPageExample({ slice }) {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="overflow-hidden aspect-w-3 aspect-h-2 sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <Image
            src={slice.primary.split_image.url}
            layout="responsive"
            alt={slice.primary.split_image.alt}
            height={slice.primary.split_image.dimensions.height}
            width={slice.primary.split_image.dimensions.width}
            className="object-cover object-center w-full h-full lg:h-full lg:w-full"
          />
        </div>

        <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
              {slice.primary.split_section}
            </h2>
            <div className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
              <Title text={slice.primary.split_title} />
            </div>
            <div className="mt-4 text-gray-500">
              <RichText text={slice.primary.split_body} />
            </div>

            <dl className="grid grid-cols-1 mt-10 text-sm gap-y-10 gap-x-8 sm:grid-cols-2">
              {slice.items.map((item) => (
                <div key={item.feature_name}>
                  <dt className="font-medium text-gray-900">
                    {item.feature_name}
                  </dt>
                  <dd className="mt-2 text-gray-500">
                    <div>
                      <RichText text={item.feature_description} />
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
