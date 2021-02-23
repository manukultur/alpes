import SliceFrame from "@/layouts/slice";
import Image from "next/image";
import Marquee from "@/components/marquee";

export default function ImageTicker({ slice }) {
  return (
    <SliceFrame width="full" vertical="none">
      <Marquee speed={20}>
        {slice.items.map((item, index) => (
          <Image
            key={index}
            src={item.image.url}
            alt={item.image.alt}
            width={item.image.dimensions.width}
            height={item.image.dimensions.height}
          />
        ))}
      </Marquee>
    </SliceFrame>
  );
}
