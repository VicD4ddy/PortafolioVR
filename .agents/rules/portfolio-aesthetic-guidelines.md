---
description: Design and aesthetic standards for Víctor Reyes's high-impact digital portfolio
globs: ["src/**/*.{tsx,ts,css,html}"]
---

# Portfolio Aesthetic & Design Guidelines

These rules ensure that every component in Víctor Reyes's portfolio adheres to modern, luxury-dark web design standards with maximum visual impact and smooth performance.

## 1. Color Palette & Harmony
- **Background Base**: `#14161B` (Deep Carbon Charcoal).
- **Surface Elevation**: `#1A1D24` (Elevated Surface) and `#222631` (Card Base).
- **Card Hover**: `#2A2F3D` with subtle borders (`rgba(255, 255, 255, 0.08)` to `rgba(245, 176, 39, 0.4)`).
- **Brand Accent**: `#F5B027` (Amber Gold) and hover `#e5a11d`. Use as the signature focal accent.
- **Accents & Status**: Emerald `#34D399` for active/healthy indicators, Indigo/Violet `#818CF8` for secondary highlights.
- **Text Hierarchy**: Pure White `#FFFFFF` for primary titles, `#8A92A6` for descriptive secondary text, `#F5B027` for key milestones and links.

## 2. Typography & Spatial Rhythm
- Clean, modern sans-serif typography (`Inter` / system-ui).
- Generous line-height (`leading-relaxed` for body text, `leading-tight` for titles).
- Accent highlights with trailing gold punctuation (e.g. `Víctor Reyes.`).

## 3. Micro-Interactions & Motion
- Hover transitions should feel tactile: `transition-all duration-300 hover:-translate-y-1`.
- Ambient lighting: subtle radial gradients (`bg-brand-yellow/5 rounded-full blur-3xl`) behind key focal areas.
- Interactive feedback: pulse indicators for live status, smooth modals with backdrop blur.

## 4. Code Standards
- Keep components modular and accessible (`aria-label`, keyboard navigable).
- Do not use placeholder content or generic text (no Lorem Ipsum).
- Ensure high-fidelity responsiveness across mobile (<640px), tablet, and ultra-wide screens.
