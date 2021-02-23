import { RichText } from "prismic-reactjs";
import { htmlSerializer } from "../prismic.config";

function RichTextContent({ text, classes }) {
  return (
    <div className={`prose ${classes}`}>
      <RichText render={text} htmlSerializer={htmlSerializer} />
    </div>
  );
}

export default RichTextContent;
