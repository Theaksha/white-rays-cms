import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Bug, 
  Layers, 
  Cloud, 
  Palette, 
  Headphones, 
  Users,
  ArrowRight 
} from "lucide-react";
import { getCMSData } from "@/lib/cms";
import { useState, useEffect } from "react";

const Services = () => {
  const [cmsData, setCmsData] = useState<any>(null);

  useEffect(() => {
    getCMSData().then(setCmsData);
  }, []);

  if (!cmsData) return <div className="py-24 text-center">Loading...</div>;
  
  const iconMap: Record<string, any> = {
    Code: <Code className="w-8 h-8" />,
    Bug: <Bug className="w-8 h-8" />,
    Layers: <Layers className="w-8 h-8" />,
    Cloud: <Cloud className="w-8 h-8" />,
    Palette: <Palette className="w-8 h-8" />,
    Headphones: <Headphones className="w-8 h-8" />,
    Users: <Users className="w-8 h-8" />,
    Smartphone: <Smartphone className="w-8 h-8" />
  };
  
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web and Mobile App Development",
      description: "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
      color: "brand-cyan"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "QA & Testing",
      description: "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
      color: "brand-purple"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
      color: "brand-cyan"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.",
      color: "brand-purple"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Build the product you need on time with an experienced team that uses a clear and effective design process.",
      color: "brand-cyan"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Maintenance and Support",
      description: "Over the past decade, our customers succeeded by leveraging our process of building and motivating.",
      color: "brand-purple"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Team",
      description: "Build the product you need on time with an experienced team that uses a clear and effective design process.",
      color: "brand-cyan"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      color: "brand-purple"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-brand-subtle border border-brand-cyan/20 mb-6">
            <span className="text-sm font-medium text-brand-cyan">{cmsData.services.subtitle}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              {cmsData.services.title}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {cmsData.services.description}
          </p>
          <Button variant="outline" className="mt-6 group">
            all services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cmsData.services.items.concat(services.slice(4)).map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-brand-cyan/50"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-brand-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-brand-cyan group-hover:text-brand-purple transition-colors duration-300">
                    {iconMap[service.icon] || service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-brand-cyan transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              We Carry more Than Just Good Coding Skills
            </h3>
            <p className="text-muted-foreground mb-8">
              Our team combines technical expertise with business acumen to deliver 
              solutions that not only work flawlessly but also drive real business value.
            </p>
            <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              Let's Build Your Website!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;