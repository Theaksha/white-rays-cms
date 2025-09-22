import { Button } from "@/components/ui/button";
import { 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { getCMSData } from "@/lib/cms";
import { useState, useEffect } from "react";

const Footer = () => {
  const [cmsData, setCmsData] = useState<any>(null);

  useEffect(() => {
    getCMSData().then(setCmsData);
  }, []);

  if (!cmsData) return null;
  
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
      { name: "UI/UX Design", href: "#services" }
    ],
    projects: [
      { name: "Anvesh AI", href: "#projects" },
      { name: "LLaMAVision", href: "#projects" },
      { name: "Pravartak ERP", href: "#projects" },
      { name: "All Projects", href: "#projects" }
    ],
    support: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-purple rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                {cmsData.branding.logoUrl ? (
                  <img 
                    src={cmsData.branding.logoUrl} 
                    alt="Logo" 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{cmsData.branding.logoText}</span>
                  </div>
                )}
                <div>
                  <div className="font-bold text-xl">
                    {cmsData.branding.companyName.split(' ').slice(0, 2).join(' ')}
                  </div>
                  <div className="text-sm text-white/70">
                    {cmsData.branding.companyName.split(' ').slice(2).join(' ')} LLP
                  </div>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                We are architects of cutting-edge technology, creators of digital experiences, 
                and partners in your journey towards innovation. Transform your ideas into 
                robust, scalable, and future-proof solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="w-4 h-4 text-brand-cyan" />
                  <span>{cmsData.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="w-4 h-4 text-brand-cyan" />
                  <span>{cmsData.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-4 h-4 text-brand-cyan" />
                  <span>{cmsData.contact.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:text-brand-cyan hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold mb-4 text-brand-cyan">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-brand-cyan transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-brand-cyan">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-brand-cyan transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-brand-cyan">Projects</h4>
              <ul className="space-y-2">
                {footerLinks.projects.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-brand-cyan transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <h4 className="font-bold mb-2">Stay updated with our newsletter</h4>
              <p className="text-white/80 text-sm">Get the latest news and updates about our services and projects.</p>
            </div>
            <div className="flex space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              />
              <Button className="bg-gradient-brand hover:opacity-90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 White Rays Technologies LLP. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-brand-cyan transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-brand-cyan transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-brand-cyan transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;