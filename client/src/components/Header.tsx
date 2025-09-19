import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { useState } from "react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Chidanandan P</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-skills"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-experience"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-education"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-projects"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-achievements"
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-testimonials"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-contact"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle mobile menu</span>
        </Button>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            data-testid="button-theme-toggle"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-muted/50"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-muted/50"
              data-testid="mobile-nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-muted/50"
              data-testid="mobile-nav-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="block w-full text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-muted/50"
              data-testid="mobile-nav-education"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-muted/50"
              data-testid="mobile-nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="block w-full text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-muted/50"
              data-testid="mobile-nav-achievements"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-muted/50"
              data-testid="mobile-nav-testimonials"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-muted/50"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}