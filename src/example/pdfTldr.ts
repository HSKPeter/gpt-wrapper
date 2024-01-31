import { PdfReader } from "@src/agent";

export default async function pdfTldr() {
    const pdfFilePath = "assets/AAPL_FY23_Q1_Consolidated_Financial_Statements.pdf";
    const pdfReader = new PdfReader(pdfFilePath);

    const question = "What is the total net sales for the quarter in 2022?";
    const answer = await pdfReader.answerQuestion("What is the total net sales for the quarter in 2022?");

    console.log("Question:", question);
    console.log("Answer:", answer);
    // Example of answer:
    // The total net sales for the quarter ending on December 31, 2022, were $117,154 million.
}