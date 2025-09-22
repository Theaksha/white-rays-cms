import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react";
import geometricPattern from "@/assets/geometric-pattern.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Expertise Beyond Boundaries",
      description: "Our team of seasoned developers, engineers, and designers bring a wealth of experience across diverse industries. From custom software solutions to advanced web and mobile applications, we thrive on pushing the boundaries of what's possible."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric Approach", 
      description: "Your success is our priority. We take the time to understand your unique challenges and goals, tailoring our solutions to meet your specific needs. Collaboration is at the heart of everything we do."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation at Every Step",
      description: "In the dynamic world of technology, staying ahead is not an option; it's a necessity. At White Rays Technologies, innovation is woven into the fabric of our culture. We embrace the latest technologies to deliver solutions that stand the test of time."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliability and Quality",
      description: "We understand the importance of reliability in software solutions. Our commitment to quality is unwavering, ensuring that every line of code meets the highest standards and contributes to the success of your project."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={geometricPattern} 
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-brand-subtle border border-brand-cyan/20 mb-6">
            <span className="text-sm font-medium text-brand-cyan">About company</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              White Rays Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At White Rays Technologies, we are not just a software development company; 
            we are architects of cutting-edge technology, creators of digital experiences, 
            and partners in your journey towards innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Stats */}
          <div className="relative">
            {/* Main Content Card */}
            <Card className="relative overflow-hidden border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Trusted Partner</h3>
                      <p className="text-muted-foreground text-sm">For innovation and growth</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    In the fast-evolving landscape of technology, we stand as a beacon of expertise, 
                    ready to transform your ideas into robust, scalable, and future-proof solutions.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-cyan mb-1">99%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-cyan mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-cyan mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Quality Assurance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-cyan mb-1">50+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-cyan/20 rounded-full animate-float hidden lg:block"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-brand-purple/20 rounded-lg rotate-45 animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Right Side - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border-border/50 hover:border-brand-cyan/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand-subtle flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-brand-cyan group-hover:text-brand-purple transition-colors duration-300">
                        {value.icon}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg group-hover:text-brand-cyan transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="group">
            LEARN MORE ABOUT US
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;