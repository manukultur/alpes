import Richtext from "@/components/richtext";
import Image from "next/image";
const features = [
  {
    name: "Sleek design",
    description:
      "The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.",
  },
  {
    name: "Comfort handle",
    description: "Shaped for steady pours and insulated to prevent burns.",
  },
  {
    name: "One-button control",
    description:
      "The one button control has a digital readout for setting temperature and turning the kettle on and off.",
  },
  {
    name: "Long spout",
    description:
      "Designed specifically for controlled pour-overs that don't slash or sputter.",
  },
];

export default function SplitWithImages({ slice }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-24 mx-auto sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div className="pb-10 border-b border-gray-200">
              <h2 className="font-medium text-gray-500">
                {slice.primary.split_subtitle}
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {slice.primary.split_title}
              </p>
            </div>
            <div className="mt-10">
              <Richtext text={slice.primary.split_body} />
            </div>
          </div>

          <div>
            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
              {slice.items[0] && (
                <Image
                  src={slice.items[0].split_image?.url}
                  alt={slice.items[0].split_image?.alt}
                  layout="fill"
                  className="object-cover object-center w-full h-full"
                />
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                {slice.items[1] && (
                  <Image
                    src={slice.items[1].split_image?.url}
                    alt={slice.items[1].split_image?.alt}
                    layout="fill"
                    className="object-cover object-center w-full h-full"
                  />
                )}
              </div>
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                {slice.items[2] && (
                  <Image
                    src={slice.items[2].split_image?.url}
                    alt={slice.items[2].split_image?.alt}
                    layout="fill"
                    className="object-cover object-center w-full h-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
