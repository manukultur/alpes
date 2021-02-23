import "../styles/globals.css";
import { PageLayout } from "@/layouts/page";

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout {...pageProps}>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
