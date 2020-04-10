import Document, { Main, Head, NextScript } from "next/document";
import * as Sentry from "@sentry/browser";
export default class MyDocument extends Document {

  Sentry.init({
    dsn: "https://1a4a73183c074913b747d08bae6fe5ef@o376182.ingest.sentry.io/5196678"
  });

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
