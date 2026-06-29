import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import NewArrivals from "@/components/NewArrivals";
import TrendingBanner from "@/components/TrendingBanner";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <NewArrivals />
        <TrendingBanner />
        <Testimonials />
        <InstagramGallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
