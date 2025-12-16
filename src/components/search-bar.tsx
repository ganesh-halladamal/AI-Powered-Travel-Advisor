"use client"

import { useState } from "react"
import { Search, MapPin, Clock } from "lucide-react"

const recentSearches = [
  "Goa beaches",
  "Manali honeymoon",
  "Bengaluru restaurants",
  "Kerala backwaters",
]

const popularDestinations = [
  "Goa", "Manali", "Kerala", "Rajasthan", "Himachal Pradesh", "Uttarakhand"
]

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export function SearchBar({ placeholder = "Search destinations, hotels, restaurants...", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query)
      setIsOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSearch()
    }
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Search Input Container */}
      <div className="relative flex items-center bg-white border-2 border-slate-200 rounded-2xl shadow-xl hover:border-slate-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-200 overflow-hidden">
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Search className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400" />
        </div>
        
        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 h-14 sm:h-16 pl-12 pr-4 text-base sm:text-lg bg-transparent border-0 outline-none placeholder:text-slate-400 text-slate-900"
          aria-label="Search for destinations, hotels, or restaurants"
          role="searchbox"
        />
        
        {/* Search Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            handleSearch()
          }}
          disabled={!query.trim()}
          className="m-2 h-10 sm:h-12 px-4 sm:px-6 bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 text-sm sm:text-base flex-shrink-0"
          aria-label="Search destinations"
        >
          Search
        </button>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full p-4 bg-white border border-slate-200 rounded-2xl shadow-lg z-50">
          {query.length === 0 && (
            <>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Recent Searches</span>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => {
                        setQuery(search)
                        onSearch?.(search)
                        setIsOpen(false)
                      }}
                      className="block w-full text-left px-2 py-1 text-sm text-slate-600 hover:bg-slate-50 rounded"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Popular Destinations</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularDestinations.map((destination) => (
                    <button
                      key={destination}
                      onClick={() => {
                        setQuery(destination)
                        onSearch?.(destination)
                        setIsOpen(false)
                      }}
                      className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
                    >
                      {destination}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}