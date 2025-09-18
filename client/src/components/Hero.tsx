import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import headshot from "@assets/generated_images/Professional_developer_headshot_404d5082.png"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const titles = [
    "Frontend Developer",
    "React Specialist",
    "Micro-Frontend Architect",
    "Software Engineer"
  ]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    let charIndex = 0
    
    const typeWriter = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.substring(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeWriter)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length)
          setDisplayText("")
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeWriter)
  }, [currentIndex])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Bengaluru, India</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Chidanandan</span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-muted-foreground mb-6 h-8">
              <span className="font-mono">{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Software Engineer with <strong>8+ years</strong> of experience crafting modern web applications. 
              Specialized in React, NextJS, and micro-frontend architectures. Currently building 
              innovative pricing solutions at <strong>A.P. Moller - Maersk</strong>.
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">NextJS</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Micro-Frontends</Badge>
              <Badge variant="secondary">AWS</Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={scrollToContact} data-testid="button-get-in-touch">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-download-resume">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Download Resume
                </a>
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button size="icon" variant="ghost" asChild data-testid="button-linkedin">
                <a href="https://www.linkedin.com/in/chidanandan-p/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-github">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-email">
                <a href="mailto:chidutramp@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-phone">
                <a href="tel:+918861493499">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
              <img
                src={headshot}
                alt="Chidanandan P - Software Engineer"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-card shadow-xl"
                data-testid="img-headshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}