import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anand Premi",
      title: "Java Developer | Critical App Development | Scalable & Secure Solutions",
      relationship: "Senior",
      date: "June 19, 2025",
      content: "I had the pleasure of working alongside Chidanandan on several projects, and I was consistently impressed by their technical expertise and collaborative spirit. He brings a strong problem-solving mindset to every challenge and is always willing to share knowledge with the team. Chidanandan communicates clearly, writes clean and maintainable code, and is dedicated to delivering high-quality results.",
      rating: 5
    },
    {
      name: "Anandhaprabhu Subramaniam",
      title: "Staff Software Engineer at Walmart Global Tech",
      relationship: "Mentor",
      date: "January 10, 2024",
      content: "I highly recommend Chidanandan for their outstanding work on our media-based project's Voot and Zee5 Player integration. Chidanandan was not only a dedicated and wonderful person to work with but also demonstrated exceptional technical skills. They successfully did the player integrations, worked on analytics, and improved performance by implementing a service worker. Chidanandan's technical proficiency, dedication, and positive attitude make them an invaluable asset to any team.",
      rating: 5
    },
    {
      name: "Kirankumar Shingatalur",
      title: "UX Specialist | Frontend development, ReactJs, NextJs, NodeJs, TypeScript, Redux, Backstage",
      relationship: "Senior",
      date: "November 12, 2021",
      content: "I worked with Chidanandan in the same team for an year in Valtech. Even though he was fresher he was very good in learning quickly, taking up new challenges and coordinating with team, I enjoyed working with him and wishing him 'All the best'.",
      rating: 5
    },
    {
      name: "Barath Kumar Ravi",
      title: "Head of Engineering at Coto | AI & LLM | Specialist in Mobile Apps & Full Stack Development | Leader in OTT & Media Technologies",
      relationship: "Senior",
      date: "June 10, 2021",
      content: "Chidanandan is good team player and has strong technical knowledge on JavaScript technologies. He is a quick learner and ready to take challenge always",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Recommendations</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            What colleagues and mentors say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.relationship}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            These recommendations reflect my commitment to technical excellence, collaboration, and continuous learning.
          </p>
          <div className="flex justify-center gap-2 sm:gap-3">
            <Badge variant="outline" className="text-xs sm:text-sm">Technical Excellence</Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">Team Collaboration</Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">Quick Learner</Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">Problem Solver</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
