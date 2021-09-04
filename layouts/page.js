import { createContext, useContext } from "react";
import Navigation from "./nav";
import Footer from "./footer";
import Alert from "./alert";

const PageContext = createContext();

export function PageLayout({ children, ...pageProps }) {
  return (
    <PageContext.Provider value={{ pageProps: pageProps }}>
      <div className="relative min-h-screen pt-6 antialiased bg-white md:mt-0">
        <Navigation />
        {children}
        <Footer />
        <Alert />
      </div>
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext);
}
