import Link from "next/link"

const footerLinks = {
  Destinations: [
    { name: "Popular Cities", href: "/explore" },
    { name: "Beach Destinations", href: "/explore?type=beach" },
    { name: "Mountain Retreats", href: "/explore?type=mountain" },
    { name: "Cultural Sites", href: "/explore?type=culture" },
  ],
  Planning: [
    { name: "AI Trip Planner", href: "/ai-planner" },
    { name: "Budget Calculator", href: "/tools/budget" },
    { name: "Travel Tips", href: "/tips" },
    { name: "Best Time to Visit", href: "/timing" },
  ],
  Support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500" />
              <span className="text-xl font-bold text-slate-900">TravelAI</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Your AI-powered travel companion for discovering amazing destinations and planning perfect trips.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 text-center">
            © 2024 TravelAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}