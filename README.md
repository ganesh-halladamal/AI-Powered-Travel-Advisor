# TravelAI - AI-Powered Travel Advisor

A comprehensive travel planning platform that helps users discover destinations, explore accommodations, and generate personalized itineraries using AI.

## 🌟 Features

### Core Functionality
- **AI Travel Chatbot**: Intelligent travel advisor with personalized recommendations
- **Tubelight Navigation**: Modern animated navbar with glowing effects
- **Destination Discovery**: Explore curated destinations with detailed information
- **Hotel & Restaurant Search**: Find accommodations and dining options
- **Attraction Guides**: Discover must-visit places and activities
- **User Profiles**: Save trips, bookmarks, and preferences

### AI Capabilities
- **Real AI Integration**: Powered by OpenRouter API with Llama 3.1 8B model
- **Personalized trip planning** based on budget, duration, and preferences
- **Smart itinerary generation** with detailed day-by-day plans
- **Real-time travel advice** and recommendations
- **Budget optimization** suggestions with cost breakdowns
- **Best time to visit** recommendations for destinations

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Lucide Icons** for iconography
- **Framer Motion** for animations

### Backend
- **Next.js Server Actions** for API endpoints
- **Route Handlers** for custom API routes
- Modular, scalable architecture

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── explore/           # Destination discovery
│   ├── destination/[slug]/ # Individual destination pages
│   ├── hotels/            # Hotel listings
│   ├── restaurants/       # Restaurant listings
│   ├── attractions/       # Attraction listings
│   ├── ai-planner/        # AI chatbot interface
│   ├── profile/           # User profile
│   └── bookmarks/         # Saved items
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   │   ├── tubelight-navbar.tsx  # Modern animated navbar
│   │   └── button.tsx, card.tsx, etc.
│   ├── chat/             # Chat-related components
│   ├── tubelight-travel-navbar.tsx  # Travel-specific navbar
│   ├── footer.tsx        # Footer
│   ├── search-bar.tsx    # Search functionality
│   ├── destination-card.tsx
│   ├── rating-badge.tsx
│   └── filter-drawer.tsx
└── lib/                  # Utilities and helpers
    └── utils.ts          # Common utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd travel-advisor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Configuration

The project includes a `next.config.js` file that configures:
- **Image Optimization**: Allows images from Unsplash for demo purposes
- **Remote Patterns**: Secure image loading configuration

### Environment Variables

Create a `.env.local` file in the root directory:
```bash
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

The AI chat functionality uses OpenRouter API with the Llama 3.1 8B Instruct model for generating travel recommendations and itineraries.

## 🎨 Design System

### Color Palette
- **Background**: White / Zinc-50
- **Primary**: Slate / Indigo
- **Accent**: Emerald / Sky
- **Text**: Zinc-800 / Zinc-500

### Design Principles
- **Minimal**: Clean, uncluttered interfaces
- **Calm**: Soothing colors and gentle animations
- **Spacious**: Generous whitespace and breathing room
- **Readable**: Clear typography and good contrast

### Layout Rules
- Max width: 7xl (1280px) centered
- Soft shadows only
- Rounded corners: rounded-2xl
- Cards used sparingly for content grouping

## ✨ Tubelight Navigation

### Modern Animated Navbar
- **Glowing Effects**: Beautiful tube-light animation on active items
- **Responsive Design**: Icons on mobile, text labels on desktop
- **Smooth Transitions**: Framer Motion powered animations
- **Auto-Detection**: Automatically highlights current page
- **Floating Design**: Positioned at top on desktop, bottom on mobile

### Usage
```tsx
import { TubelightTravelNavbar } from "@/components/tubelight-travel-navbar"

// In your layout
<TubelightTravelNavbar />
```

## 🤖 AI Chatbot Features

### Supported Queries
- Trip planning: "Plan a 4-day budget trip to Goa"
- Destination advice: "Best food places in Bengaluru under ₹500"
- Weather guidance: "Is Bali good in July?"
- Itinerary creation: "Create a honeymoon itinerary for Manali"

### Chat Interface
- Floating chatbot button (bottom-right)
- Dedicated AI planner page
- Message streaming support
- Typing indicators
- Quick suggestion chips

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section with search
- Feature highlights
- Featured destinations
- Call-to-action sections

### Explore (`/explore`)
- Destination grid with filtering
- Search functionality
- Category-based browsing

### Destination Pages (`/destination/[slug]`)
- Hero image and overview
- Tabbed content (Overview, Hotels, Restaurants, Attractions, AI Suggestions)
- Quick info cards (best time, budget, duration)
- Booking integration points

### Hotels (`/hotels`)
- Hotel listings with amenities
- Price comparison
- Location-based filtering

### Restaurants (`/restaurants`)
- Restaurant discovery
- Cuisine-based filtering
- Price range indicators

### Attractions (`/attractions`)
- Activity and sightseeing options
- Category-based organization
- Entry fee and timing information

### AI Planner (`/ai-planner`)
- Full-screen chat interface
- Quick prompt suggestions
- Conversation history

### Profile (`/profile`)
- User dashboard
- Trip history
- Preferences management
- Notification settings

### Bookmarks (`/bookmarks`)
- Saved destinations, hotels, restaurants
- Organized by category
- Easy removal and planning

## 🔧 Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Clean folder structure
- Reusable components
- Separation of concerns

### Performance Optimizations
- Image optimization with Next.js Image
- Lazy loading for lists
- Server-side rendering where appropriate
- Static generation for destination pages

### SEO Features
- Dynamic metadata per page
- Semantic HTML structure
- Optimized images with alt text
- Clean URL structure

## 🚀 Future Enhancements

### Planned Features
- **Authentication**: Google/GitHub login
- **Trip Saving**: Persistent trip history
- **Multi-language**: International support
- **Booking Integration**: Direct hotel/flight booking
- **Admin Dashboard**: Content management
- **Analytics**: User behavior tracking
- **Offline Support**: PWA capabilities
- **Mobile App**: React Native version

### AI Improvements
- **Real-time Data**: Live pricing and availability
- **Personalization**: Learning user preferences
- **Voice Interface**: Speech-to-text integration
- **Image Recognition**: Photo-based recommendations

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS