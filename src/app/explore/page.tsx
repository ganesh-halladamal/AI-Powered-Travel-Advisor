"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SearchBar } from "@/components/search-bar"
import { FilterDrawer } from "@/components/filter-drawer"
import { DestinationCard } from "@/components/destination-card"

const destinations = [
  {
    id: "goa",
    name: "Goa",
    location: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 2847,
    description: "Beautiful beaches, vibrant nightlife, and Portuguese heritage make Goa a perfect tropical getaway.",
    price: "₹3,500/day",
    tags: ["Beach", "Nightlife", "Culture"]
  },
  {
    id: "manali",
    name: "Manali",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 1923,
    description: "Snow-capped mountains, adventure sports, and cozy hill station vibes perfect for couples and families.",
    price: "₹4,200/day",
    tags: ["Mountains", "Adventure", "Honeymoon"]
  },
  {
    id: "kerala",
    name: "Kerala Backwaters",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 1654,
    description: "Serene backwaters, lush greenery, and traditional houseboats offer a unique peaceful experience.",
    price: "₹5,000/day",
    tags: ["Nature", "Peaceful", "Unique"]
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    location: "India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&h=300&fit=crop",
    rating: 4.5,
    reviewCount: 3241,
    description: "Royal palaces, desert landscapes, and rich cultural heritage showcase India's majestic history.",
    price: "₹4,800/day",
    tags: ["Culture", "Heritage", "Desert"]
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop",
    rating: 4.3,
    reviewCount: 1876,
    description: "Spiritual capital of India with yoga retreats, river rafting, and peaceful ashrams by the Ganges.",
    price: "₹2,800/day",
    tags: ["Spiritual", "Adventure", "Budget"]
  },
  {
    id: "ladakh",
    name: "Ladakh",
    location: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 2156,
    description: "High-altitude desert with stunning landscapes, Buddhist monasteries, and thrilling mountain passes.",
    price: "₹6,500/day",
    tags: ["Mountains", "Adventure", "Unique"]
  },
  {
    id: "mumbai",
    name: "Mumbai",
    location: "Maharashtra",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500&h=300&fit=crop",
    rating: 4.2,
    reviewCount: 4521,
    description: "The city that never sleeps with Bollywood glamour, street food, and bustling markets.",
    price: "₹4,000/day",
    tags: ["City", "Food", "Culture", "Bollywood"]
  },
  {
    id: "agra",
    name: "Agra",
    location: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 5632,
    description: "Home to the iconic Taj Mahal, one of the Seven Wonders of the World.",
    price: "₹3,200/day",
    tags: ["Heritage", "Culture", "Monument", "History"]
  },
  {
    id: "shimla",
    name: "Shimla",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=500&h=300&fit=crop",
    rating: 4.1,
    reviewCount: 2341,
    description: "Colonial hill station with toy train rides, pleasant weather, and scenic mountain views.",
    price: "₹3,800/day",
    tags: ["Mountains", "Colonial", "Honeymoon", "Scenic"]
  }
]

function ExploreContent() {
  const searchParams = useSearchParams()
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setIsSearching(true)
    
    // Simulate search delay for better UX
    setTimeout(() => {
      if (!query.trim()) {
        setFilteredDestinations(destinations)
        setIsSearching(false)
        return
      }

      const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0)
      
      const filtered = destinations.filter(dest => {
        const searchableText = [
          dest.name,
          dest.location,
          dest.description,
          ...dest.tags
        ].join(' ').toLowerCase()
        
        // Check if all search terms are found in the searchable text
        return searchTerms.every(term => searchableText.includes(term))
      })
      
      setFilteredDestinations(filtered)
      setIsSearching(false)
    }, 300)
  }

  // Handle search from URL parameters
  useEffect(() => {
    const searchFromUrl = searchParams.get('search')
    if (searchFromUrl) {
      handleSearch(searchFromUrl)
    }
  }, [searchParams])

  const handleFiltersChange = (filters: any) => {
    // Apply filters logic here
    console.log("Filters applied:", filters)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Explore Destinations
          </h1>
          <p className="text-slate-600">
            Discover amazing places for your next adventure
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <SearchBar 
            placeholder="Search destinations, activities, or locations..."
            onSearch={handleSearch}
            initialValue={searchQuery}
          />
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">
              {filteredDestinations.length} destinations found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            <FilterDrawer onFiltersChange={handleFiltersChange} />
          </div>
        </div>

        {/* Results Grid */}
        {isSearching ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <span className="ml-3 text-slate-600">Searching destinations...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 mb-4">No destinations found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery("")
                setFilteredDestinations(destinations)
              }}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Clear search and filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ExplorePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        <span className="ml-3 text-slate-600">Loading...</span>
      </div>
    }>
      <ExploreContent />
    </Suspense>
  )
}