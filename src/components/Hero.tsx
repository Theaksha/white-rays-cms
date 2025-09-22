import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { getCMSData } from "@/lib/cms";
import { useState, useEffect } from "react";

const Hero = () => {
  const [cmsData, setCmsData] = useState<any>(null);

  useEffect(() => {
    getCMSData().then(setCmsData);
  }, []);

  if (!cmsData) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  
  return (
    <section id="home" className="relative min-h-screen flex items-center geometric-bg overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="White Rays Technologies - Modern Software Development"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-brand-cyan/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-brand-purple/20 rounded-lg rotate-45 animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-brand-cyan/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-brand-subtle border border-brand-cyan/20">
              <span className="text-sm font-medium text-brand-cyan">{cmsData.hero.subtitle}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  {cmsData.hero.title}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {cmsData.hero.description}
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-card border border-border rounded-lg">
                <span className="text-sm font-medium">END-TO-END DEVELOPMENT</span>
              </div>
              <div className="px-4 py-2 bg-card border border-border rounded-lg">
                <span className="text-sm font-medium">SOFTWARE IT OUTSOURCING</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-glow">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 w-5 h-5 group-hover:text-brand-cyan transition-colors" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {cmsData.hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-brand-cyan">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Additional Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Geometric overlays */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-brand opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute top-20 right-20 w-48 h-48 bg-brand-purple/30 rounded-lg rotate-12"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-brand-cyan/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;