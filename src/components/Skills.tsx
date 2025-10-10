import { Card } from "@/components/ui/card";
import { Database, Code, FileSpreadsheet, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "R", "SQL"],
    color: "text-accent"
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Database Design"],
    color: "text-primary"
  },
  {
    title: "Statistical & BI Tools",
    icon: BarChart3,
    skills: ["STATA", "Excel", "Power BI", "Tableau"],
    color: "text-accent"
  },
  {
    title: "Survey Tools",
    icon: FileSpreadsheet,
    skills: ["KoboToolbox", "SurveyCTO", "ODK"],
    color: "text-primary"
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in industry-leading tools and technologies for comprehensive data analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-secondary ${category.color}`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
