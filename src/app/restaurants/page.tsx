"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Clock, DollarSign, Utensils } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { FilterDrawer } from "@/components/filter-drawer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RatingBadge } from "@/components/rating-badge"

const restaurants = [
  {
    id: "thalassa-goa",
    name: "Thalassa",
    location: "Vagator Beach, Goa",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 1847,
    cuisine: "Greek, Mediterranean",
    priceRange: "₹₹₹",
    avgCost: "₹2,000 for two",
    timing: "12:00 PM - 1:00 AM",
    specialties: ["Seafood Platter", "Greek Salad", "Sunset Views"],
    description: "Iconic clifftop restaurant offering authentic Greek cuisine with breathtaking sunset views over the Arabian Sea."
  },
  {
    id: "johnson-cafe-manali",
    name: "Johnson's Cafe",
    location: "Old Manali, Himachal Pradesh", 
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 923,
    cuisine: "Continental, Indian",
    priceRange: "₹₹",
    avgCost: "₹800 for two",
    timing: "8:00 AM - 11:00 PM",
    specialties: ["Trout Fish", "Apple Pie", "Mountain Views"],
    description: "Cozy mountain cafe famous for fresh trout and homemade desserts in a beautiful garden setting."
  },
  {
    id: "dal-roti-kerala",
    name: "Dal Roti",
    location: "Fort Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
    rating: 4.5,
    reviewCount: 1234,
    cuisine: "Kerala, South Indian",
    priceRange: "₹₹",
    avgCost: "₹1,200 for two",
    timing: "11:00 AM - 11:00 PM",
    specialties: ["Fish Curry", "Appam", "Coconut-based dishes"],
    description: "Authentic Kerala cuisine in a heritage building with traditional recipes passed down through generations."
  },
  {
    id: "chokhi-dhani-rajasthan",
    name: "Chokhi Dhani",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=300&fit=crop",
    rating: 4.3,
    reviewCount: 2156,
    cuisine: "Rajasthani, North Indian",
    priceRange: "₹₹₹",
    avgCost: "₹1,800 for two",
    timing: "7:00 PM - 11:00 PM",
    specialties: ["Dal Baati Churma", "Laal Maas", "Cultural Shows"],
    description: "Experience royal Rajasthani hospitality with traditional thali and live cultural performances in village-style setting."
  },
  {
    id: "chotiwala-rishikesh",
    name: "Chotiwala Restaurant",
    location: "Rishikesh, Uttarakhand",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
    rating: 4.2,
    reviewCount: 876,
    cuisine: "North Indian, Vegetarian",
    priceRange: "₹",
    avgCost: "₹600 for two",
    timing: "6:00 AM - 10:00 PM",
    specialties: ["Aloo Puri", "Chole Bhature", "Lassi"],
    description: "Legendary vegetarian restaurant serving authentic North Indian food to pilgrims and travelers since 1958."
  }
]

const cuisineTypes = [
  "All Cuisines", "Indian", "Continental", "Chinese", "Italian", "Mediterranean", "Thai", "Mexican"
]

const priceRanges = [
  { symbol: "₹", label: "Budget (Under ₹500)", range: "budget" },
  { symbol: "₹₹", label: "Mid-range (₹500-₹1500)", range: "mid" },
  { symbol: "₹₹₹", label: "Fine Dining (₹1500+)", range: "premium" }
]

export default function RestaurantsPage() {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterRestaurants(query, selectedCuisine)
  }

  const handleCuisineFilter = (cuisine: string) => {
    setSelectedCuisine(cuisine)
    filterRestaurants(searchQuery, cuisine)
  }

  const filterRestaurants = (query: string, cuisine: string) => {
    let filtered = restaurants

    if (query) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.location.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.specialties.some(specialty => 
          specialty.toLowerCase().includes(query.toLowerCase())
        )
      )
    }

    if (cuisine !== "All Cuisines") {
      filtered = filtered.filter(restaurant =>
        restaurant.cuisine.toLowerCase().includes(cuisine.toLowerCase())
      )
    }

    setFilteredRestaurants(filtered)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Discover Restaurants
          </h1>
          <p className="text-slate-600">
            Find the best dining experiences for your taste and budget
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <SearchBar 
            placeholder="Search restaurants, cuisines, or dishes..."
            onSearch={handleSearch}
          />
          
          {/* Cuisine Filter */}
          <div className="flex flex-wrap gap-2">
            {cuisineTypes.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => handleCuisineFilter(cuisine)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedCuisine === cuisine
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">
              {filteredRestaurants.length} restaurants found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            <FilterDrawer />
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="space-y-6">
          {filteredRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {restaurant.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Utensils className="h-4 w-4" />
                          {restaurant.cuisine}
                        </div>
                      </div>
                    </div>
                    <RatingBadge 
                      rating={restaurant.rating} 
                      reviewCount={restaurant.reviewCount}
                      size="md"
                    />
                  </div>

                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {restaurant.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {restaurant.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-lg"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-medium">{restaurant.avgCost}</span>
                        <span className="text-slate-500">({restaurant.priceRange})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {restaurant.timing}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline">
                        View Menu
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
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 mb-4">No restaurants found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery("")
                setSelectedCuisine("All Cuisines")
                setFilteredRestaurants(restaurants)
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