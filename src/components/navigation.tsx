import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RaflLogo } from "./rafl-logo";

export function Navigation() {
  console.log("Navigation component rendering...");
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <RaflLogo className="w-8 h-8" />
          <span className="text-xl font-bold">Rafl</span>
          <Badge variant="secondary" className="ml-2">Beta</Badge>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#features" 
            onClick={(e) => handleNavClick(e, 'features')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleNavClick(e, 'pricing')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Pricing
          </a>
          <a 
            href="#analytics" 
            onClick={(e) => handleNavClick(e, 'analytics')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Analytics
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" onClick={() => navigate('/auth')}>Sign In</Button>
          <Button variant="primary" size="sm" onClick={() => navigate('/auth')}>
            Start Free
          </Button>
        </div>
      </div>
    </nav>
  );
}