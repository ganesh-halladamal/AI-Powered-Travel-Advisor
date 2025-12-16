import { Button } from "@/components/ui/button"

const suggestions = [
  "Plan a 5-day Kerala trip",
  "Best time to visit Manali",
  "Budget breakdown for Goa", 
  "Honeymoon destinations in India",
  "Adventure activities in Rishikesh",
  "Family-friendly places in Rajasthan"
]

interface PromptSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void
}

export function PromptSuggestions({ onSuggestionClick }: PromptSuggestionsProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-500 font-medium">Quick suggestions:</p>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion}
            variant="outline"
            size="sm"
            onClick={() => onSuggestionClick(suggestion)}
            className="text-xs h-6 sm:h-7 px-2 sm:px-3 rounded-xl flex-shrink-0"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  )
}