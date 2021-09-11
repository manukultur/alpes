import RichText from "@/components/richtext";
import Link from "next/link";

export default function Example({ slice }) {
  return (
    <div className="relative px-6 py-32 bg-gray-800 sm:py-40 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slice.primary.background_image.url}
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {slice.primary.title}
        </h2>
        <div className="mt-3 text-xl">
          <RichText
            text={slice.primary.description}
            classes="text-xl text-white"
          />
        </div>
        {slice.primary.action_button_active && (
          <Link href={slice.primary.action_button.uid}>
            <a className="block w-full px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto">
              {slice.primary.action_button_label}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
