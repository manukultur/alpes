import { RichText } from "prismic-reactjs";
import Richtext from "@/components/richtext";
import { DownloadIcon } from "@heroicons/react/solid";

/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
  },
  { name: "Dimensions", description: '15" x 3.75" x .75"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  {
    name: "Includes",
    description:
      "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
  },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function Example({ slice }) {
  console.log(slice);
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src={slice.primary.downloads_image.url}
          alt=""
          className="object-cover object-center w-full h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative px-4 pb-16 mx-auto -mt-12 max-w-7xl sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {RichText.asText(slice.primary.downloads_title)}
          </h2>
          <Richtext
            classes="mx-auto mt-4 text-gray-500"
            text={slice.primary.downloads_description}
          />
        </div>

        <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {slice.items.map((item, index) => (
            <div key={index} className="pt-4 border-t border-gray-200">
              <dt className="font-medium text-gray-900">
                {item.download_headline}
              </dt>
              <dd className="mt-2 text-sm text-gray-500">
                <Richtext text={item.download_description} />
                <div className="flex items-center mt-4 ">
                  <a
                    href={item.download_media.url}
                    download={item.download_media.name}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-500 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <DownloadIcon
                      className="w-5 h-5 mr-2 -ml-1"
                      aria-hidden="true"
                    />
                    Herunterladen
                  </a>
                  <div className="ml-4 text-gray-400">{item.download_size}</div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
