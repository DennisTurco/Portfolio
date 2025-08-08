import { GeistSans } from "geist/font/sans";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "/styles/global.scss";

export const metadata = {
  title: "Dennis Turco | Backend Developer & Insegnante",
  description:
    "Scopri il portfolio di Dennis Turco, sviluppatore backend esperto in Java e C#, e insegnante di programmazione.",
  keywords:
    "Dennis Turco, sviluppatore backend, Java, C#, insegnante di programmazione, software engineer, coding, sviluppo software",
  authors: [{ name: "Dennis Turco" }],
  openGraph: {
    title: "Dennis Turco | Backend Developer & Insegnante",
    description:
      "Scopri il portfolio di Dennis Turco, sviluppatore backend esperto in Java e C#, e insegnante di programmazione.",
    images: [{ url: "https://dennisturco.com/images/photo.webp" }],
    url: "https://dennisturco.com",
    type: "website",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dennis Turco",
  url: "https://dennisturco.com",
  logo: "https://dennisturco.com/images/logo.webp",
  image: "https://dennisturco.com/images/photo.webp",
  description:
    "Sviluppatore backend esperto in Java e C#, con esperienza nell'insegnamento della programmazione.",
  telephone: "+39 342 166 6192",
  sameAs: [
    "https://www.instagram.com/dennis_turco/",
    "https://discordapp.com/invite/kbZVz3m",
    "https://www.linkedin.com/in/dennis-turco-751239232/",
    "https://github.com/DennisTurco",
  ],
};


export async function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Google Analytics */}
        <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Google Fonts Icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        {/* Google Translate */}
        <Script
          id="google-translate"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  { pageLanguage: '${lang}', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
                  'google_translate_element'
                );
              }
            `,
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body className={GeistSans.className} suppressHydrationWarning={true}>
        {children}

        {/* Buy Me a Coffee (disabilitato) */}
        {/* <div id="buy-me-coffee-container">
          <script data-name="BMC-Widget" data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="denno"
            data-description="Support me on Buy me a coffee!" data-message="Buy me a coffè" data-color="#FF813F"
            data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        </div> */}

        {/* Vercel Analytics */}
        {/* <Analytics /> */}

        {/* Vercel Speed Insights */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}

