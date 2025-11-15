import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl mb-2 text-primary-foreground/80 font-medium">Data is a story waiting to be told</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              TURINAYO Benoit
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Certified data scientist and analyst with BSc in Applied Statistics. Expert in Python, R, Power BI, and SQL. Specializing in machine learning, geospatial analysis, and delivering data-driven insights for sustainable development and public health initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="https://drive.google.com/file/d/1NqlNmGR5ByAD8jHPx5seKnYGyZRHdVLA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
                >
                  Download Resume
                  <Download className="ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
