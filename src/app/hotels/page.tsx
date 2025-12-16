"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Wifi, Car, Coffee, Star } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { FilterDrawer } from "@/components/filter-drawer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RatingBadge } from "@/components/rating-badge"

const hotels = [
  {
    id: "leela-goa",
    name: "The Leela Goa",
    location: "Cavelossim Beach, Goa",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 1247,
    price: "₹12,000",
    originalPrice: "₹15,000",
    amenities: ["Free WiFi", "Pool", "Spa", "Beach Access"],
    description: "Luxury beachfront resort with world-class amenities and stunning ocean views."
  },
  {
    id: "taj-manali",
    name: "Taj Theog Resort & Spa",
    location: "Theog, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 892,
    price: "₹8,500",
    originalPrice: "₹11,000",
    amenities: ["Mountain View", "Spa", "Restaurant", "Gym"],
    description: "Serene mountain retreat perfect for couples and families seeking tranquility."
  },
  {
    id: "kerala-backwater",
    name: "Kumarakom Lake Resort",
    location: "Kumarakom, Kerala",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 654,
    price: "₹9,200",
    originalPrice: "₹12,500",
    amenities: ["Lake View", "Ayurveda Spa", "Boat Rides", "Pool"],
    description: "Traditional Kerala architecture meets luxury in this backwater paradise."
  },
  {
    id: "rajasthan-palace",
    name: "Umaid Bhawan Palace",
    location: "Jodhpur, Rajasthan",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop",
    rating: 4.9,
    reviewCount: 1456,
    price: "₹25,000",
    originalPrice: "₹30,000",
    amenities: ["Heritage", "Museum", "Palace Dining", "Gardens"],
    description: "Experience royal luxury in this magnificent palace hotel with rich history."
  }
]

const amenityIcons = {
  "Free WiFi": Wifi,
  "Pool": "🏊",
  "Spa": "💆",
  "Beach Access": "🏖️",
  "Mountain View": "🏔️",
  "Restaurant": Coffee,
  "Gym": "💪",
  "Lake View": "🌊",
  "Ayurveda Spa": "🧘",
  "Boat Rides": "🚤",
  "Heritage": "🏛️",
  "Museum": "🏛️",
  "Palace Dining": "👑",
  "Gardens": "🌺",
  "Parking": Car
}

export default function HotelsPage() {
  const [filteredHotels, setFilteredHotels] = useState(hotels)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(query.toLowerCase()) ||
      hotel.location.toLowerCase().includes(query.toLowerCase()) ||
      hotel.description.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredHotels(filtered)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Find Hotels
          </h1>
          <p className="text-slate-600">
            Discover comfortable stays for your perfect trip
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <SearchBar 
            placeholder="Search hotels by name, location, or amenities..."
            onSearch={handleSearch}
          />
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">
              {filteredHotels.length} hotels found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            <FilterDrawer />
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="space-y-6">
          {filteredHotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-1 text-slate-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                    </div>
                    <RatingBadge 
                      rating={hotel.rating} 
                      reviewCount={hotel.reviewCount}
                      size="md"
                    />
                  </div>

                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {hotel.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 4).map((amenity) => {
                      const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons]
                      return (
                        <span
                          key={amenity}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg"
                        >
                          {typeof IconComponent === "string" ? (
                            <span>{IconComponent}</span>
                          ) : IconComponent ? (
                            <IconComponent className="h-3 w-3" />
                          ) : null}
                          {amenity}
                        </span>
                      )
                    })}
                    {hotel.amenities.length > 4 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg">
                        +{hotel.amenities.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-slate-900">
                        {hotel.price}
                      </span>
                      <span className="text-sm text-slate-500 line-through">
                        {hotel.originalPrice}
                      </span>
                      <span className="text-sm text-slate-600">per night</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline">
                        View Details
                      </Button>
                      <Button>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredHotels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 mb-4">No hotels found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery("")
                setFilteredHotels(hotels)
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