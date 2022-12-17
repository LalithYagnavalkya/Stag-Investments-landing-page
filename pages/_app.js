import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isPricingPageOpen, togglePricingPage] = useState(false);

  return (
    <Layout
      togglePricingPage={togglePricingPage}
      isPricingPageOpen={isPricingPageOpen}
    >
      <Component
        {...pageProps}
        togglePricingPage={togglePricingPage}
        isPricingPageOpen={isPricingPageOpen}
      />
    </Layout>
  );
}

export default MyApp;
