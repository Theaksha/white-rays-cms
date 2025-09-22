import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { getCMSData } from "@/lib/cms";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cmsData, setCmsData] = useState<any>(null);

  useEffect(() => {
    getCMSData().then(setCmsData);
  }, []);

  if (!cmsData) return null;

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About Us", href: "#about" },
    { name: "Contacts", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {cmsData.branding.logoUrl ? (
              <img 
                src={cmsData.branding.logoUrl} 
                alt="Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">{cmsData.branding.logoText}</span>
              </div>
            )}
            <div>
              <div className="font-bold text-lg text-brand-navy">
                {cmsData.branding.companyName.split(' ').slice(0, 2).join(' ')}
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                {cmsData.branding.companyName.split(' ').slice(2).join(' ')}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-brand-cyan transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>📞 {cmsData.contact.phone}</span>
            </div>
            <Button size="sm" className="bg-gradient-brand hover:opacity-90 transition-opacity">
              <Search className="w-4 h-4" />
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => window.location.href = '/admin'}
              className="text-xs"
            >
              Admin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-brand-cyan transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="text-sm text-muted-foreground pt-2 border-t border-border">
                📞 {cmsData.contact.phone}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;