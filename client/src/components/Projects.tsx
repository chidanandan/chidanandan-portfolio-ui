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
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Highlighting some of the most impactful projects I've worked on throughout my career, 
            showcasing technical excellence and business value delivery.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-project-${index}`}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">{project.type}</Badge>
                      </div>
                      <p className="text-primary font-medium text-sm">{project.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" disabled data-testid={`button-project-${index}-demo`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" disabled data-testid={`button-project-${index}-code`}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
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

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button variant="outline" size="lg" disabled data-testid="button-view-all-projects">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}