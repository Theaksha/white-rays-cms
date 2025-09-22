import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Eye, Settings } from "lucide-react";
import { getCMSData } from "@/lib/cms";
import { useState, useEffect } from "react";

const Projects = () => {
  const [cmsData, setCmsData] = useState<any>(null);

  useEffect(() => {
    getCMSData().then(setCmsData);
  }, []);

  if (!cmsData) return <div className="py-24 text-center">Loading...</div>;
  
  const iconMap: Record<string, any> = {
    "01": <Brain className="w-8 h-8" />,
    "02": <Eye className="w-8 h-8" />,
    "03": <Settings className="w-8 h-8" />
  };
  
  const projects = [
    {
      id: "01",
      title: "Anvesh AI",
      description: "An Invoice-OCR and data analytics solution based on ML for extracting, analyzing invoice data efficiently",
      icon: <Brain className="w-8 h-8" />,
      tags: ["Machine Learning", "OCR", "Data Analytics", "AI"],
      color: "brand-cyan"
    },
    {
      id: "02", 
      title: "LLaMAVision",
      description: "A custom-trained LLaMA 3-based GPT model tailored for advanced insights and domain-specific expertise",
      icon: <Eye className="w-8 h-8" />,
      tags: ["LLaMA 3", "GPT", "Custom AI", "NLP"],
      color: "brand-purple"
    },
    {
      id: "03",
      title: "Pravartak ERP",
      description: "A low-code ERP solution with integrated POS, designed for streamlined business operations and rapid deployment.",
      icon: <Settings className="w-8 h-8" />,
      tags: ["ERP", "Low-code", "POS", "Business"],
      color: "brand-cyan"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-brand-subtle border border-brand-cyan/20 mb-6">
            <span className="text-sm font-medium text-brand-cyan">{cmsData.projects.subtitle}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              {cmsData.projects.title}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {cmsData.projects.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cmsData.projects.items.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-3 border-border/50 hover:border-brand-cyan/50"
            >
              {/* Project Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-muted/10 group-hover:text-brand-cyan/20 transition-colors duration-300">
                {project.id}
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-brand-subtle flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <div className="text-brand-cyan group-hover:text-brand-purple transition-colors duration-300">
                    {iconMap[project.id] || <Brain className="w-8 h-8" />}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-brand-cyan transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-gradient-brand-subtle text-brand-cyan border-brand-cyan/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-brand-cyan hover:text-brand-purple transition-colors duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-brand-subtle border border-brand-cyan/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Ideas into Reality?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help bring your vision to life with our expertise 
              in cutting-edge technology and innovative solutions.
            </p>
            <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;