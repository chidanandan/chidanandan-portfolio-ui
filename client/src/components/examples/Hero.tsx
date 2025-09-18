import Hero from '../Hero'
import { ThemeProvider } from '../ThemeProvider'

export default function HeroExample() {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground">
        <Hero />
      </div>
    </ThemeProvider>
  )
}