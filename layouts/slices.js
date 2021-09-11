import React from "react";
import dynamic from "next/dynamic";

const Text = dynamic(import("@/slices/PageText"));
const Headline = dynamic(import("@/slices/Headline"));
const ImageMarquee = dynamic(import("@/slices/ImageMarquee"));
const ImageGrid = dynamic(import("@/slices/ImageGrid"));
const SplitPage = dynamic(import("@/slices/SplitPage"));
const FullWidthBackgroundImage = dynamic(
  import("@/slices/FullWidthBackgroundImage")
);
const DownloadsWithImage = dynamic(import("@/slices/DownloadsWithImage"));
const Newsletter = dynamic(import("@/slices/Newsletter"));
const SplitWithImages = dynamic(import("@/slices/SplitWithImages"));

function Slices(props) {
  return props.data.body.map(function (slice, index) {
    switch (slice.slice_type) {
      case "text":
        return <Text key={index} slice={slice} />;
      case "headline":
        return <Headline key={index} slice={slice} />;
      case "image_ticker":
        return <ImageMarquee key={index} slice={slice} />;
      case "image_grid":
        return <ImageGrid key={index} slice={slice} />;
      case "split_page":
        return <SplitPage key={index} slice={slice} />;
      case "full_width_background_image":
        return <FullWidthBackgroundImage key={index} slice={slice} />;
      case "downloads_with_image":
        return <DownloadsWithImage key={index} slice={slice} />;
      case "newsletter":
        return <Newsletter key={index} slice={slice} />;
      case "split_with_images":
        return <SplitWithImages key={index} slice={slice} />;
    }
  });
}

export default Slices;
