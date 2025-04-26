
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-bobby-background">
      <HeroSection />
      <VideosSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default Index;
