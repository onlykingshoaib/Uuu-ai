# 🚀 SETUP INSTRUCTIONS - Get Started NOW

## Step 1: Install Dependencies (1 minute)

```bash
cd /workspaces/Uuu-ai
npm install
```

**What this does**: Downloads Next.js, React, Tailwind CSS, and all other dependencies.

**Expected output**: Should complete without errors. May take a few minutes.

---

## Step 2: Start the Development Server (30 seconds)

```bash
npm run dev
```

**Expected output**:
```
> ready - started server on 0.0.0.0:3000
> Local: http://localhost:3000
```

**Keep this terminal open!** It runs the live development server.

---

## Step 3: Open in Browser (10 seconds)

Click this link or open in browser:
📱 **http://localhost:3000**

**You should see**:
- Title: "Social Media Account Planner"
- Subtitle: "AI-powered wizard to launch your winning social media strategy"
- Step 1 form with text input and voice button
- "Generate 10 Account Names" button

---

## Step 4: Test the Application (5 minutes)

### Phase 1 Test:
1. Type in the text area: `"fitness coaching"`
2. Click "Generate 10 Account Names 🚀"
3. Should see 10 names with first one marked "AI's Top Choice ⭐"
4. Click any name
5. Click "Continue to Identity Setup →"

### Phase 2 Test:
1. Should see profile picture guide, bio, and 3 categories
2. Click the "Copy" button next to any text
3. Should show "Copied!" in green for 2 seconds
4. Click "Continue to Content Strategy →"

### Phase 3 Test:
1. Should see 3 sections (Tips & Tricks, Behind-the-Scenes, Trends & Challenges)
2. Each section has YouTube query, advice, caption, and hashtags
3. Click "Search" button - should open YouTube in new tab
4. Click copy buttons - should copy text
5. Scroll to bottom - should see "You're All Set!" section

**✅ If all tests pass, your app is working perfectly!**

---

## Optional: Test on Mobile

Open another terminal:

```bash
# Get your computer's IP address
hostname -I
```

Then on your phone, open:
```
http://[YOUR_IP_HERE]:3000
```

Example: `http://192.168.1.100:3000`

---

## Optional: Add OpenAI Integration

Want real AI instead of demo data?

1. Get free credits: https://platform.openai.com/account/billing/overview

2. Create API key: https://platform.openai.com/api-keys

3. Update `.env.local`:
   ```env
   OPENAI_API_KEY=sk-your_actual_key_here
   ```

4. Stop the dev server (Ctrl+C)

5. Update API routes (advanced):
   - Each file in `/app/api/generate/` needs OpenAI integration
   - See IMPLEMENTATION_GUIDE.md for code examples

6. Restart: `npm run dev`

---

## Common Issues & Quick Fixes

### ❌ Error: "Port 3000 already in use"
```bash
# Use a different port:
PORT=3001 npm run dev
# Then visit: http://localhost:3001
```

### ❌ Error: "npm not found"
```bash
# Install Node.js from: https://nodejs.org
# Then try npm install again
```

### ❌ Styles not loading / page looks broken
```bash
# Clear Next.js cache:
rm -rf .next
npm run dev
```

### ❌ Can't see the app
```bash
# Make sure you're visiting: http://localhost:3000
# Make sure the terminal shows: "ready - started server"
# Check that you ran: npm install && npm run dev
```

### ❌ Copy button doesn't work
- Make sure you're on `localhost` or `https://`
- Some browsers block clipboard on `http://`
- Check browser console for errors (F12 > Console tab)

---

## What to Do Now

### ✅ The Quick Path (5 minutes)
1. Install: `npm install`
2. Run: `npm run dev`
3. Visit: `http://localhost:3000`
4. Test all 3 phases
5. 🎉 Done!

### ⭐ The Full Path (15 minutes)
1. Complete the Quick Path above
2. Read PROJECT_SUMMARY.md (understand what was built)
3. Read IMPLEMENTATION_GUIDE.md (technical details)
4. Explore the code in `/components` and `/app/api`
5. Customize colors in `tailwind.config.js`
6. Consider OpenAI integration

### 🚀 The Deployment Path (30 minutes)
1. Complete the Full Path above
2. Read DEPLOYMENT.md
3. Choose deployment platform (Vercel recommended)
4. Follow platform-specific instructions
5. Deploy in 5 minutes

---

## File Guide for Developers

### Want to understand how it works?

| File | Purpose | When to Edit |
|------|---------|-------------|
| `components/Wizard.tsx` | Main app flow | When adding new phases |
| `components/Phase1Input.tsx` | Name generation | When changing input |
| `components/Phase2Identity.tsx` | Profile setup | When changing identity |
| `components/Phase3Content.tsx` | Content strategy | When changing strategy |
| `app/api/generate/*.ts` | Backend logic | When adding AI |
| `tailwind.config.js` | Colors & theme | When customizing look |
| `app/globals.css` | Global styles | When adding utilities |
| `.env.local` | Environment vars | When adding API keys |

---

## Getting Help

| Question | Answer |
|----------|--------|
| How do I deploy? | See DEPLOYMENT.md |
| How does it work? | See IMPLEMENTATION_GUIDE.md |
| What was built? | See PROJECT_SUMMARY.md |
| Quick overview? | See README.md |

---

## Keyboard Shortcuts in Dev

| Key | Control |
|-----|---------|
| `Ctrl+C` | Stop the dev server |
| `Ctrl+K, Ctrl+R` | Hard refresh in VS Code |
| `F12` | Open browser dev tools |
| `F5` | Refresh page |

---

## Next Commands to Run

```bash
# When you're ready to build for production:
npm run build

# To start the production build locally:
npm start

# To check for code quality:
npm run lint
```

---

## 🎉 You're Ready!

Your complete Social Media Account Planner is ready to go.

**Start now:**
```bash
npm install
npm run dev
```

**Then visit:** http://localhost:3000

**Questions?** Check the documentation files:
- PROJECT_SUMMARY.md - What was built
- IMPLEMENTATION_GUIDE.md - How it works
- DEPLOYMENT.md - How to deploy
- README.md - Full documentation

---

**Happy coding! 🚀**

Built with ❤️ | Next.js 14 + React 18 + Tailwind CSS 3 + TypeScript 5
