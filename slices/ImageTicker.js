import SliceFrame from "@/layouts/slice";
import Image from "next/image";
import Marquee from "@/components/marquee";
import PageVisibility from "react-page-visibility";
import { useState } from "react";
export default function ImageTicker({ slice }) {
  const [pageIsVisible, setPageIsVisible] = useState(true);
  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };

  return (
    <SliceFrame width="full" vertical="none">
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Marquee speed={20}>
            <div className="flex items-end">
              {slice.items.map((item, index) => (
                <Image
                  key={index}
                  src={item.image.url}
                  alt={item.image.alt}
                  width={item.image.dimensions.width}
                  height={item.image.dimensions.height}
                />
              ))}
            </div>
          </Marquee>
        )}
      </PageVisibility>
    </SliceFrame>
  );
}
