import { Button } from "@/components/ui/button"

const suggestions = [
  "Plan my trip",
  "Best time to visit",
  "Budget itinerary", 
  "Honeymoon destinations",
  "Solo travel tips",
  "Family-friendly places"
]

interface PromptSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void
}

export function PromptSuggestions({ onSuggestionClick }: PromptSuggestionsProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-500 font-medium">Quick suggestions:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion}
            variant="outline"
            size="sm"
            onClick={() => onSuggestionClick(suggestion)}
            className="text-xs h-7 rounded-xl"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  )
}