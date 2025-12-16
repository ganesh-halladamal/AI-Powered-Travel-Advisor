"use client"

import { useState } from "react"
import { Filter, X, DollarSign, Users, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface FilterState {
  budget: string[]
  tripType: string[]
  duration: string[]
  rating: number
  sortBy: string
}

const filterOptions = {
  budget: [
    { id: "budget", label: "Budget (₹0-₹5,000)", value: "0-5000" },
    { id: "mid", label: "Mid-range (₹5,000-₹15,000)", value: "5000-15000" },
    { id: "luxury", label: "Luxury (₹15,000+)", value: "15000+" },
  ],
  tripType: [
    { id: "solo", label: "Solo Travel", value: "solo" },
    { id: "couple", label: "Couple", value: "couple" },
    { id: "family", label: "Family", value: "family" },
    { id: "friends", label: "Friends", value: "friends" },
  ],
  duration: [
    { id: "weekend", label: "Weekend (1-2 days)", value: "1-2" },
    { id: "short", label: "Short Trip (3-5 days)", value: "3-5" },
    { id: "week", label: "Week (6-7 days)", value: "6-7" },
    { id: "extended", label: "Extended (8+ days)", value: "8+" },
  ],
  sortBy: [
    { id: "popular", label: "Most Popular", value: "popular" },
    { id: "budget", label: "Budget Friendly", value: "budget" },
    { id: "rating", label: "Highest Rated", value: "rating" },
    { id: "newest", label: "Newest", value: "newest" },
  ]
}

interface FilterDrawerProps {
  onFiltersChange?: (filters: FilterState) => void
}

export function FilterDrawer({ onFiltersChange }: FilterDrawerProps) {
  const [filters, setFilters] = useState<FilterState>({
    budget: [],
    tripType: [],
    duration: [],
    rating: 0,
    sortBy: "popular"
  })

  const [isOpen, setIsOpen] = useState(false)

  const updateFilter = (category: keyof FilterState, value: string | number) => {
    const newFilters = { ...filters }
    
    if (category === "rating") {
      newFilters[category] = value as number
    } else if (category === "sortBy") {
      newFilters[category] = value as string
    } else {
      const currentValues = newFilters[category] as string[]
      if (currentValues.includes(value as string)) {
        newFilters[category] = currentValues.filter(v => v !== value)
      } else {
        newFilters[category] = [...currentValues, value as string]
      }
    }
    
    setFilters(newFilters)
    onFiltersChange?.(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      budget: [],
      tripType: [],
      duration: [],
      rating: 0,
      sortBy: "popular"
    }
    setFilters(clearedFilters)
    onFiltersChange?.(clearedFilters)
  }

  const activeFilterCount = filters.budget.length + filters.tripType.length + filters.duration.length + (filters.rating > 0 ? 1 : 0)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative">
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 bg-indigo-500 text-white text-xs rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Filters
            {activeFilterCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Budget */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Budget Range
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {filterOptions.budget.map((option) => (
                <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.budget.includes(option.value)}
                    onChange={() => updateFilter("budget", option.value)}
                    className="rounded border-slate-300"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Trip Type */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Users className="h-4 w-4" />
                Trip Type
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {filterOptions.tripType.map((option) => (
                <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.tripType.includes(option.value)}
                    onChange={() => updateFilter("tripType", option.value)}
                    className="rounded border-slate-300"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Duration */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Trip Duration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {filterOptions.duration.map((option) => (
                <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.duration.includes(option.value)}
                    onChange={() => updateFilter("duration", option.value)}
                    className="rounded border-slate-300"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Rating */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Star className="h-4 w-4" />
                Minimum Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                {[3, 3.5, 4, 4.5, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => updateFilter("rating", rating)}
                    className={`px-3 py-1 rounded-xl text-sm transition-colors ${
                      filters.rating === rating
                        ? "bg-indigo-500 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {rating}+
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sort By */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Sort By</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {filterOptions.sortBy.map((option) => (
                <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sortBy"
                    checked={filters.sortBy === option.value}
                    onChange={() => updateFilter("sortBy", option.value)}
                    className="border-slate-300"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}