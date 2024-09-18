import "./globals.css";
import "./style/landing.css";
import "./style/media.css";
import "./style/sliders.css";
import "./style/service-single-page.css";
import "./style/about.css";
import "./style/weblog.css";
import "./style/video.css";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
// import { Inter } from 'next/font/google'
// require("dotenv").config();
import { Metadata } from "next";
import { usePathname } from 'next/navigation';
import getCurrentPath from "../hooks/currentPath";

const baseUrl = "https://gandom.link"; // Change this to your actual domain  
const canonicalUrl = baseUrl; // Construct the full canonical URL  
export const metadata: Metadata = {
    title: "گروه مهندسین گسترش افزار گندم | Gandom Software Group | Web Development Services",
    description:
        "Gandom provides top-tier SEO software solutions and bespoke web development services tailored to elevate your digital presence and drive business success.",
    keywords: "SEO, web development, Gandom, digital marketing, SEO tools, website services, online branding, programming, tech solutions",
    icons: {
        icon: "/img/logo.png",
    },
    verification: {
        google: "Te99GpNYx_dMXAGjx_zT6mk9EK-OlmFAyiuV6FaGJKw"
    },
    robots: "index, follow",
    alternates: {
        canonical: `${canonicalUrl}`,
    },
    openGraph: {
        type: "website",
        title: "Gandom Pioneers in SEO Software and Web Development Services",
        description: "Discover Gandom's premium SEO software and custom web development services to power up your online presence.",
        url: `${canonicalUrl}`,
        siteName: "Gandom",
        images: "https://gandom.link/og-image.jpg",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gandom Pioneers in SEO Software and Web Development Services",
        description: "Boost your online performance with Gandom's industry-leading SEO software and customized web development offerings.",
        images: "https://gandom.link/twitter-image.jpg",
        site: "@Gandom.link",
    },

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={"en"}>
            <body className="bg-gf" >
                {children}
            </body>
        </html>
    );
}
