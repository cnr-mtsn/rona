import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html
        style={{
          fontFamily: "monospace",
        }}
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
