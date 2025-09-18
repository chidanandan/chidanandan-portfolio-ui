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
        { name: "Azure/GCP", level: 75, years: "2+" }
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
        { name: "Team Leadership", level: 88, years: "4+" }
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise developed over 8+ years of professional experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover-elevate transition-all duration-300" data-testid={`card-skill-category-${categoryIndex}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.title}
                  <Badge variant="outline" className="text-xs">{category.skills.length} Skills</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">{skill.years}</Badge>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <div 
                        className={`absolute left-0 top-0 h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "NextJS", "TypeScript", "Node.js", "Express", "Webpack", 
              "Docker", "Kubernetes", "Azure", "GCP", "Jest", "Cypress",
              "Redux", "SCSS", "Micro-Frontends", "PWA", "SEO"
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-1 px-3" data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}