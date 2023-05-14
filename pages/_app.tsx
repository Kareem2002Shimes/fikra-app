import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import ToasterProvider from "@/providers/ToasterProvider";
import { Provider } from "react-redux";
import { store } from "@/redux/app/store";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
const somar = localFont({
  src: [
    {
      path: "../public/fonts/somar/SomarSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/somar/SomarSans-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/somar/SomarSans-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/somar/SomarSans-ExtraBold.woff2",
      weight: "900",
    },
  ],
  variable: "--font-somar",
});

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { locale } = useRouter();
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ToasterProvider />
        <main
          style={{
            direction: locale === "ar" ? "rtl" : "ltr",
          }}
          className={`${somar.variable} font-sans bg-neutral-900`}
        >
          <Component {...pageProps} />
        </main>
      </Provider>
    </SessionProvider>
  );
}
export default appWithTranslation(App);
