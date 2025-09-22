import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Twitter,
  Facebook,
  Linkedin,
  Instagram
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 9970053789",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "contact@whiteraystech.in",
      description: "Online support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "India",
      description: "Visit our office"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon-Fri: 9AM-6PM",
      description: "Saturday: 9AM-2PM"
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-brand-subtle border border-brand-cyan/20 mb-6">
            <span className="text-sm font-medium text-brand-cyan">Get in touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Your{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Website!
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you bring your vision to life. Whether you have a 
                project in mind or just want to explore possibilities, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border-border/50 hover:border-brand-cyan/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand-subtle flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-brand-cyan group-hover:text-brand-purple transition-colors duration-300">
                        {info.icon}
                      </div>
                    </div>
                    <h4 className="font-bold mb-1 group-hover:text-brand-cyan transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-sm font-medium mb-1">{info.details}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gradient-brand-subtle border border-brand-cyan/20 flex items-center justify-center text-brand-cyan hover:text-brand-purple hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 9876543210" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project inquiry" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full bg-gradient-brand hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;