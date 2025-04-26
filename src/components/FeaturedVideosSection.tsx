import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedVideosSection = () => {
  const featuredVideos = [
    {
      id: "1",
      embedUrl: "https://www.youtube.com/embed/n6DKtSM7BE4",
      title: "BOBBYZERAAAAAAAAAAAAA | #bobbyzera em #Twitch",
      description: "Momentos engraçados da stream do Bobbyzera na Twitch",
      thumbnailUrl: "/images/bobbyzera_youtube_thumbnail.png"
    },
    {
      id: "2",
      embedUrl: "https://www.youtube.com/embed/n6DKtSM7BE4?start=30",
      title: "A LISTA DOS PIORES INFLUENCIADORES PRA SE TRABALHAR",
      description: "Bobbyzera comenta sobre influenciadores e o mercado de trabalho",
      thumbnailUrl: "/images/bobbyzera_youtube_thumbnail.png"
    },
    {
      id: "3",
      embedUrl: "https://www.youtube.com/embed/n6DKtSM7BE4?start=60",
      title: "VALE A PENA FAZER LIVES EM 2025?",
      description: "Bobbyzera analisa o mercado de streaming em 2025",
      thumbnailUrl: "/images/bobbyzera_youtube_thumbnail.png"
    },
  ];

  return (
    <section className="py-16 bg-bobby-background">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white">
            Vídeos em Destaque
          </h2>
          <Button variant="outline" className="bg-bobby-dark/50 hover:bg-bobby-purple/20 border-bobby-purple/50">
            <a 
              href="https://www.youtube.com/@bobbyzeraa/videos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Ver Mais <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <Card key={video.id} className="bg-bobby-dark border-bobby-purple/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                  <iframe
                    src={video.embedUrl}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    title={video.title}
                    poster={video.thumbnailUrl}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white line-clamp-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideosSection;
