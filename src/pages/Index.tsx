
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import ShortsSection from "@/components/ShortsSection";
import FeaturedVideosSection from "@/components/FeaturedVideosSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-bobby-background">
      <HeroSection />
      <FeaturedVideosSection />
      <VideosSection />
      <ShortsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default Index;
