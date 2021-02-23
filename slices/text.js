import RichText from "@/components/richtext";
import SliceFrame from "@/layouts/slice";

export default function Text({ slice }) {
  console.log(slice);
  return (
    <SliceFrame>
      <RichText text={slice.primary.text_body} />
    </SliceFrame>
  );
}
