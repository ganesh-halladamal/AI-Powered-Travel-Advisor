"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Clock, Ticket, Camera } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { FilterDrawer } from "@/components/filter-drawer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RatingBadge } from "@/components/rating-badge"

const attractions = [
  {
    id: "baga-beach",
    name: "Baga Beach",
    location: "North Goa, Goa",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
    rating: 4.3,
    reviewCount: 3247,
    category: "Beach",
    entryFee: "Free",
    timing: "24 Hours",
    duration: "2-4 hours",
    highlights: ["Water Sports", "Nightlife", "Beach Shacks", "Parasailing"],
    description: "Famous beach known for its vibrant nightlife, water sports, and bustling beach shacks serving fresh seafood."
  },
  {
    id: "rohtang-pass",
    name: "Rohtang Pass",
    location: "Manali, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    rating: 4.5,
    reviewCount: 2156,
    category: "Mountain Pass",
    entryFee: "₹50 (Permit required)",
    timing: "6:00 AM - 6:00 PM",
    duration: "Full Day",
    highlights: ["Snow Activities", "Mountain Views", "Photography", "Adventure Sports"],
    description: "High mountain pass offering spectacular views, snow activities, and gateway to Lahaul and Spiti valleys."
  },
  {
    id: "backwaters-alleppey",
    name: "Alleppey Backwaters",
    location: "Alleppey, Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 1876,
    category: "Natural Wonder",
    entryFee: "₹500-₹8000 (Houseboat)",
    timing: "24 Hours",
    duration: "4-24 hours",
    highlights: ["Houseboat Cruise", "Village Life", "Bird Watching", "Sunset Views"],
    description: "Serene network of canals, rivers, and lakes offering peaceful houseboat experiences through rural Kerala."
  },
  {
    id: "amber-fort",
    name: "Amber Fort",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 4521,
    category: "Heritage",
    entryFee: "₹100 (Indians), ₹500 (Foreigners)",
    timing: "8:00 AM - 6:00 PM",
    duration: "2-3 hours",
    highlights: ["Rajput Architecture", "Mirror Palace", "Elephant Rides", "Light & Sound Show"],
    description: "Magnificent hilltop fort showcasing Rajput architecture with intricate mirror work and stunning city views."
  },
  {
    id: "laxman-jhula",
    name: "Laxman Jhula",
    location: "Rishikesh, Uttarakhand",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 1654,
    category: "Religious",
    entryFee: "Free",
    timing: "24 Hours",
    duration: "1-2 hours",
    highlights: ["Suspension Bridge", "River Views", "Temples", "Spiritual Atmosphere"],
    description: "Iconic suspension bridge over the Ganges, connecting temples and ashrams in the yoga capital of the world."
  },
  {
    id: "pangong-lake",
    name: "Pangong Lake",
    location: "Ladakh, Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 987,
    category: "Natural Wonder",
    entryFee: "₹20 (Inner Line Permit required)",
    timing: "Sunrise to Sunset",
    duration: "Full Day",
    highlights: ["High Altitude Lake", "Color Changing Waters", "Camping", "Photography"],
    description: "Breathtaking high-altitude lake famous for its ever-changing colors and stunning Himalayan backdrop."
  }
]

const categories = [
  "All Categories", "Beach", "Heritage", "Natural Wonder", "Mountain Pass", "Religious", "Adventure"
]

export default function AttractionsPage() {
  const [filteredAttractions, setFilteredAttractions] = useState(attractions)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterAttractions(query, selectedCategory)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    filterAttractions(searchQuery, category)
  }

  const filterAttractions = (query: string, category: string) => {
    let filtered = attractions

    if (query) {
      filtered = filtered.filter(attraction =>
        attraction.name.toLowerCase().includes(query.toLowerCase()) ||
        attraction.location.toLowerCase().includes(query.toLowerCase()) ||
        attraction.description.toLowerCase().includes(query.toLowerCase()) ||
        attraction.highlights.some(highlight => 
          highlight.toLowerCase().includes(query.toLowerCase())
        )
      )
    }

    if (category !== "All Categories") {
      filtered = filtered.filter(attraction =>
        attraction.category === category
      )
    }

    setFilteredAttractions(filtered)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Top Attractions
          </h1>
          <p className="text-slate-600">
            Explore must-visit places and experiences across India
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <SearchBar 
            placeholder="Search attractions, activities, or locations..."
            onSearch={handleSearch}
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">
              {filteredAttractions.length} attractions found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            <FilterDrawer />
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="space-y-6">
          {filteredAttractions.map((attraction) => (
            <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 px-2 py-1 rounded-xl text-xs font-medium">
                      {attraction.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {attraction.name}
                      </h3>
                      <div className="flex items-center gap-1 text-slate-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{attraction.location}</span>
                      </div>
                    </div>
                    <RatingBadge 
                      rating={attraction.rating} 
                      reviewCount={attraction.reviewCount}
                      size="md"
                    />
                  </div>

                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {attraction.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {attraction.highlights.slice(0, 4).map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-sky-100 text-sky-800 text-xs rounded-lg"
                      >
                        {highlight}
                      </span>
                    ))}
                    {attraction.highlights.length > 4 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg">
                        +{attraction.highlights.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Ticket className="h-4 w-4" />
                        <span className="font-medium">{attraction.entryFee}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {attraction.timing}
                      </div>
                      <div className="flex items-center gap-1">
                        <Camera className="h-4 w-4" />
                        {attraction.duration}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline">
                        View Details
                      </Button>
                      <Button>
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredAttractions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 mb-4">No attractions found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All Categories")
                setFilteredAttractions(attractions)
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