import { RichText } from "prismic-reactjs";
import { htmlSerializer } from "prismic.config";

export default function Title({ text }) {
  return <RichText render={text} htmlSerializer={htmlSerializer} />;
}
