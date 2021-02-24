import SliceFrame from "@/layouts/slice";
import Image from "next/image";

export default function ImageGrid({ slice }) {
  const ItemImage = ({ image }) => {
    return image ? (
      <Image
        src={image.url}
        alt={image.alt}
        layout="fill"
        className="object-cover"
      />
    ) : null;
  };

  return (
    <SliceFrame>
      <div className="space-y-4">
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-end">
          <div className="h-64 sm:w-2/5 relative">
            <ItemImage image={slice.items[0]?.image} />
          </div>
          <div className="h-64 sm:w-1/3 relative">
            <ItemImage image={slice.items[1]?.image} />
          </div>
        </div>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-end">
          <div className="h-64 sm:w-1/3 relative">
            <ItemImage image={slice.items[2]?.image} />
          </div>
          <div className="h-72 sm:w-1/4 relative">
            <ItemImage image={slice.items[3]?.image} />
          </div>
          <div className="h-64 sm:w-2/4 relative">
            <ItemImage image={slice.items[4]?.image} />
          </div>
        </div>
      </div>
    </SliceFrame>
  );
}
