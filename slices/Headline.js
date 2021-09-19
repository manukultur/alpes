import SliceFrame from "@/layouts/slice";
import Title from "@/components/title";

export default function Headline({ slice }) {
  return (
    <SliceFrame vertical="none">
      <div
        className={`${
          slice.primary.headline_position == "center" && "text-center"
        }`}
      >
        <p className="py-10 text-sm tracking-wider text-gray-600 uppercase">
          {slice.primary.headline_section}
        </p>
        <div className="text-4xl font-extrabold">
          <Title text={slice.primary.headline_title} />
        </div>
        <div className="text-4xl font-extrabold text-blue-600">
          <Title text={slice.primary.headline_subtitle} />
        </div>
      </div>
    </SliceFrame>
  );
}
