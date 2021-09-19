import SliceFrame from "@/layouts/slice";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function ImageTicker({ slice }) {
  return (
    <SliceFrame width="full" vertical="none">
      <Marquee speed={160} gradientWidth={20}>
        {slice.items.map((item, index) => (
          <div key={index} className="flex flex-col justify-end h-full w-96">
            <Image
              key={index}
              src={item.image.url}
              alt={item.image.alt}
              width={item.image.dimensions.width}
              height={item.image.dimensions.height}
              priority
            />
          </div>
        ))}
      </Marquee>
    </SliceFrame>
  );
}
