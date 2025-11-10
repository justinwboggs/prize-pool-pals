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
          {/* Beta announcement */}
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
            🎉 Now in Beta - Join 500+ Shopify stores
          </Badge>

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

          {/* Waitlist CTA */}
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-8 shadow-card">
            <WaitlistForm variant="hero" />
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/auth')}
            >
              Store Owner? Sign Up
            </Button>
            <Button variant="ghost" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by Shopify stores worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Shopify Plus Compatible</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm">$2M+ in Prizes Awarded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}