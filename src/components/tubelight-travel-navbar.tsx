"use client"

import { Home, Compass, Hotel, UtensilsCrossed, MapPin, Bot } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function TubelightTravelNavbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Explore', url: '/explore', icon: Compass },
    { name: 'Hotels', url: '/hotels', icon: Hotel },
    { name: 'Restaurants', url: '/restaurants', icon: UtensilsCrossed },
    { name: 'Attractions', url: '/attractions', icon: MapPin },
    { name: 'AI Planner', url: '/ai-planner', icon: Bot }
  ]

  return <NavBar items={navItems} />
}