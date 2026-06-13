import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://vsarora.vercel.app"),
  title: {
    default: "V.S. Arora & Co. | IP Attorneys & Advocates, Kolkata",
    template: "%s | V.S. Arora & Co.",
  },
  description:
    "V.S. Arora & Co. — Kolkata's trusted IP attorneys, trademark agents and corporate law firm. PAN India filing, Madrid Protocol, 15+ years experience. Free first consultation.",
  keywords: [
    "trademark registration Kolkata",
    "trademark attorney Kolkata",
    "IP attorney Kolkata",
    "patent filing India",
    "patent attorney Kolkata",
    "copyright registration India",
    "IP law firm Kolkata",
    "IP law firm West Bengal",
    "intellectual property lawyer India",
    "VS Arora advocates",
    "trademark registration India",
    "Madrid Protocol India",
    "SAARC trademark filing",
    "free trademark consultation India",
    "trademark lawyer India",
    "IP litigation Kolkata",
    "business law Kolkata",
    "company registration Kolkata",
  ],
  authors: [{ name: "V.S. Arora & Co.", url: "https://vsarora.com" }],
  creator: "V.S. Arora & Co.",
  publisher: "V.S. Arora & Co.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vsarora.com",
    siteName: "V.S. Arora & Co.",
    title: "V.S. Arora & Co. | IP Attorneys & Advocates, Kolkata",
    description:
      "Kolkata's trusted IP attorneys for trademark, patent, copyright registration and corporate law. Free first consultation. PAN India filing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "V.S. Arora & Co. | IP Attorneys & Advocates, Kolkata",
    description:
      "Kolkata's trusted IP attorneys for trademark, patent, copyright registration and corporate law. Free first consultation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Legal Services",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": "https://vsarora.com/#organization",
      name: "V.S. Arora & Co.",
      alternateName: ["VS Arora & Co.", "VS Arora and Company", "Arora Advocates"],
      description:
        "Full-service intellectual property and corporate law firm based in Kolkata, serving businesses across India and the SAARC region since 2009. Specialising in trademark registration, patent filing, copyright, IP litigation and business law.",
      url: "https://vsarora.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vsarora.com/logo.png",
        width: 400,
        height: 100,
      },
      image: "https://vsarora.com/og-image.jpg",
      telephone: "+91-91236-50220",
      email: "trademarks@vsarora.com",
      foundingDate: "2009",
      address: {
        "@type": "PostalAddress",
        streetAddress: "43/C Sri Gopal Mullick Lane",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700012",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.5459",
        longitude: "88.3463",
      },
      hasMap: "https://maps.google.com/?q=43+Sri+Gopal+Mullick+Lane+Kolkata+700012",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Place", name: "SAARC Region" },
        { "@type": "Place", name: "International (Madrid Protocol)" },
      ],
      knowsAbout: [
        "Trademark Registration India",
        "Patent Filing India",
        "Copyright Registration",
        "IP Litigation",
        "Business Law India",
        "Industrial Design Registration",
        "Geographical Indications",
        "Madrid Protocol International Filing",
        "IP Infringement",
        "Company Incorporation India",
        "MSME Registration",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Intellectual Property & Legal Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Trademark Registration",
              description:
                "Trademark search, application filing for Classes 1-45, examination response, opposition proceedings and international filing via Madrid Protocol.",
              url: "https://vsarora.com/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Patent Filing",
              description:
                "Patent drafting and filing, prior art search, examination response, PCT international filing, patent opposition, licensing and assignment.",
              url: "https://vsarora.com/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Copyright Registration",
              description:
                "Copyright registration for creative works, software and artistic content, infringement notices and DMCA enforcement.",
              url: "https://vsarora.com/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IP Litigation",
              description:
                "IP infringement disputes from district courts to High Courts and the Supreme Court of India.",
              url: "https://vsarora.com/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Law & Company Formation",
              description:
                "Company incorporation, MSME registration, startup legal pack, franchise agreements, ISO compliance and contract drafting.",
              url: "https://vsarora.com/services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Design & GI Registration",
              description:
                "Industrial design registration and Geographical Indication applications for unique products and regional specialities.",
              url: "https://vsarora.com/services",
            },
          },
        ],
      },
      employee: [
        {
          "@type": "Person",
          "@id": "https://vsarora.com/#shalini-arora",
          name: "Adv. Shalini Arora",
          givenName: "Shalini",
          familyName: "Arora",
          honorificPrefix: "Adv.",
          jobTitle: "Founder & Director",
          description:
            "B.A.LL.B — Intellectual Property Law Specialist with 15+ years of experience in trademark, patent and copyright law.",
          image: "https://vsarora.com/shalini-arora.png",
          knowsAbout: [
            "Trademark Registration",
            "Patent Law",
            "Copyright Law",
            "Intellectual Property Law India",
            "IP Protection",
          ],
          url: "https://vsarora.com/about",
        },
        {
          "@type": "Person",
          "@id": "https://vsarora.com/#vimesh-arora",
          name: "Adv. Vimesh Arora",
          givenName: "Vimesh",
          familyName: "Arora",
          honorificPrefix: "Adv.",
          jobTitle: "Co-Founder & Managing Partner",
          description:
            "LL.B — Corporate & Litigation Specialist with expertise in IP litigation, business law and High Court appearances.",
          image: "https://vsarora.com/vimesh-arora.jpg",
          knowsAbout: [
            "IP Litigation",
            "Business Law",
            "Corporate Law",
            "High Court Proceedings",
            "IP Infringement",
            "Startup Law",
          ],
          url: "https://vsarora.com/about",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "6",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: ["https://wa.me/919123650220"],
    },
    {
      "@type": "WebSite",
      "@id": "https://vsarora.com/#website",
      url: "https://vsarora.com",
      name: "V.S. Arora & Co.",
      description:
        "Kolkata's leading IP law firm for trademark, patent and copyright protection — PAN India filing, Madrid Protocol, free first consultation.",
      inLanguage: "en-IN",
      publisher: { "@id": "https://vsarora.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
