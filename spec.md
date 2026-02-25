# Specification

## Summary
**Goal:** Replace the existing landing page entirely with a new "Into The Backrooms" website themed around the Backrooms and Dreamcore aesthetic.

**Planned changes:**
- Overwrite App.tsx and all existing section components; remove all references to "Dark Fantasy by Ricay", photo enhancement, pricing, testimonials, and knight imagery
- Apply a Backrooms/Dreamcore visual theme: muted yellowed-fluorescent greens (#c8c87a, #b5b84a), liminal beige (#d4c9a0), off-white (#e8e8d8), void black (#080808), pale cyan (#a8d8d8), faded lavender (#c4b8d8), noise/grain texture overlay, and a "flicker" CSS keyframe animation
- Build a full-screen Hero section with headline "You Weren't Supposed to Find This", subheadline about infinite liminal space, an "Enter" CTA button, flickering fluorescent CSS animation, and a Backrooms environment hero background image
- Build a "What Are The Backrooms?" lore section with atmospheric copy, a large pull-quote, and a generated hallway image
- Build a "Levels" grid section with four cards: Level 0 (The Lobby), Level 1 (Habitable Zone), Level ! (The False Level), and The Poolrooms — each with a generated image, name, description, and hover glow effect
- Build a "Dreamcore" section with explanatory copy and a masonry-style grid of four dreamcore scene images (swing set, pastel corridor, misty lake, empty pool)
- Build a "Survival Guide" section styled as a distressed typewriter document listing five survival tips, with monospace font and paper/grain texture
- Build a Footer with site name "Into The Backrooms", tagline "The walls are not what they seem.", smooth-scroll navigation links, and a fan project disclaimer
- Update index.html with page title "Into The Backrooms", updated meta description, Open Graph tags, and Google Font imports (monospace + sans-serif)
- Update index.css and tailwind.config.js with Backrooms/Dreamcore color tokens, noise/grain utility class, and flicker keyframe; remove old dark fantasy tokens
- Place all generated images in frontend/public/assets/generated and reference them in components

**User-visible outcome:** Visitors see a fully themed "Into The Backrooms" liminal/dreamcore website with hero, lore, levels, dreamcore mood board, survival guide, and footer sections — replacing all previous photo enhancement content.
