import SliceFrame from "@/layouts/slice";
import Title from "@/components/title";

export default function Headline({ slice }) {
  return (
    <SliceFrame vertical="none">
      <p className="uppercase tracking-wider text-sm py-10 text-gray-600">
        {slice.primary.headline_section}
      </p>
      <div className="text-4xl font-extrabold">
        <Title text={slice.primary.headline_title} />
      </div>
      <div className="text-4xl font-extrabold text-blue-600">
        <Title text={slice.primary.headline_subtitle} />
      </div>
    </SliceFrame>
  );
}
