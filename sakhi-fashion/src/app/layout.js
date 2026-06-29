import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ShopProvider } from "@/context/CartContext";
import Toast from "@/components/Toast";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sakhifashion.example.com"),
  title: {
    default: "Sakhi Fashion — Premium Women's Fashion Boutique",
    template: "%s | Sakhi Fashion",
  },
  description:
    "Sakhi Fashion is a premium women's boutique offering sarees, kurtis, western, party, bridal and ethnic wear. Elegance in every thread.",
  keywords: [
    "Sakhi Fashion",
    "women's fashion",
    "sarees",
    "bridal wear",
    "ethnic wear",
    "boutique",
    "luxury fashion",
  ],
  authors: [{ name: "Sakhi Fashion" }],
  openGraph: {
    title: "Sakhi Fashion — Elegance in Every Thread",
    description:
      "Discover your perfect style with our curated premium collections.",
    type: "website",
    locale: "en_IN",
    siteName: "Sakhi Fashion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakhi Fashion",
    description: "Premium women's fashion boutique.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#1a1413",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <ThemeProvider>
          <ShopProvider>
            {children}
            <Toast />
          </ShopProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
