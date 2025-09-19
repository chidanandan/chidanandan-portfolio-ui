import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Users, Zap, Award } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "8+ Years Experience",
      description: "Extensive experience in web development and frontend engineering"
    },
    {
      icon: Zap,
      title: "Modern Technologies",
      description: "Proficient in React, NextJS, TypeScript, and modern web architectures"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Active member of Community of Practice and Steering Group at Maersk"
    },
    {
      icon: Award,
      title: "Innovation Focus",
      description: "Designed micro-frontend frameworks and data communication solutions"
    }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software engineer with a proven track record of delivering high-quality web applications
            and leading technical initiatives across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Professional Summary</h3>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
              <p>
                With over <strong className="text-foreground">8 years of extensive experience</strong> in web development 
                and frontend engineering, I specialize in building scalable, modern web applications that deliver 
                exceptional user experiences.
              </p>
              <p>
                My expertise spans <strong className="text-foreground">Microservices, Micro Front End (MFE) Applications, 
                Progressive Web Applications (PWA), and Single Page Applications (SPA)</strong> with integrated 
                Search Engine Optimization (SEO).
              </p>
              <p>
                I'm an excellent team player, capable of quickly learning new technologies and delivering 
                solutions both as an individual contributor and as part of cross-functional teams.
              </p>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs sm:text-sm">Team Leadership</Badge>
                <Badge className="text-xs sm:text-sm">System Architecture</Badge>
                <Badge className="text-xs sm:text-sm">Performance Optimization</Badge>
                <Badge className="text-xs sm:text-sm">Agile Development</Badge>
                <Badge className="text-xs sm:text-sm">Mentoring</Badge>
                <Badge className="text-xs sm:text-sm">Cross-functional Collaboration</Badge>
                <Badge className="text-xs sm:text-sm">Business Writing</Badge>
                <Badge className="text-xs sm:text-sm">Big Data</Badge>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-highlight-${index}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}