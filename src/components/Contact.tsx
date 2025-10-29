import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Youtube, Phone, Send, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", { // Replace with your Formspree endpoint
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        (event.target as HTMLFormElement).reset();
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      } else {
        toast({
          title: "Error",
          description: "Oops! Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Oops! Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
              </div>
              
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                <Send className="mr-2" size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
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
                <div className="p-3 rounded-full bg-primary text-primary-foreground">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <div className="space-y-1">
                    <a href="tel:+250781653437" className="block text-muted-foreground hover:text-primary transition-colors">
                      (+250) 781 653 437
                    </a>
                    <a href="tel:+250732333000" className="block text-muted-foreground hover:text-primary transition-colors">
                      (+250) 732 333 000
                    </a>
                  </div>
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
                  <a 
                    href="https://www.linkedin.com/in/turinayo-benoit-820877257" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary text-primary-foreground">
                  <Youtube size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">YouTube</h3>
                  <a 
                    href="https://www.youtube.com/@benoitpeacemaker" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @benoitpeacemaker
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-accent text-accent-foreground">
                  <Users size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Free Online Training</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Join my free statistical software training sessions
                  </p>
                  <Button 
                    variant="default"
                    size="sm"
                    onClick={() => window.open('https://chat.whatsapp.com/J0eImg5bwlX1JA3A5Maozv', '_blank')}
                  >
                    Join WhatsApp Group
                  </Button>
                </div>
              </div>
            </Card>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Associated Data Analyst & Senior Cofacilitator</p>
                  <p className="text-sm text-muted-foreground">Data Plus Rwanda • 3 years</p>
                </div>
                <div>
                  <p className="font-medium">Senior Facilitator</p>
                  <p className="text-sm text-muted-foreground">EduConnect Rwanda • 2 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
