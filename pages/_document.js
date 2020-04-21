import Document, { Main, Head, NextScript } from "next/document";
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
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
