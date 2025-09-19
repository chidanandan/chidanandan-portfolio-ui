import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { apiRequest } from "@/lib/queryClient"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
      
      return response.json();
    },
    onSuccess: () => {
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    },
    onError: (error: any) => {
      console.error('Contact form error:', error)
      alert(error?.message || 'Failed to send message. Please try again.')
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    contactMutation.mutate(formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chidutramp@gmail.com",
      href: "mailto:chidutramp@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8861493499",
      href: "tel:+918861493499"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/chidanandan-p",
      href: "https://www.linkedin.com/in/chidanandan-p/"
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Let's Connect</h3>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4" data-testid={`contact-info-${item.label.toLowerCase()}`}>
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">{item.label}</p>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={item.href === '#' ? (e) => e.preventDefault() : undefined}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">What I'm Looking For</h4>
              <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">•</span>
                  <span>Frontend & Full-stack development opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">•</span>
                  <span>Technical leadership and architecture roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">•</span>
                  <span>Interesting projects involving modern web technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">•</span>
                  <span>Collaborative opportunities and consulting work</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover-elevate transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      data-testid="input-name"
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                      className="text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    data-testid="input-subject"
                    className="text-sm"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or opportunity..."
                    className="min-h-[100px] sm:min-h-[120px] text-sm"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full text-sm sm:text-base" 
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
            Prefer to connect on social platforms? You can find me here:
          </p>
          <div className="flex justify-center gap-3 sm:gap-4">
            <Button size="icon" variant="outline" asChild data-testid="button-social-linkedin" className="h-10 w-10 sm:h-11 sm:w-11">
              <a href="https://www.linkedin.com/in/chidanandan-p/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" disabled data-testid="button-social-github" className="h-10 w-10 sm:h-11 sm:w-11">
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button size="icon" variant="outline" asChild data-testid="button-social-email" className="h-10 w-10 sm:h-11 sm:w-11">
              <a href="mailto:chidutramp@gmail.com">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}