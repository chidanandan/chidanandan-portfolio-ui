import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function Header() {
  const { theme, setTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Chidanandan P</span>
        </div>
        
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
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-projects"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="nav-contact"
          >
            Contact
          </button>
        </nav>

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
    </header>
  )
}