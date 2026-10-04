# VCAN 3D – Next.js + Tailwind redesign

Stack: Next.js 14 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion · lucide-react

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things are
- `tailwind.config.ts`  – original brand colours (saffron #FF9933, green #138808, navy #000080, dark #0B0F19)
- `lib/data.tsx`        – contact details, services, steps, materials (edit text here)
- `lib/services-content.json` – text of the 8 service detail pages (from the old site)
- `components/`         – Navbar, Hero, Stats, About, Services, Industries, Process, WhyUs, Contact, CTA, Footer
- `app/services/[slug]` – one template that generates all 8 service pages
- `public/assets/`      – images
