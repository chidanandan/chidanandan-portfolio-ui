import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap, Users, Code2, Globe } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Micro-Frontend Framework",
      company: "A.P. Moller - Maersk",
      description: "Designed and built a comprehensive frontend framework on top of NextJS leveraging Webpack's module federation. This framework enabled multiple teams to develop and deploy independent micro-frontend applications while maintaining consistency and shared functionality.",
      achievements: [
        "Onboarded 15+ applications into micro-frontend architecture",
        "Reduced deployment time by 60% with independent deployments",
        "Implemented shared component library used across all pricing applications",
        "Created seamless data communication between federated modules"
      ],
      technologies: ["NextJS", "Webpack Module Federation", "TypeScript", "React", "Micro-Frontends"],
      icon: Code2,
      type: "Framework Architecture"
    },
    {
      title: "Centralized Testing Suite",
      company: "A.P. Moller - Maersk", 
      description: "Created a robust, centralized testing automation suite using Cypress to ensure quality and consistency across all pricing-related frontend applications. The suite includes E2E tests, visual regression testing, and automated CI/CD integration.",
      achievements: [
        "Automated testing for 10+ critical user journeys",
        "Reduced manual testing effort by 80%",
        "Achieved 95% test coverage across pricing applications",
        "Integrated with CI/CD pipeline for automated quality gates"
      ],
      technologies: ["Cypress", "JavaScript", "CI/CD", "Jenkins", "Docker"],
      icon: Zap,
      type: "Test Automation"
    },
    {
      title: "Post-Purchase Applications Suite",
      company: "Lowe's India",
      description: "Led the development of multiple customer-facing applications for post-purchase scenarios including protection plans, warranties, and customer service portals. Built scalable microsites with modern deployment practices on GCP.",
      achievements: [
        "Served 100K+ daily active users",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Built responsive applications with 98% uptime SLA",
        "Integrated with multiple backend services and payment gateways"
      ],
      technologies: ["React", "Node.js", "GCP", "Kubernetes", "Docker", "Microservices"],
      icon: Users,
      type: "Customer Applications"
    },
    {
      title: "Voot Streaming Platform",
      company: "Valtech India / Viacom18",
      description: "Contributed to the development of Voot, a major OTT streaming platform. Implemented advanced features including PWA capabilities, AMP pages, video player integration, and comprehensive analytics tracking for millions of users.",
      achievements: [
        "Implemented PWA features improving mobile engagement by 40%",
        "Built AMP pages increasing mobile search visibility by 60%", 
        "Integrated advanced video player with ad serving capabilities",
        "Implemented social login reducing user registration friction by 50%"
      ],
      technologies: ["React", "PWA", "AMP", "Service Workers", "Google DFP", "Analytics"],
      icon: Globe,
      type: "Streaming Platform"
    },
    {
      title: "Insurance Registration System",
      company: "growthBox technologies pvt ltd.",
      description: "Developed a comprehensive insurance-based web application providing solutions for customers (patients), insurance staff, and health service providers (hospitals/diagnostic centers). Included a sales person module for customer interaction and service delivery.",
      achievements: [
        "Built complete insurance registration and management system",
        "Developed customer portal for patients to manage their insurance",
        "Created admin interface for insurance staff and health service providers",
        "Implemented sales person module for customer interaction and service delivery",
        "Designed responsive web interface with user-friendly navigation"
      ],
      technologies: ["ASP.NET", "C#", "SQL Server", "HTML", "CSS", "JavaScript"],
      icon: Users,
      type: "Web Application"
    },
    {
      title: "Smart Orb - Automobile Security System",
      company: "Nitte Meenakshi Institute of Technology",
      description: "An innovative automobile automation system using Arduino board and multiple modules, sensors, and actuators to provide complete security against automobile theft. Includes a supporting mobile application for remote monitoring and control.",
      achievements: [
        "Designed and implemented Arduino-based security system for automobiles",
        "Integrated multiple sensors and actuators for comprehensive security",
        "Developed mobile application for remote monitoring and control",
        "Implemented real-time alerts and notifications for security breaches",
        "Created user-friendly interface for system configuration and monitoring"
      ],
      technologies: ["Arduino", "C++", "Mobile App Development", "IoT", "Sensors", "Actuators"],
      icon: Code2,
      type: "IoT Project"
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Key Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Highlighting some of the most impactful projects I've worked on throughout my career, 
            showcasing technical excellence and business value delivery.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-project-${index}`}>
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                        <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                        <Badge variant="outline" className="text-xs w-fit">{project.type}</Badge>
                      </div>
                      <p className="text-primary font-medium text-xs sm:text-sm">{project.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-12 sm:ml-0">
                    <Button size="sm" variant="outline" disabled data-testid={`button-project-${index}-demo`} className="text-xs">
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" disabled data-testid={`button-project-${index}-code`} className="text-xs">
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Achievements</h4>
                    <ul className="grid sm:grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technologies</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button variant="outline" size="lg" disabled data-testid="button-view-all-projects" className="text-sm sm:text-base">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}