
import { Card, CardContent } from "@/components/ui/card";

const VideosSection = () => {
  const videos = [
    {
      id: "1",
      embedUrl: "https://www.youtube.com/embed/videoseries?list=PLyHh5_iRoWw5YCZpZmR0x6KgzJQa1u3Jz",
      title: "Latest Videos",
    },
    {
      id: "2",
      embedUrl: "https://player.twitch.tv/?channel=bobbyzera&parent=localhost",
      title: "Live Stream",
    },
  ];

  return (
    <section className="py-16 bg-bobby-background">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Latest Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="bg-bobby-dark border-bobby-purple/20">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-4 text-white">{video.title}</h3>
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={video.embedUrl}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    title={video.title}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
