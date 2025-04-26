
import { Twitch, Youtube, Instagram, Twitter, Facebook, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const socialLinks = [
    { icon: Twitch, href: "https://www.twitch.tv/bobbyzera", label: "Twitch" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCunAecRhgjAK-l9kbVuVtCw", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/bobbyzeraa", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/bobbyzera", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/bobbyzeraa", label: "Facebook" },
    { icon: Link, href: "https://www.tiktok.com/@bobbyzeraa", label: "TikTok" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-bobby-background text-white p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-bobby-dark/80 to-bobby-background/95" />
      <div className="container relative z-10 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-bobby-purple to-bobby-light bg-clip-text text-transparent">
          Bobbyzera
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Content Creator & Streamer
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              variant="outline"
              className="bg-bobby-dark/50 hover:bg-bobby-purple/20 border-bobby-purple/50"
              asChild
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <social.icon className="w-5 h-5" />
                <span>{social.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
