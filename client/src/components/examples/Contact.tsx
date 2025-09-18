import Contact from '../Contact'
import { ThemeProvider } from '../ThemeProvider'

export default function ContactExample() {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground">
        <Contact />
      </div>
    </ThemeProvider>
  )
}