"use strict";(()=>{var e={};e.id=1,e.ids=[1],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5312:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>m,patchFetch:()=>g,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d});var i={};t.r(i),t.d(i,{POST:()=>u});var n=t(9303),o=t(8716),a=t(670),s=t(7070);async function u(e){try{let{accountName:r,niche:t}=await e.json();if(!r||!t)return s.NextResponse.json({error:"Account name and niche are required"},{status:400});let i={profilePictureGuide:`Create a professional, modern profile picture featuring:
• Bold, vibrant colors that represent your ${t} niche
• Clear, recognizable logo or personal branding
• High contrast for visibility on mobile devices
• Minimalist design that works at small sizes
• Your unique personality or brand mascot

Tips:
- Use a 1:1 square format (512x512px minimum)
- Ensure it's recognizable even when scaled down to 64x64px
- Test it on mobile to ensure clarity
- Make it memorable and aligned with your brand`,bio:`${r} | 📱 ${t} Creator | 🚀 Growth Hacks & Tips
💡 Daily insights to level up your ${t} game
🎯 Subscribe for exclusive tutorials & strategies
✨ Join our community of ${t} enthusiasts`};return s.NextResponse.json(i,{status:200})}catch(e){return console.error("Error in /api/generate/identity:",e),s.NextResponse.json({error:"Internal server error"},{status:500})}}let p=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/generate/identity/route",pathname:"/api/generate/identity",filename:"route",bundlePath:"app/api/generate/identity/route"},resolvedPagePath:"/workspaces/Uuu-ai/app/api/generate/identity/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:c}=p,m="/api/generate/identity/route";function g(){return(0,a.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[276,972],()=>t(5312));module.exports=i})();