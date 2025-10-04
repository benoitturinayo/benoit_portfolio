import { Card } from "@/components/ui/card";
import { TrendingUp, Database, FileQuestion, Clipboard } from "lucide-react";

const services = [
  {
    title: "Data Analysis",
    description: "Transform raw data into meaningful insights using advanced statistical methods and visualization techniques. Expert in exploratory data analysis, predictive modeling, and trend identification.",
    icon: TrendingUp,
  },
  {
    title: "Database Management",
    description: "Design, optimize, and maintain robust database systems. Expertise in SQL databases, data warehousing, and ensuring data integrity and security.",
    icon: Database,
  },
  {
    title: "Research Consultation",
    description: "Provide expert guidance on research methodology, study design, and data collection strategies. Support from conceptualization to publication-ready results.",
    icon: FileQuestion,
  },
  {
    title: "Questionnaire Design",
    description: "Create effective survey instruments and questionnaires that capture accurate data. Specialized in mobile data collection tools and survey optimization.",
    icon: Clipboard,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services Offered</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive data solutions tailored to your research and business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border-border bg-card group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
