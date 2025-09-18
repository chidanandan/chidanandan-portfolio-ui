import Projects from '../Projects'
import { ThemeProvider } from '../ThemeProvider'

export default function ProjectsExample() {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground">
        <Projects />
      </div>
    </ThemeProvider>
  )
}