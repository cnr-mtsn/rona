import Document, { Head, Main, NextScript } from "next/document";
import { FaFileExcel } from "react-icons/fa";

export default class MyDocument extends Document {
  render() {
    return (
      <html
        style={{
          fontFamily: "monospace",
        }}
      >
        <Head />
        <body
          style={{
            background: "#f2f2f2",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
