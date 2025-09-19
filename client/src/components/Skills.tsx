import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95, years: "5+" },
        { name: "NextJS", level: 90, years: "3+" },
        { name: "TypeScript", level: 88, years: "4+" },
        { name: "JavaScript (ES6+)", level: 95, years: "8+" },
        { name: "HTML5/CSS3", level: 92, years: "8+" },
        { name: "SASS/SCSS", level: 85, years: "6+" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Redux", level: 88, years: "4+" },
        { name: "Webpack", level: 82, years: "5+" },
        { name: "Jest/Enzyme", level: 80, years: "4+" },
        { name: "Cypress", level: 85, years: "3+" },
        { name: "Bootstrap", level: 90, years: "6+" },
        { name: "jQuery", level: 85, years: "7+" }
      ]
    },
    {
      title: "Backend & DevOps",
      skills: [
        { name: "NodeJS", level: 82, years: "4+" },
        { name: "ExpressJS", level: 80, years: "3+" },
        { name: "Kubernetes", level: 75, years: "2+" },
        { name: "Docker", level: 78, years: "3+" },
        { name: "GitHub Actions", level: 85, years: "3+" },
        { name: "Azure/GCP", level: 75, years: "2+" },
        { name: "Apache Spark", level: 70, years: "2+" },
        { name: "Big Data", level: 72, years: "2+" }
      ]
    },
    {
      title: "Specialized Skills",
      skills: [
        { name: "Micro-Frontends", level: 92, years: "3+" },
        { name: "PWA Development", level: 88, years: "4+" },
        { name: "SEO Optimization", level: 85, years: "5+" },
        { name: "Performance Tuning", level: 90, years: "6+" },
        { name: "System Architecture", level: 85, years: "3+" },
        { name: "Team Leadership", level: 88, years: "4+" },
        { name: "Agile Methodologies", level: 90, years: "6+" },
        { name: "Business Writing", level: 85, years: "5+" }
      ]
    }
  ]

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-primary"
    if (level >= 80) return "bg-blue-500"
    if (level >= 70) return "bg-green-500"
    return "bg-yellow-500"
  }

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise developed over 8+ years of professional experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover-elevate transition-all duration-300" data-testid={`card-skill-category-${categoryIndex}`}>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  {category.title}
                  <Badge variant="outline" className="text-xs">{category.skills.length} Skills</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1 sm:space-y-2" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Badge variant="secondary" className="text-xs">{skill.years}</Badge>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-1.5 sm:h-2"
                      />
                      <div 
                        className={`absolute left-0 top-0 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "React", "NextJS", "TypeScript", "Node.js", "Express", "Webpack", 
              "Docker", "Kubernetes", "Azure", "GCP", "Jest", "Cypress",
              "Redux", "SCSS", "Micro-Frontends", "PWA", "SEO", "Apache Spark",
              "Big Data", "Agile", "Business Writing", "Bootstrap", "jQuery"
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs sm:text-sm py-1 px-2 sm:px-3" data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}