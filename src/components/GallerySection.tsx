
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

const GallerySection = () => {
  const images = [
    {
      id: "1",
      url: "/images/bobbyzera_banner.jpeg",
      alt: "Bobbyzera Banner",
    },
    {
      id: "2",
      url: "/images/bobbyzera_profile.jpeg",
      alt: "Bobbyzera Profile",
    },
    {
      id: "3",
      url: "https://static-cdn.jtvnw.net/jtv_user_pictures/bobbyzera-profile_banner-f4f4f4f4f4f4-480.png",
      alt: "Bobbyzera Twitch Banner",
    },
    {
      id: "4",
      url: "https://static-cdn.jtvnw.net/jtv_user_pictures/bobbyzera-profile_image-f4f4f4f4f4f4-300x300.png",
      alt: "Bobbyzera Twitch Profile",
    }
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="py-16 bg-gradient-to-b from-bobby-background to-bobby-dark">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Gallery
        </h2>

        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="w-full max-w-3xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image) => (
                  <CarouselItem key={image.id} className="md:basis-1/3 lg:basis-1/4">
                    <Card className={`cursor-pointer border-2 ${selectedImage.id === image.id ? 'border-bobby-purple' : 'border-transparent'}`}>
                      <CardContent className="p-2" onClick={() => setSelectedImage(image)}>
                        <div className="aspect-square relative overflow-hidden rounded-md">
                          <img 
                            src={image.url} 
                            alt={image.alt} 
                            className="object-contain w-full h-full hover:scale-110 transition-transform"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
