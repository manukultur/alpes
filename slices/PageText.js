import RichText from "@/components/richtext";
import SliceFrame from "@/layouts/slice";
import Title from "@/components/title";

export default function Text({ slice }) {
  return (
    <SliceFrame vertical="none">
      <div className="sm:flex">
        <div className="sm:w-1/3"></div>
        <div className="sm:-ml-6">
          <div className="uppercase tracking-wider font-bold pb-8">
            <Title text={slice.primary.text_title} />
          </div>
          <RichText text={slice.primary.text_body} />
        </div>
      </div>
    </SliceFrame>
  );
}
