import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Nitte Meenakshi Institute of Technology",
      degree: "Bachelor of Engineering - BE",
      field: "Information Science & Engineering",
      duration: "2013 - 2017",
      grade: "8.7 CGPA",
      location: "Bengaluru, Karnataka, India",
      activities: ["IEEE"],
      description: "Comprehensive engineering program focusing on information science and technology fundamentals"
    }
  ]

  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic foundation in Information Science & Engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`education-${index}`}>
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl mb-1">{edu.institution}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-semibold text-primary">{edu.degree}</h3>
                        <Badge variant="outline" className="text-xs w-fit">{edu.field}</Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="outline" className="text-xs whitespace-nowrap">
                      <Award className="h-3 w-3 mr-1" />
                      {edu.grade}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{edu.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Activities & Societies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.activities.map((activity) => (
                        <Badge key={activity} variant="secondary" className="text-xs">
                          {activity}
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
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            My engineering education provided a strong foundation in computer science principles, 
            problem-solving methodologies, and technical communication skills.
          </p>
          <div className="flex justify-center gap-2 sm:gap-3">
            <Badge variant="outline" className="text-xs sm:text-sm">Information Science</Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">Engineering</Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">Problem Solving</Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">Technical Communication</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
