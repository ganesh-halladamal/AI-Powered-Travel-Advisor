import { Star } from "lucide-react"

interface RatingBadgeProps {
  rating: number
  reviewCount?: number
  size?: "sm" | "md" | "lg"
  showReviews?: boolean
}

export function RatingBadge({ 
  rating, 
  reviewCount, 
  size = "sm", 
  showReviews = true 
}: RatingBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2"
  }

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4", 
    lg: "h-5 w-5"
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "bg-emerald-100 text-emerald-800"
    if (rating >= 4.0) return "bg-green-100 text-green-800"
    if (rating >= 3.5) return "bg-yellow-100 text-yellow-800"
    return "bg-orange-100 text-orange-800"
  }

  return (
    <div className={`inline-flex items-center gap-1 rounded-xl font-medium ${sizeClasses[size]} ${getRatingColor(rating)}`}>
      <Star className={`${iconSizes[size]} fill-current`} />
      <span>{rating.toFixed(1)}</span>
      {showReviews && reviewCount && (
        <span className="opacity-75">({reviewCount})</span>
      )}
    </div>
  )
}