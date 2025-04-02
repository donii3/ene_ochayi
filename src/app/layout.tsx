import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import "@/app/globals.css";

import Header from "@/app/components/layouts/header";
import Footer from "@/app/components/layouts/footer";

export const metadata: Metadata = {
  title: "Ene Ochayi - Portfolio-Photography",
  description: "A photography portfolio website",
  icons: {
    icon: "/img/favicon.png", // Favicon
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* External Fonts & Icons */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/img/favicon.png" sizes="50x50" />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
      </Head>

      <body suppressHydrationWarning>
        <Header />
        <main id="bringer-main">
          {children}
          <Footer />
        </main>

        {/* Dynamic Backlight */}
        <div className="bringer-backlight"></div>

        {/* JavaScript Files */}
        <Script src="/js/lib/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/st-core.js" strategy="beforeInteractive" />
        <Script src="/js/lib/libs.js" strategy="lazyOnload" />
        <Script src="/js/contact_form.js" strategy="lazyOnload" />
        <Script src="/js/classes.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
