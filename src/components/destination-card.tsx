import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Bookmark, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RatingBadge } from "@/components/rating-badge"

interface DestinationCardProps {
  id: string
  name: string
  location: string
  image: string
  rating: number
  reviewCount: number
  description: string
  price?: string
  tags?: string[]
  isBookmarked?: boolean
}

export function DestinationCard({
  id,
  name,
  location,
  image,
  rating,
  reviewCount,
  description,
  price,
  tags = [],
  isBookmarked = false
}: DestinationCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className={`h-8 w-8 ${
              isBookmarked 
                ? "bg-indigo-500 text-white hover:bg-indigo-600" 
                : "bg-white/90 hover:bg-white"
            }`}
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        {price && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/90 px-2 py-1 rounded-xl text-sm font-medium">
              {price}
            </span>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <Link href={`/destination/${id}`}>
              <h3 className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                {name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
              <MapPin className="h-3 w-3" />
              {location}
            </div>
          </div>
          <RatingBadge rating={rating} reviewCount={reviewCount} />
        </div>

        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}