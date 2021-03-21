import React from "react";
import dynamic from "next/dynamic";

const Text = dynamic(import("@/slices/PageText"));
const Headline = dynamic(import("@/slices/Headline"));
const ImageMarquee = dynamic(import("@/slices/ImageMarquee"));
const ImageGrid = dynamic(import("@/slices/ImageGrid"));
const SplitPage = dynamic(import("@/slices/SplitPage"));

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
    }
  });
}

export default Slices;
