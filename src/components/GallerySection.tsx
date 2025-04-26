
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
      url: "https://static-cdn.jtvnw.net/jtv_user_pictures/5370f5c8-002c-4d8a-a9f2-4a790eccbbd9-profile_banner-480.png",
      alt: "Bobbyzera Twitch Banner",
    },
    {
      id: "2",
      url: "https://static-cdn.jtvnw.net/jtv_user_pictures/2e06e058-d1c1-4efe-adea-3fa7080e3058-profile_image-300x300.png",
      alt: "Bobbyzera Twitch Profile",
    },
    {
      id: "3",
      url: "https://pbs.twimg.com/profile_banners/4165578693/1608165604/1500x500",
      alt: "Bobbyzera Twitter Banner",
    },
    {
      id: "4",
      url: "https://scontent.fcgh19-1.fna.fbcdn.net/v/t39.30808-6/305293629_5469837149790934_8106361247937375336_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dS5ne4bh-BAAX8q0BN6&_nc_ht=scontent.fcgh19-1.fna&oh=00_AfDBcyWjLUmTxovSfaQsV8_4Qdl5tVPCYqgCiAgRntkLOg&oe=662386CF",
      alt: "Bobbyzera Facebook Image",
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
          <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden aspect-video">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="w-full h-full object-cover"
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
                            className="object-cover w-full h-full hover:scale-110 transition-transform"
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
