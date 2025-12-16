"use client"

import { useState } from "react"
import { Heart, MapPin, Calendar, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DestinationCard } from "@/components/destination-card"

const bookmarkedDestinations = [
  {
    id: "ladakh",
    name: "Ladakh",
    location: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 2156,
    description: "High-altitude desert with stunning landscapes, Buddhist monasteries, and thrilling mountain passes.",
    price: "₹6,500/day",
    tags: ["Mountains", "Adventure", "Unique"],
    isBookmarked: true,
    savedDate: "2024-12-10"
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    location: "Andaman & Nicobar",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 1834,
    description: "Pristine beaches, crystal clear waters, and rich marine life perfect for diving and snorkeling.",
    price: "₹7,200/day",
    tags: ["Beach", "Adventure", "Islands"],
    isBookmarked: true,
    savedDate: "2024-12-08"
  },
  {
    id: "spiti",
    name: "Spiti Valley",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 987,
    description: "Cold desert mountain valley with ancient monasteries and breathtaking landscapes.",
    price: "₹4,800/day",
    tags: ["Mountains", "Culture", "Offbeat"],
    isBookmarked: true,
    savedDate: "2024-12-05"
  },
  {
    id: "coorg",
    name: "Coorg",
    location: "Karnataka",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 1456,
    description: "Coffee plantations, misty hills, and waterfalls make this the Scotland of India.",
    price: "₹3,800/day",
    tags: ["Nature", "Coffee", "Hills"],
    isBookmarked: true,
    savedDate: "2024-12-01"
  }
]

const bookmarkedHotels = [
  {
    id: "taj-lake-palace",
    name: "Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    type: "Hotel",
    price: "₹35,000/night",
    savedDate: "2024-12-12"
  },
  {
    id: "wildflower-hall",
    name: "Wildflower Hall",
    location: "Shimla, Himachal Pradesh", 
    type: "Hotel",
    price: "₹18,000/night",
    savedDate: "2024-12-09"
  }
]

const bookmarkedRestaurants = [
  {
    id: "indian-accent",
    name: "Indian Accent",
    location: "New Delhi",
    type: "Restaurant",
    cuisine: "Modern Indian",
    savedDate: "2024-12-11"
  },
  {
    id: "trishna",
    name: "Trishna",
    location: "Mumbai, Maharashtra",
    type: "Restaurant", 
    cuisine: "Seafood",
    savedDate: "2024-12-07"
  }
]

export default function BookmarksPage() {
  const [activeTab, setActiveTab] = useState("destinations")
  const [destinations, setDestinations] = useState(bookmarkedDestinations)
  const [hotels, setHotels] = useState(bookmarkedHotels)
  const [restaurants, setRestaurants] = useState(bookmarkedRestaurants)

  const removeBookmark = (id: string, type: string) => {
    switch (type) {
      case "destinations":
        setDestinations(prev => prev.filter(item => item.id !== id))
        break
      case "hotels":
        setHotels(prev => prev.filter(item => item.id !== id))
        break
      case "restaurants":
        setRestaurants(prev => prev.filter(item => item.id !== id))
        break
    }
  }

  const tabs = [
    { id: "destinations", label: "Destinations", count: destinations.length },
    { id: "hotels", label: "Hotels", count: hotels.length },
    { id: "restaurants", label: "Restaurants", count: restaurants.length }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Heart className="h-8 w-8 text-red-500" />
            My Bookmarks
          </h1>
          <p className="text-slate-600">
            Your saved destinations, hotels, and restaurants for future trips
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-slate-100 p-1 rounded-2xl w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === "destinations" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <div key={destination.id} className="relative">
                <DestinationCard {...destination} />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-3 left-3 h-8 w-8"
                  onClick={() => removeBookmark(destination.id, "destinations")}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/90 px-2 py-1 rounded-xl text-xs text-slate-600">
                    Saved {new Date(destination.savedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
            {destinations.length === 0 && (
              <div className="col-span-full text-center py-12">
                <Heart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">No destinations bookmarked yet</p>
                <p className="text-sm text-slate-400 mt-1">Start exploring and save your favorite places!</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "hotels" && (
          <div className="space-y-4">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{hotel.name}</h3>
                      <div className="flex items-center gap-1 text-slate-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                      <p className="text-sm text-slate-500">
                        Saved on {new Date(hotel.savedDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">{hotel.price}</p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeBookmark(hotel.id, "hotels")}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {hotels.length === 0 && (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">No hotels bookmarked yet</p>
                <p className="text-sm text-slate-400 mt-1">Save hotels you'd like to stay at!</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "restaurants" && (
          <div className="space-y-4">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{restaurant.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {restaurant.location}
                        </div>
                        <span>{restaurant.cuisine}</span>
                      </div>
                      <p className="text-sm text-slate-500">
                        Saved on {new Date(restaurant.savedDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Menu
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeBookmark(restaurant.id, "restaurants")}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {restaurants.length === 0 && (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">No restaurants bookmarked yet</p>
                <p className="text-sm text-slate-400 mt-1">Save restaurants you want to try!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}