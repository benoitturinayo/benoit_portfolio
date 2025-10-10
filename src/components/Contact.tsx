import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss how data analytics can drive your project forward
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" placeholder="Tell me about your project..." rows={5} />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary text-primary-foreground">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:turinayobenoit2@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    turinayobenoit2@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-accent text-accent-foreground">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/yourprofile</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary text-primary-foreground">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">GitHub</h3>
                  <p className="text-muted-foreground">github.com/yourprofile</p>
                </div>
              </div>
            </Card>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently available for consulting projects and research collaborations. 
                Typical response time: 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
