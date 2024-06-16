import * as PDFJS from "pdfjs-dist/build/pdf.min.mjs";

async function generateTextFromPdf(path,pageNumber) {
  const doc = await PDFJS.getDocument(path).promise;
  const page1 = await doc.getPage(pageNumber);
  const content = await page1.getTextContent();
  return content;
}

export default generateTextFromPdf;


// exportconst uploadF