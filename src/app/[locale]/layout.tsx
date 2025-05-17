import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import Navigation from "./../_components/Navigation";
import Footer from "./../_components/Footer";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { headers } from "next/headers"; // needed import
import { notFound } from "next/navigation"; // needed import
import Header from "./../_components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Kręć z forum - wycieczki z przewodnikiem",
  description:
    "Wskocz na rower i pomagaj! Każdy pokonany na rowerze kilometr to pomoc dla Hospicjum.",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = headers(); // new lines
  const localeHeader = header.get("x-next-intl-locale"); // new lines
  if (localeHeader === null) {
    // new lines
    notFound(); // new lines
  }

  const messages = await getMessages();

  return (
    <html
      lang="pl"
      className={`scroll-smooth ${poppins.variable}`}
      suppressHydrationWarning
    >
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '340265619098937');
              fbq('track', 'PageView');
            `}
      </Script>
      <Script id="gtm" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KWMWXVLZ');
      `}
      </Script>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#019682"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#019682" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#019682" />
      </head>
      <body className=/*bg-green*/"bg-white ">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWMWXVLZ" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=340265619098937&ev=PageView&noscript=1"
          />`,
          }}
        />
       
        <NextIntlClientProvider messages={messages}>
        <Navigation />
        <Header />
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
