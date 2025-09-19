import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "A.P. Moller - Maersk",
      position: "Software Engineer III",
      duration: "Oct 2021 - Present",
      location: "Denmark (Remote)",
      description: "A.P. Moller - Maersk is an integrated transport and logistics company",
      achievements: [
        "Designed and implemented a frontend framework built on top of NextJS leveraging Webpack's module federation for micro-frontend architecture",
        "Developed data communication approach between multiple micro-frontend applications for seamless user experience",
        "Created centralized testing automation suite with Cypress for all pricing-related frontend applications",
        "Active member of 'Community of Practice' and 'Steering Group Committee' ensuring best coding practices",
        "Collaborated with cross-functional teams to deliver high-quality software solutions aligned with business objectives"
      ],
      technologies: ["NextJS", "React", "Webpack", "Micro-Frontends", "Cypress", "TypeScript", "Module Federation"]
    },
    {
      company: "Lowe's India Pvt Ltd",
      position: "Software Engineer",
      duration: "Oct 2019 - Oct 2021", 
      location: "Bengaluru, India",
      description: "Fortune 50 American retail company specializing in home improvement",
      achievements: [
        "Led development of multiple applications for post-purchase use-cases including protection plans and warranties",
        "Designed and developed microsites and micro front ends with CI/CD setup for microservices",
        "Onboarded applications to Google Cloud Platform using Jenkins, Docker, K8s, Spinnaker, Istio, and Envoy",
        "Collaborated with UX designers, product managers, and distributed team members across multiple locations"
      ],
      technologies: ["React", "Docker", "Kubernetes", "GCP", "Jenkins", "Microservices", "Istio", "Envoy"]
    },
    {
      company: "Valtech India Pvt Ltd",
      position: "Software Engineer - Frontend Developer", 
      duration: "July 2017 - Oct 2019",
      location: "Bengaluru, India",
      description: "Voot - Video on-demand platform, part of Viacom 18 Digital Ventures",
      achievements: [
        "Designed and developed responsive pages, components with cross-browser compatibility",
        "Implemented Server-Side Rendering, browser caching and Service Worker integration for performance",
        "Built Accelerated Mobile Pages (AMPs) for enhanced mobile experience",
        "Integrated video player with Google DFP Ads and various analytics platforms (Mixpanel, Lotame, Akamai)",
        "Implemented features like Continue Watching, Favorites, Watch list, Live News with social media login"
      ],
      technologies: ["React", "SSR", "PWA", "AMP", "Service Workers", "Google DFP", "Analytics Integration"]
    },
    {
      company: "growthBox technologies pvt ltd.",
      position: "Intern",
      duration: "June 2016 - August 2016",
      location: "Bengaluru, Karnataka, India",
      description: "Technology company specializing in web application development",
      achievements: [
        "Built an insurance-based web application using ASP.NET",
        "Developed customer registration and management modules",
        "Implemented solutions for patients, insurance staff, and health service providers",
        "Created sales person module for customer interaction and service delivery",
        "Collaborated with team members on full-stack development tasks"
      ],
      technologies: ["ASP.NET", "C#", "SQL Server", "HTML", "CSS", "JavaScript"]
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey spanning 8+ years across leading technology companies and innovative projects.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-6 sm:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>
                
                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0">
                  <Card className="hover-elevate transition-all duration-300" data-testid={`card-experience-${index}`}>
                    <CardHeader className="pb-3 sm:pb-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg sm:text-xl mb-1">{exp.position}</CardTitle>
                          <div className="flex items-center gap-2 text-primary font-semibold text-sm sm:text-base">
                            <Building2 className="h-4 w-4" />
                            {exp.company}
                          </div>
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.duration}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2">{exp.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Achievements</h4>
                          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5 text-xs">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}