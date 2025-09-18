import { ThemeProvider } from '../ThemeProvider'
import { Button } from "@/components/ui/button"

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8 space-y-4">
        <h2 className="text-2xl font-bold">Theme Provider Example</h2>
        <p className="text-muted-foreground">This component provides theme context for the entire application.</p>
        <Button>Sample Button</Button>
      </div>
    </ThemeProvider>
  )
}