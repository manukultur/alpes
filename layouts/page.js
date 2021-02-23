import { createContext, useContext } from "react";
const PageContext = createContext();

export function PageLayout({ children, ...pageProps }) {
  return (
    <PageContext.Provider value={{ pageProps: pageProps }}>
      <div className="relative min-h-screen antialiased bg-white print:pl-8 print:pr-2">
        {children}
      </div>
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext);
}
