import React, { useState } from "react";
import { Document, Outline, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import samplePDF from "./2.pdf";

export default function Test() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onItemClick({ pageNumber: itemPageNumber }) {
    setNumPages(itemPageNumber);
  }

  return (
    <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
      <Outline onItemClick={onItemClick} />
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          renderMode={"canvas"}
          renderAnnotationLayer={true}
          renderForms={true}
          renderTextLayer={true}
          pageNumber={index + 1}
        />
      ))}
    </Document>
  );
}
