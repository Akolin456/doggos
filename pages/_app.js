import "@/styles/globals.css";
import { LandingPageContextProvider } from "@/contexts/LandingPageContext";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Segoe UI"
></link>;

export default function App({ Component, pageProps }) {
  return (
    <LandingPageContextProvider>
      <Component {...pageProps} />
    </LandingPageContextProvider>
  );
}
