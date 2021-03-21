import { createContext, useContext } from "react";
import Navigation from "./nav";
import Footer from "./footer";

const PageContext = createContext();

export function PageLayout({ children, ...pageProps }) {
  return (
    <PageContext.Provider value={{ pageProps: pageProps }}>
      <div className="relative min-h-screen antialiased bg-white">
        {/*<Navigation />*/}
        {children}
        <Footer />
      </div>
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext);
}
