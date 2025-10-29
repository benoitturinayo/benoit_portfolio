import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Interactive Power BI Dashboard",
    description: "A dynamic and interactive dashboard created with Power BI to visualize key business metrics. Features include drill-down capabilities, custom slicers, and insightful data storytelling.",
    tags: ["Power BI", "DAX", "Data Modeling", "Dashboard Design"],
    metrics: "Interactive Dashboard",
    link: "https://drive.google.com/file/d/10GdzyYWhC94aRx93G3t3gGXAJFzOm07g/view?usp=sharing"
  },
  {
    title: "Advanced Excel Dashboard",
    description: "A comprehensive dashboard built in Excel for financial analysis and performance tracking. Utilizes advanced formulas, pivot tables, charts, and macros for automation and deep insights.",
    tags: ["Excel", "Pivot Tables", "VBA", "Financial Analysis"],
    metrics: "Interactive Dashboard",
    link: "https://drive.google.com/file/d/1gyyJ7eyeG31R8kZ1lHobzTcNmNH-oKG2/view?usp=sharing"
  },
  {
    title: "Ending Hunger - Malnutrition Analysis Project",
    description: "Comprehensive analysis to address micronutrient deficiencies by mapping malnutrition hotspots using geospatial data. Developed predictive models of malnutrition risk, analyzed root causes of stunting and deficiencies, and recommended multi-sectoral interventions involving health, agriculture, and education sectors.",
    tags: ["GIS", "Python", "Machine Learning", "Data Visualization"],
    metrics: "Interactive Dashboard",
    link: "https://ending-hunger.vercel.app/"
  },
  {
    title: "National Motorcycle Operators Survey - Rwanda",
    description: "Conducted comprehensive data cleaning, statistical analysis, and reporting for national survey on motorcycle operators. Analyzed operational patterns, safety concerns, and economic impacts across Rwanda.",
    tags: ["STATA", "R", "Survey Analysis"],
    metrics: "National-level research"
  },
  {
    title: "Legal Aid Accessibility Study - Rwanda",
    description: "Performed data cleaning, statistical analysis, and reporting for national survey examining legal aid accessibility. Identified barriers and opportunities to improve justice system access for vulnerable populations.",
    tags: ["Python", "Statistical Analysis", "Excel"],
    metrics: "Policy recommendations"
  },
  {
    title: "STEM Education Analysis - Rwanda",
    description: "Conducted large-scale data analysis for national survey on STEM education initiatives. Evaluated program effectiveness, student outcomes, and provided insights for educational policy development.",
    tags: ["R", "Data Visualization", "Power BI"],
    metrics: "Education sector impact"
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
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <ExternalLink className="text-muted-foreground group-hover:text-accent transition-colors" size={20} />
                )}
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
