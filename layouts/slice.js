export default function SliceFrame({
  children,
  width,
  background,
  vertical,
  border,
  font,
}) {
  return (
    <div
      className={`font-display ${
        /* width: full / xl || default */
        {
          xl: "mx-auto max-w-screen-2xl px-6",
          full: "w-full",
          medium: "max-w-screen-lg mx-auto px-6",
          prose: "max-w-prose mx-auto px-6",
        }[width] || "max-w-screen-xl mx-auto px-4 sm:px-6"
      } ${
        /* font: sans || default */
        {
          sans: "font-sans",
        }[font] || "font-display"
      } ${
        /* vertical: none / extended || default */
        {
          none: "py-0",
          subtle: "py-6 lg:py-10",
          extended: "py-20 lg:py-40",
        }[vertical] || "py-10 lg:py-20"
      } ${
        /* background: gray || default */
        {
          gray: "bg-gray-50",
        }[background] || ""
      } ${
        /* border: top / bottom / both || default */
        {
          top: "border-t border-gray-200",
          bottom: "border-b border-gray-200",
          both: "border-t border-b border-gray-200",
        }[border] || ""
      }`}
    >
      {children}
    </div>
  );
}
