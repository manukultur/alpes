import SliceFrame from "@/layouts/slice";
import Image from "next/image";
import Title from "@/components/title";
import RichText from "@/components/richtext";

export default function SplitPage({ slice }) {
  return (
    <SliceFrame vertical="none" width="full">
      <div className="md:flex">
        <div className="md:w-1/2 lg:w-1/3 px-10">
          <p className="uppercase tracking-wider text-sm py-10 text-gray-600">
            {slice.primary.split_section}
          </p>
          <div className="text-4xl font-extrabold">
            <Title text={slice.primary.split_title} />
          </div>
          <div className="text-4xl font-extrabold text-blue-600 mt-4">
            <Title text={slice.primary.split_subtitle} />
          </div>
          <div className="py-10">
            <RichText text={slice.primary.split_body} />
          </div>
        </div>
        <div className="w-full -mt-14 h-96 sm:h-screen md:w-1/2 lg:w-2/3 relative">
          <Image
            src={slice.primary.split_image.url}
            alt={slice.primary.split_image.alt}
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
    </SliceFrame>
  );
}
