import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span>TURINAYO </span>
              <span className="text-accent">Benoit</span>
            </div>
            <p className="text-primary-foreground/80">
              Transforming data into strategic insights for evidence-based decision making.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#skills" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:turinayobenoit2@gmail.com"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © {new Date().getFullYear()} TURINAYO Benoit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
