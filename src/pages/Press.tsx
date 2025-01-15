import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import '../App.css';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card } from "@/components/ui/card";
  
  interface Publication {
    name: string;
    logo: string;
    link: string;
  }
  
  const publications: Publication[] = [
    {
      name: "GoodHomes",
      logo: "/press1.jpg",
      link: "https://www.goodhomes.co.in/design-and-style/style-makers/in-conversation-with-artist-abhinav-goyal-6038.html",
    },
    {
      name: "Architectural Digest",
      logo: "/placeholder.svg",
      link: "https://www.architecturaldigest.com/article",
    },
    {
      name: "CEO Insights",
      logo: "/placeholder.svg",
      link: "https://www.ceoinsights.com/article",
    },
    {
      name: "Design Weekly",
      logo: "/placeholder.svg",
      link: "https://www.designweekly.com/article",
    },
    {
      name: "Art Forum",
      logo: "/placeholder.svg",
      link: "https://www.artforum.com/article",
    },
    {
      name: "Creative Review",
      logo: "/placeholder.svg",
      link: "https://www.creativereview.com/article",
    },
    {
      name: "Design Observer",
      logo: "/placeholder.svg",
      link: "https://www.designobserver.com/article",
    },
    {
      name: "Dezeen",
      logo: "/placeholder.svg",
      link: "https://www.dezeen.com/article",
    },
    {
      name: "Wallpaper",
      logo: "/placeholder.svg",
      link: "https://www.wallpaper.com/article",
    },
    {
      name: "The Design Journal",
      logo: "/placeholder.svg",
      link: "https://www.thedesignjournal.com/article",
    },
  ];
  
  const Press = () => {
    return (
      
      <section className="py-16 px-4 md:px-8">
<Navbar/>
        <div className="max-w-7xl mx-auto">
         
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {publications.slice(0, 10).map((pub, index) => (
              <a
                key={index}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <Card className="aspect-square flex items-center justify-center p-6">
                  <img
                    src={pub.logo}
                    alt={`${pub.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </Card>
              </a>
            ))}
          </div>
        </div>
        <Footer/>
      </section>
    );
  };
  
  export default Press;