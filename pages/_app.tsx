import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
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
console.log(somar);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${somar.variable} font-sans bg-neutral-900`}>
      <Component {...pageProps} />
    </main>
  );
}
