import Layout from "../components/styles/Layout";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
