import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ShortsSection = () => {
  const youtubeShorts = [
    {
      id: "1",
      embedUrl: "https://www.youtube.com/embed/n6DKtSM7BE4",
      title: "BOBBYZERAAAAAAAAAAAAA | #bobbyzera em #Twitch",
      thumbnailUrl: "/images/bobbyzera_youtube_thumbnail.png"
    },
    {
      id: "2",
      embedUrl: "https://www.youtube.com/embed/n6DKtSM7BE4?start=10",
      title: "o chat passou dos limites #humor #bobbyzera",
      thumbnailUrl: "/images/bobbyzera_youtube_thumbnail.png"
    },
  ];

  const tiktokShorts = [
    {
      id: "1",
      embedUrl: "https://www.tiktok.com/embed/v2/7344234567890123456",
      title: "Bobbyzera no TikTok",
      thumbnailUrl: "/images/bobbyzera_twitch_thumbnail.png"
    },
    {
      id: "2",
      embedUrl: "https://www.tiktok.com/embed/v2/7344234567890123457",
      title: "Momentos engraçados na stream",
      thumbnailUrl: "/images/bobbyzera_twitch_thumbnail.png"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-bobby-dark to-bobby-background">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Shorts
        </h2>
        
        <Tabs defaultValue="youtube" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="youtube" className="text-white">YouTube</TabsTrigger>
            <TabsTrigger value="tiktok" className="text-white">TikTok</TabsTrigger>
          </TabsList>
          
          <TabsContent value="youtube">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeShorts.map((short) => (
                <Card key={short.id} className="bg-bobby-dark border-bobby-purple/20 overflow-hidden">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white truncate">{short.title}</h3>
                    <div className="relative pt-[177.77%]"> {/* 16:9 aspect ratio */}
                      <iframe
                        src={short.embedUrl}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                        title={short.title}
                        poster={short.thumbnailUrl}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tiktok">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiktokShorts.map((short) => (
                <Card key={short.id} className="bg-bobby-dark border-bobby-purple/20 overflow-hidden">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white truncate">{short.title}</h3>
                    <div className="relative pt-[177.77%]"> {/* 9:16 aspect ratio for TikTok */}
                      <iframe
                        src={short.embedUrl}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                        title={short.title}
                        poster={short.thumbnailUrl}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ShortsSection;
