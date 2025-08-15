import { GeistSans } from "geist/font/sans";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "/styles/global.scss";

const metadataByLang = {
  it: {
    title: "Dennis Turco | Sviluppatore Backend & Insegnante",
    description:
      "Scopri il portfolio di Dennis Turco, sviluppatore backend esperto in Java e C#, e insegnante di programmazione.",
    keywords:
      "Dennis Turco, sviluppatore backend, Java, C#, insegnante di programmazione, software engineer, coding, sviluppo software",
  },
  en: {
    title: "Dennis Turco | Backend Developer & Teacher",
    description:
      "Discover the portfolio of Dennis Turco, an experienced backend developer in Java and C#, and programming teacher.",
    keywords:
      "Dennis Turco, backend developer, Java, C#, programming teacher, software engineer, coding, software development",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

const personSchema = {
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dennis Turco Portfolio",
  url: "https://dennisturco.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://dennisturco.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
  const meta = metadataByLang[lang as keyof typeof metadataByLang] || metadataByLang.it;

  return (
    <html lang={lang}>
      <head>
        {/* Base Meta */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content="Dennis Turco" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* hreflang per SEO multilingua */}
        <link rel="alternate" href="https://dennisturco.com/it" hrefLang="it" />
        <link rel="alternate" href="https://dennisturco.com/en" hrefLang="en" />
        <link
          rel="alternate"
          href="https://dennisturco.com"
          hrefLang="x-default"
        />

        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content="https://dennisturco.com/images/photo.webp"
        />
        <meta property="og:url" content="https://dennisturco.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content="https://dennisturco.com/images/photo.webp"
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
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

