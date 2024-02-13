import "@/styles/globals.css";
import { LandingPageContextProvider } from "@/contexts/LandingPageContext";

export default function App({ Component, pageProps }) {
  return (
    <LandingPageContextProvider>
      <Component {...pageProps} />
    </LandingPageContextProvider>
  );
}
