import SliceFrame from "@/layouts/slice";
import Image from "next/image";
import Title from "@/components/title";
import RichText from "@/components/richtext";

export default function SplitPage({ slice }) {
  return (
    <SliceFrame vertical="none">
      <div className="md:flex">
        <div className="px-10 md:w-1/2 lg:w-1/3">
          <p className="py-10 text-sm tracking-wider text-gray-600 uppercase">
            {slice.primary.split_section}
          </p>
          <div className="text-4xl font-extrabold">
            <Title text={slice.primary.split_title} />
          </div>
          <div className="mt-4 text-4xl font-extrabold text-blue-600">
            <Title text={slice.primary.split_subtitle} />
          </div>
          <div className="py-10">
            <RichText text={slice.primary.split_body} />
          </div>
        </div>
        <div className="relative w-full h-96 sm:h-screen md:w-1/2 lg:w-2/3">
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
