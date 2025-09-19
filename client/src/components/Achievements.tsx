import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Award, Medal, Target, Zap, Mic, FileText } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "Champion of the Month",
      organization: "Maersk",
      date: "December 2023",
      description: "Recognized for exemplary performance at the workplace, demonstrating exceptional leadership and technical excellence in critical business initiatives.",
      icon: Trophy,
      category: "Performance Excellence",
      highlights: [
        "Exemplary performance in workplace responsibilities",
        "Demonstrated exceptional technical leadership",
        "Exceeded project delivery expectations",
        "Maintained high standards of quality and efficiency"
      ],
      impact: "Significantly improved team productivity and project delivery timelines",
      certificate: "/assets/champ_of_the_month.pdf"
    },
    {
      title: "Star of the Quarter",
      organization: "Maersk",
      date: "Q3 2024",
      description: "Awarded for outstanding performance in React development and micro-frontend architecture, contributing to major business initiatives during Q3 2024.",
      icon: Star,
      category: "Technical Excellence",
      highlights: [
        "Delivered high-quality React applications",
        "Implemented innovative micro-frontend solutions",
        "Collaborated effectively with cross-functional teams",
        "Maintained excellent code quality standards"
      ],
      impact: "Enhanced application performance and user experience across multiple platforms",
      certificate: "/assets/star_of_the_quarter.pdf"
    },
    {
      title: "Going the Extra Mile Award",
      organization: "Maersk",
      date: "April 2022",
      description: "Recognized for extra-ordinary contributions beyond standard expectations, demonstrating exceptional dedication and initiative.",
      icon: Target,
      category: "Dedication & Commitment",
      highlights: [
        "Made extra-ordinary contributions beyond standard expectations",
        "Volunteered for additional challenging tasks",
        "Provided support to struggling team members",
        "Took initiative in process improvements"
      ],
      impact: "Improved team morale and project outcomes through proactive contributions",
      certificate: "/assets/Going_the_extra_mile.pdf"
    },
    {
      title: "Star Award",
      organization: "Maersk",
      date: "May 2025",
      description: "Honored for exceptional out-of-the-box thinking and innovative solutions that drove significant business value.",
      icon: Medal,
      category: "Innovation Excellence",
      highlights: [
        "Demonstrated exceptional out-of-the-box thinking",
        "Developed innovative solutions to complex problems",
        "Contributed to multiple successful project launches",
        "Exhibited creative problem-solving abilities"
      ],
      impact: "Delivered innovative solutions that enhanced business outcomes and customer satisfaction",
      certificate: "/assets/star_award.pdf"
    },
    {
      title: "Best Prepared Speaker",
      organization: "Toastmasters International",
      company: "Lowe's India",
      date: "November 2022",
      description: "Recognized as the Best Prepared Speaker at Lowe's India Toastmasters Club for exceptional presentation skills, content preparation, and public speaking excellence.",
      icon: Mic,
      category: "Communication Excellence",
      highlights: [
        "Delivered outstanding prepared speeches with clear structure",
        "Demonstrated excellent content preparation and research",
        "Exhibited strong public speaking and presentation skills",
        "Received recognition from peers and club members"
      ],
      impact: "Enhanced communication skills and professional presentation abilities",
      certificate: "/assets/Toastmasters_Best_prepared_speaker_Lowes.pdf"
    }
  ]

  const categories = [
    { name: "Performance Excellence", count: 1, color: "bg-yellow-500" },
    { name: "Technical Excellence", count: 1, color: "bg-blue-500" },
    { name: "Dedication & Commitment", count: 1, color: "bg-green-500" },
    { name: "Innovation Excellence", count: 1, color: "bg-purple-500" },
    { name: "Communication Excellence", count: 1, color: "bg-indigo-500" }
  ]

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional recognition and awards earned through exceptional performance and dedication
          </p>
        </div>

        {/* Achievement Categories Overview */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Recognition Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {categories.map((category, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${category.color} rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center`}>
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="text-xs sm:text-sm font-medium mb-1">{category.name}</h4>
                <p className="text-xs text-muted-foreground">{category.count} Award{category.count !== 1 ? 's' : ''}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Achievements */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 group" data-testid={`achievement-${index}`}>
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-1">{achievement.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                      <Badge variant="outline" className="text-xs w-fit">{achievement.category}</Badge>
                      <span className="text-xs sm:text-sm text-muted-foreground">{achievement.organization}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      {achievement.certificate && (
                        <a
                          href={achievement.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                        >
                          <FileText className="h-3 w-3" />
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground">{achievement.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Highlights</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {achievement.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base text-primary">Impact</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{achievement.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-sm sm:text-base text-muted-foreground">Total Awards</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">2022-2025</div>
              <div className="text-sm sm:text-base text-muted-foreground">Recognition Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Performance Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">2</div>
              <div className="text-sm sm:text-base text-muted-foreground">Organizations</div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12">
            <p className="text-muted-foreground mb-6 text-sm sm:text-base max-w-3xl mx-auto">
              These achievements reflect my commitment to excellence, technical proficiency, communication skills, and dedication to delivering 
              high-quality solutions that drive business success and team collaboration.
            </p>
            <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
              <Badge variant="outline" className="text-xs sm:text-sm">Performance Excellence</Badge>
              <Badge variant="outline" className="text-xs sm:text-sm">Technical Excellence</Badge>
              <Badge variant="outline" className="text-xs sm:text-sm">Innovation Excellence</Badge>
              <Badge variant="outline" className="text-xs sm:text-sm">Communication Excellence</Badge>
              <Badge variant="outline" className="text-xs sm:text-sm">Dedication & Commitment</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
