import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Healthcare Analytics Dashboard",
    description: "Developed comprehensive analytics dashboard analyzing patient outcomes and treatment efficacy using Python and PostgreSQL. Resulted in 30% improvement in treatment protocols.",
    tags: ["Python", "PostgreSQL", "Data Visualization"],
    metrics: "30% efficiency increase"
  },
  {
    title: "Survey Data Analysis - Education Sector",
    description: "Conducted large-scale survey analysis using KoboToolbox and STATA for educational research. Processed responses from 5,000+ participants across multiple regions.",
    tags: ["KoboToolbox", "STATA", "R"],
    metrics: "5,000+ respondents"
  },
  {
    title: "Market Research Database",
    description: "Designed and implemented MySQL database for market research firm, optimizing data retrieval processes and creating automated reporting systems.",
    tags: ["MySQL", "Database Design", "Excel"],
    metrics: "70% faster queries"
  },
  {
    title: "Statistical Modeling Project",
    description: "Built predictive models using R and Python for agricultural yield forecasting. Implemented machine learning algorithms achieving 85% accuracy.",
    tags: ["R", "Python", "Machine Learning"],
    metrics: "85% accuracy"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of impactful data analysis projects and research initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="text-muted-foreground group-hover:text-accent transition-colors" size={20} />
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-secondary/80">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border">
                <span className="text-sm font-medium text-accent">
                  {project.metrics}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
