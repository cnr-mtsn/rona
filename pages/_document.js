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
        <Head>
          <title>Covid-19 Stats</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
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
