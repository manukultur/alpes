import React from "react";
import dynamic from "next/dynamic";

const Text = dynamic(import("slices/text"));

function Slices(props) {
  return props.data.body.map(function (slice, index) {
    switch (slice.slice_type) {
      case "text":
        return <Text key={index} slice={slice} />;
    }
  });
}

export default Slices;
