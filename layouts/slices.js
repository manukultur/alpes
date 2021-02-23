import React from "react";
import dynamic from "next/dynamic";

const Text = dynamic(import("slices/text"));
const Headline = dynamic(import("@/slices/Headline"));
const ImageTicker = dynamic(import("@/slices/ImageTicker"));

function Slices(props) {
  return props.data.body.map(function (slice, index) {
    switch (slice.slice_type) {
      case "text":
        return <Text key={index} slice={slice} />;
      case "headline":
        return <Headline key={index} slice={slice} />;
      case "image_ticker":
        return <ImageTicker key={index} slice={slice} />;
    }
  });
}

export default Slices;
