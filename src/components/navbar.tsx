"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, User, Bookmark, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navigation = [
  { name: "Explore", href: "/explore" },
  { name: "Best Time", href: "/timing" },
  { name: "Hotels", href: "/hotels" },
  { name: "Restaurants", href: "/restaurants" },
  { name: "Attractions", href: "/attractions" },
  { name: "AI Planner", href: "/ai-planner" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500" />
              <span className="text-xl font-bold text-slate-900">TravelAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-indigo-100 text-indigo-900 font-semibold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100">
              <User className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-xl text-base font-medium transition-colors",
                    pathname === item.href
                      ? "bg-indigo-100 text-indigo-900 font-semibold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 px-3 py-2">
                <Button variant="ghost" size="icon" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-700 hover:text-slate-900 hover:bg-slate-100">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}