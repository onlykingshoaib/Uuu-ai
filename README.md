# Social Media Account Planner 🚀

A modern, AI-powered web application that guides users through creating a successful TikTok/Social Media account strategy in just 3 steps. Built with Next.js 14, Tailwind CSS, and TypeScript.

## Features ✨

### Phase 1: Brainstorming & Naming
- **Describe Your Niche**: Enter your content idea via text or voice input
- **10 Unique Names**: AI generates 10 account name suggestions
- **AI's Top Choice**: Highlighted recommendation with visual badge
- **One-Click Selection**: Click any name to proceed

### Phase 2: Visual & Identity Setup
- **Profile Picture Guide**: Detailed description of recommended DP/Logo style with tips
- **Professional Bio**: High-conversion bio layout ready to copy
- **3 Category Suggestions**: Niche-specific content categories for your strategy
- **One-Click Copy**: Copy all content directly to clipboard

### Phase 3: Content & Research Strategy
For each of the 3 categories:
- **YouTube Research Queries**: Specific search terms to find trending content
- **Video Content Advice**: Guidelines on what videos to create
- **Success Pack**: 
  - Engaging captions (1-2 lines)
  - Niche-specific hashtag sets (8-10 hashtags)
  - One-click copy and YouTube search functionality

## UI/UX Highlights 🎨

- ✅ **Modern Dark Theme**: Eye-friendly, professional dark interface
- ✅ **Wizard-Style Flow**: Step-by-step guidance without overwhelming
- ✅ **Zero-Latency Feel**: Smooth animations and instant interactions
- ✅ **Mobile First**: Perfectly optimized for iPhone and Android
- ✅ **Copy to Clipboard**: Every output has one-click copy
- ✅ **Responsive Design**: Works seamlessly on all screen sizes
- ✅ **Progress Indicator**: Visual step tracker with back navigation

## Tech Stack 🛠️

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.3
- **Language**: TypeScript 5
- **UI Icons**: Lucide React
- **AI Integration**: Ready for OpenAI API (fallback demo data included)
- **Deployment**: Optimized for Vercel

## Quick Start 🚀

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Setup environment (optional)
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage 🎯

1. **Describe Your Niche**: Tell the AI about your content idea (text or voice input)
2. **Generate Names**: Get 10 unique account name ideas with AI recommendation
3. **Choose & Continue**: Select your preferred name
4. **Setup Identity**: Review profile guide, bio, and content categories
5. **Get Strategy**: Receive YouTube research queries, video advice, captions, and hashtags
6. **Launch**: Copy content and start creating!

## Project Structure 📁

```
/components          # React components (Phase 1-3, Wizard)
/app/api/generate    # Backend API routes
/lib                 # Utilities (AI generation, clipboard)
/app                 # Next.js app (layout, pages)
tailwind.config.js   # Tailwind configuration
```

## Features in Detail

### Phase 1: Input & Brainstorming
- Text input field with placeholder guidance
- Voice input button (5-second recording)
- Submit to generate 10 account names
- AI's Top Choice highlighted with badge
- Click any name to select and proceed

### Phase 2: Visual & Identity Setup
- Profile picture generation guide with actionable tips
- Professional, high-conversion bio template
- 3 distinct content categories with descriptions
- One-click copy for bio and picture guide

### Phase 3: Content & Research Strategy
For each category:
- Specific YouTube search query
- Video content creation advice
- Engaging caption templates (1-2 lines)
- Niche-specific hashtag sets (8-10 hashtags)
- YouTube search button (opens search results)
- Copy buttons for all outputs

## Customization

### Edit Colors
Update `tailwind.config.js`:
```javascript
colors: {
  purple: { /* change primary */ },
  pink: { /* change accent */ },
}
```

### Use Real AI (OpenAI)
1. Get API key: [platform.openai.com](https://platform.openai.com)
2. Add to `.env.local`: `OPENAI_API_KEY=sk-...`
3. Update API routes in `app/api/generate/`
4. Remove fallback data generator calls

### Mobile Testing
```bash
# Get your IP
ipconfig getifaddr en0    # macOS
hostname -I               # Linux

# Access from phone
http://YOUR_IP:3000
```

## Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance
- ✅ Code splitting with Next.js
- ✅ Tailwind CSS optimization
- ✅ Zero layout shift (CLS optimized)
- ✅ LCP < 2.5s
- ✅ Mobile-first responsive
- ✅ Dark mode optimized

## API Endpoints

All endpoints return fallback demo data by default. Integrate OpenAI for real AI generation.

- `POST /api/generate/names` - Generate account names
- `POST /api/generate/identity` - Generate bio & profile guide
- `POST /api/generate/categories` - Generate content categories
- `POST /api/generate/content-strategy` - Generate strategy
- `POST /api/generate/success-pack` - Generate captions & hashtags

## See Also
- [QUICKSTART.md](QUICKSTART.md) - 5-minute setup guide
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)

## License
MIT License - Use freely for personal or commercial projects

---

Built with ❤️ for content creators | Make Social Media Work for You 🚀