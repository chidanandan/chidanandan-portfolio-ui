import Header from '../Header'
import { ThemeProvider } from '../ThemeProvider'

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 p-8">
          <h2 className="text-2xl font-bold mb-4">Header Component Example</h2>
          <p className="text-muted-foreground">
            Navigation header with theme toggle and smooth scroll navigation.
          </p>
        </div>
      </div>
    </ThemeProvider>
  )
}