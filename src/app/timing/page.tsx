"use client"

import { useState } from "react"
import { Calendar, Thermometer, Cloud, Sun, Snowflake, Umbrella } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchBar } from "@/components/search-bar"

const destinations = [
  {
    id: "goa",
    name: "Goa",
    location: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=250&fit=crop",
    bestMonths: ["November", "December", "January", "February", "March"],
    peakSeason: "December - February",
    weather: {
      temperature: "20°C - 32°C",
      rainfall: "Low",
      humidity: "Moderate"
    },
    activities: ["Beach activities", "Water sports", "Nightlife", "Sightseeing"],
    avoid: ["June - September (Monsoon)"],
    tips: "Book accommodations early for December-January as it's peak tourist season."
  },
  {
    id: "manali",
    name: "Manali",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    bestMonths: ["March", "April", "May", "June", "October", "November"],
    peakSeason: "April - June",
    weather: {
      temperature: "10°C - 25°C",
      rainfall: "Moderate",
      humidity: "Low"
    },
    activities: ["Trekking", "Adventure sports", "Sightseeing", "Photography"],
    avoid: ["December - February (Heavy snow)", "July - September (Monsoon)"],
    tips: "Visit in May-June for pleasant weather and blooming flowers."
  },
  {
    id: "kerala",
    name: "Kerala",
    location: "India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=250&fit=crop",
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    peakSeason: "December - February",
    weather: {
      temperature: "23°C - 32°C",
      rainfall: "Low to Moderate",
      humidity: "Moderate"
    },
    activities: ["Backwater cruises", "Ayurveda treatments", "Wildlife safaris", "Tea plantation tours"],
    avoid: ["June - September (Heavy monsoon)"],
    tips: "Post-monsoon (October-November) offers lush greenery and pleasant weather."
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    location: "India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=250&fit=crop",
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    peakSeason: "November - February",
    weather: {
      temperature: "10°C - 27°C",
      rainfall: "Very Low",
      humidity: "Low"
    },
    activities: ["Palace tours", "Desert safaris", "Cultural festivals", "Photography"],
    avoid: ["April - September (Extreme heat)"],
    tips: "Winter months offer perfect weather for exploring palaces and desert areas."
  },
  {
    id: "ladakh",
    name: "Ladakh",
    location: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=250&fit=crop",
    bestMonths: ["June", "July", "August", "September"],
    peakSeason: "July - August",
    weather: {
      temperature: "15°C - 30°C (Day), -5°C - 15°C (Night)",
      rainfall: "Very Low",
      humidity: "Very Low"
    },
    activities: ["High altitude trekking", "Motorcycle tours", "Monastery visits", "Photography"],
    avoid: ["October - May (Roads closed due to snow)"],
    tips: "Limited season due to extreme weather. Book well in advance for summer months."
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=250&fit=crop",
    bestMonths: ["February", "March", "April", "May", "September", "October", "November"],
    peakSeason: "March - May, September - November",
    weather: {
      temperature: "15°C - 35°C",
      rainfall: "Moderate",
      humidity: "Moderate"
    },
    activities: ["River rafting", "Yoga retreats", "Trekking", "Spiritual activities"],
    avoid: ["June - August (Monsoon - dangerous for rafting)"],
    tips: "Best for adventure activities in pre and post-monsoon seasons."
  }
]

const seasonalTips = [
  {
    season: "Winter (Dec - Feb)",
    icon: Snowflake,
    destinations: ["Goa", "Kerala", "Rajasthan"],
    description: "Perfect for beach destinations and desert regions with pleasant weather."
  },
  {
    season: "Summer (Mar - May)",
    icon: Sun,
    destinations: ["Hill Stations", "Kashmir", "Himachal"],
    description: "Ideal for mountain destinations and hill stations to escape the heat."
  },
  {
    season: "Monsoon (Jun - Sep)",
    icon: Umbrella,
    destinations: ["Western Ghats", "Northeast India"],
    description: "Great for experiencing lush greenery, but avoid coastal and adventure activities."
  },
  {
    season: "Post-Monsoon (Oct - Nov)",
    icon: Cloud,
    destinations: ["Most of India", "Kerala", "Goa"],
    description: "Excellent time for most destinations with clear skies and pleasant weather."
  }
]

export default function TimingPage() {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (!query.trim()) {
      setFilteredDestinations(destinations)
      return
    }

    const filtered = destinations.filter(dest =>
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.location.toLowerCase().includes(query.toLowerCase()) ||
      dest.activities.some(activity => activity.toLowerCase().includes(query.toLowerCase()))
    )
    setFilteredDestinations(filtered)
  }

  const getSeasonBadgeColor = (month: string) => {
    const winterMonths = ["December", "January", "February"]
    const summerMonths = ["March", "April", "May"]
    const monsoonMonths = ["June", "July", "August", "September"]
    const postMonsoonMonths = ["October", "November"]

    if (winterMonths.includes(month)) return "bg-blue-100 text-blue-800"
    if (summerMonths.includes(month)) return "bg-orange-100 text-orange-800"
    if (monsoonMonths.includes(month)) return "bg-green-100 text-green-800"
    if (postMonsoonMonths.includes(month)) return "bg-purple-100 text-purple-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">


        {/* Seasonal Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Travel by Season
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalTips.map((tip) => (
              <Card key={tip.season} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-3">
                    <tip.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{tip.season}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">{tip.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {tip.destinations.map((dest) => (
                      <Badge key={dest} variant="secondary" className="text-xs">
                        {dest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Destinations */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Destination-wise Guide
          </h2>
          
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 mb-4">No destinations found matching your search.</p>
              <button 
                onClick={() => {
                  setSearchQuery("")
                  setFilteredDestinations(destinations)
                }}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredDestinations.map((destination) => (
                <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{destination.name}</h3>
                          <p className="text-sm text-slate-600">{destination.location}</p>
                        </div>
                        <Calendar className="h-5 w-5 text-indigo-600" />
                      </div>

                      <div className="space-y-4">
                        {/* Best Months */}
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Best Months</h4>
                          <div className="flex flex-wrap gap-1">
                            {destination.bestMonths.map((month) => (
                              <Badge 
                                key={month} 
                                className={`text-xs ${getSeasonBadgeColor(month)}`}
                                variant="secondary"
                              >
                                {month}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Weather Info */}
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Weather</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <Thermometer className="h-3 w-3 text-red-500" />
                              <span>{destination.weather.temperature}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Cloud className="h-3 w-3 text-blue-500" />
                              <span>{destination.weather.rainfall} rainfall</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Sun className="h-3 w-3 text-yellow-500" />
                              <span>{destination.weather.humidity} humidity</span>
                            </div>
                          </div>
                        </div>

                        {/* Peak Season */}
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Peak Season</h4>
                          <p className="text-sm text-slate-600">{destination.peakSeason}</p>
                        </div>

                        {/* Avoid */}
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Avoid</h4>
                          <p className="text-sm text-red-600">{destination.avoid.join(", ")}</p>
                        </div>

                        {/* Tips */}
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Pro Tip</h4>
                          <p className="text-sm text-slate-600">{destination.tips}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}