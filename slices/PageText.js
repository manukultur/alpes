import RichText from "@/components/richtext";
import SliceFrame from "@/layouts/slice";
import Title from "@/components/title";

export default function Text({ slice }) {
  return (
    <SliceFrame vertical={slice.primary.vertical_padding}>
      <div className="pb-20 sm:flex">
        <div className="sm:w-1/3"></div>
        <div className="sm:-ml-6">
          <div className="pb-8 font-bold tracking-wider uppercase">
            <Title text={slice.primary.text_title} />
          </div>
          <RichText text={slice.primary.text_body} />
        </div>
      </div>
    </SliceFrame>
  );
}
