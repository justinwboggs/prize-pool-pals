import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "./waitlist-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Zap, Store, Users, DollarSign } from "lucide-react";
import popupExample1 from "@/assets/popup-example-1.jpg";
import popupExample2 from "@/assets/popup-example-2.jpg";
import popupExample3 from "@/assets/popup-example-3.jpg";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Turn your popups into{" "}
            <span className="text-transparent bg-gradient-prize bg-clip-text">
              profit
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rafl turns your boring popups into Grand Pooled Giveaways proven to Drive More Sales—live on Shopify in less than 5 minutes.
          </p>

          {/* Popup Examples Carousel */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8 shadow-card">
            <p className="text-sm text-muted-foreground mb-6 text-center">See Rafl in Action</p>
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src={popupExample1} 
                      alt="Example popup showing Win $500 Cash giveaway" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src={popupExample2} 
                      alt="Example popup showing Unlock $1,000 Grand Prize giveaway" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src={popupExample3} 
                      alt="Example popup showing Enter to Win $750 giveaway" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              From 73 participating stores • 24.3K participants this month
            </p>
          </div>

          {/* Video Explainer */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 mb-8 shadow-card">
            <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/wzfIglmK7hQ?si=6yX64SfhPyogDz0a" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}