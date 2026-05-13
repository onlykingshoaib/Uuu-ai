# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Setup Environment
```bash
cp .env.local.example .env.local
# Edit .env.local if you have an OpenAI API key
```

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: Open Browser
Visit `http://localhost:3000`

## 💡 How to Use

1. **Describe Your Niche**
   - Type or use voice input to describe your content idea
   - Click "Generate 10 Account Names"

2. **Choose Your Account Name**
   - Select from the generated names
   - "AI's Top Choice" is highlighted
   - Click "Continue to Identity Setup"

3. **Set Up Your Identity**
   - Review profile picture guide
   - Copy professional bio
   - Explore 3 content categories
   - Click "Continue to Content Strategy"

4. **Get Content Strategy**
   - View YouTube research queries
   - Get video content advice
   - Copy engaging captions
   - Use hashtag sets
   - Click YouTube search button to research

## 🔑 Integration with OpenAI (Optional)

To use real AI generation instead of fallback data:

1. Get API key from [OpenAI](https://platform.openai.com)
2. Add to `.env.local`:
   ```
   OPENAI_API_KEY=sk-...
   ```
3. Update API routes in `app/api/generate/` to use OpenAI
4. Restart dev server

## 📱 Test on Mobile

```bash
# Find your IP address
ipconfig getifaddr en0  # macOS
hostname -I             # Linux

# Access from phone browser
http://YOUR_IP:3000
```

## 🛠️ Build for Production
```bash
npm run build
npm start
```

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [OpenAI API](https://platform.openai.com/docs)

## ❓ FAQ

**Q: Does it need OpenAI API key?**
A: No! The app works perfectly with fallback demo data. OpenAI is optional for real AI generation.

**Q: Can I use it on mobile?**
A: Yes! It's fully responsive and mobile-first optimized.

**Q: Can I copy content to clipboard?**
A: Yes! Every output has a one-click copy button.

**Q: Can I search TikTok from the app?**
A: The app provides YouTube search queries. You can manually search TikTok with the suggestions.

## 🎨 Customization

Edit these files to customize:
- **Colors**: `tailwind.config.js`
- **Layout**: Components in `/components`
- **Content**: API routes in `app/api/generate/`
- **Text**: Search for hardcoded strings in components

---

**Need help?** Check the main README.md file!
