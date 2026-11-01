import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Background = () => (
  <section className="py-20 bg-muted/30" aria-labelledby="background-heading">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 id="background-heading" className="text-4xl md:text-5xl font-bold mb-4">
          Professional Background
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience, education, and certifications in data science, statistics, and economics
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="p-8 bg-card border-border">
          <BriefcaseBusiness className="text-primary mb-4" size={32} aria-hidden="true" />
          <h3 className="text-2xl font-semibold mb-6">Experience</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg">Data Scientist / Statistician – Performance Auditor</h4>
              <p className="text-muted-foreground mt-2">Office of the Auditor General of State Finances</p>
              <p className="text-sm font-medium text-primary mt-2">February 2026 – Present</p>
            </div>
            <div>
              <h4 className="font-medium">Associated Data Analyst &amp; Senior Cofacilitator</h4>
              <p className="text-sm text-muted-foreground mt-1">Data Plus Rwanda • 3 years</p>
            </div>
            <div>
              <h4 className="font-medium">Senior Facilitator</h4>
              <p className="text-sm text-muted-foreground mt-1">EduConnect Rwanda • 2 years</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-card border-border">
          <GraduationCap className="text-primary mb-4" size={32} aria-hidden="true" />
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg">MSc in Economics</h4>
              <p className="text-muted-foreground mt-2">University of Kigali</p>
              <p className="text-sm font-medium text-primary mt-2">2026–2028 • Ongoing</p>
            </div>
            <div>
              <h4 className="font-medium">BSc in Applied Statistics</h4>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-card border-border">
          <Award className="text-primary mb-4" size={32} aria-hidden="true" />
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <h4 className="font-semibold text-lg">Advanced AI, Machine Learning, and Big Data Analytics</h4>
          <p className="text-sm font-medium text-primary mt-2">Certified</p>
        </Card>
      </div>
    </div>
  </section>
);

export default Background;
