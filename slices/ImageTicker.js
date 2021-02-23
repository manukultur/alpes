import SliceFrame from "@/layouts/slice";
import Image from "next/image";
import Marquee from "@/components/marquee";

export default function ImageTicker({ slice }) {
  return (
    <SliceFrame width="full" vertical="none">
      <div className="">
        <Marquee speed={20}>
          {() => (
            <div className="flex items-end">
              {slice.items.map((item, index) => (
                <div key={index} className="">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </div>
              ))}
            </div>
          )}
        </Marquee>
      </div>
    </SliceFrame>
  );
}
