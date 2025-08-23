# 🍫 VitaBite – Landing Page Documentation

## 🎨 Design System

**Colors (TailwindCSS):**

- Background (Dark Mode First): `bg-zinc-900`
- Accent / Primary: `text-emerald-500` / `bg-emerald-500 hover:bg-emerald-600`
- Secondary: `text-amber-400`
- Neutral Text: `text-zinc-100`
- Muted Text: `text-zinc-400`
- Cards: `bg-zinc-800 border border-zinc-700`
- CTA Buttons: `bg-emerald-500 text-white rounded-2xl shadow-md hover:bg-emerald-600 transition`

**Font:**

- Headings: **Poppins** (bold, modern, rounded)
- Body: **Inter** (clean, readable)

---

## 📑 Page Structure

### 1. **Navbar**

- Sticky top
- Left: VitaBite logo (simple text logo or leaf/energy icon)
- Center/Right: Nav links → _Home | Benefits | Flavors | Reviews | Buy Now_
- Right: CTA button **"Shop Now"**

---

### 2. **Hero Section**

- Full height (`h-screen`), flexbox center
- Left (text):
  - Heading (H1): **"Fuel Your Day with Natural Energy."**
  - Subheading (p): _"VitaBite is the protein bar made with 100% natural ingredients — no sugar, no nonsense, just pure energy."_
  - CTA buttons: **"Buy Now"** (primary, emerald) and **"Learn More"** (secondary, outlined)
- Right (image):
  - Mockup of VitaBite bar package + floating ingredients (nuts, oats, cocoa)

---

### 3. **Benefits Section**

- 3 columns on desktop, stacked on mobile
- Heading (H2): **"Why Choose VitaBite?"**
- Cards (rounded-2xl, shadow-md, bg-zinc-800):
  1. Icon (🌱) + Title: _"100% Natural"_  
     Text: _"Made with plant-based proteins, organic fruits and nuts."_
  2. Icon (⚡) + Title: _"Boosts Energy"_  
     Text: _"Balanced nutrition designed to keep you active all day."_
  3. Icon (💪) + Title: _"High in Protein"_  
     Text: _"Packed with 15g of protein to fuel muscles and recovery."_

---

### 4. **Flavors Section**

- Heading (H2): **"Find Your Flavor"**
- Grid of 3 product cards:
  - Card Style: `bg-zinc-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition`
  - Card Content:
    - Image of bar
    - Title (H3): e.g. _"Cocoa Crunch"_
    - Description: _"Rich cocoa with a nutty twist."_
    - CTA: **"Shop Now"** button
- Example flavors:
  1. Cocoa Crunch (dark theme, accent amber)
  2. Berry Bliss (light fresh accent pink-500)
  3. Peanut Power (warm accent yellow-500)

---

### 5. **Reviews Section**

- Heading (H2): **"What Our Customers Say"**
- 2–3 Testimonials (cards with rounded corners, avatar, name, short text):
  - Example:
    - ⭐⭐⭐⭐⭐  
      _"Finally a protein bar that doesn’t taste like cardboard. VitaBite keeps me energized during workouts!"_  
      — _Sarah M._
- Slider or static grid depending on your ambition

---

### 6. **CTA Section (Highlight)**

- Full-width, dark background with accent
- Big heading: **"Ready to Bite into Energy?"**
- Text: _"Order your VitaBite box today and feel the difference."_
- Button: **"Buy Now"** (emerald, extra large)

---

### 7. **Footer**

- 2 columns:
  - Left: Logo + short description (_"VitaBite – Pure Energy. Pure Nature."_)
  - Right: Links (Home, Shop, Contact, Terms)
- Bottom: © VitaBite 2025 – All rights reserved.

---

## 🗂️ Sections Overview (with Tailwind utility hints)

- **Navbar:** `sticky top-0 bg-zinc-900/90 backdrop-blur-md`
- **Hero:** `grid grid-cols-1 md:grid-cols-2 gap-10 items-center`
- **Cards:** `bg-zinc-800 border border-zinc-700 rounded-2xl shadow-lg`
- **Buttons:** `bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl px-6 py-3 font-semibold transition`
- **Headings:** `text-4xl md:text-5xl font-bold text-white`
- **Text body:** `text-zinc-300 leading-relaxed`

---

## ✅ Key Visual Style

- Dark, modern, energetic
- Accent color: Emerald (healthy / natural vibe)
- Rounded cards, soft shadows
- Mix of lifestyle photos + minimal UI icons
- Font contrast: bold Poppins for headings, clean Inter for text
