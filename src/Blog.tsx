import { PrismicRichText, useFirstPrismicDocument } from "@prismicio/react";

export default function Blog() {
  const [document] = useFirstPrismicDocument();

  return (
    <div>
      {document && <PrismicRichText field={document.data.example_rich_text} />}
    </div>
  );
}
