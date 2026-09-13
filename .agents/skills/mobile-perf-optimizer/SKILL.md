---
name: mobile-perf-optimizer
description: >-
  Audits and optimizes Core Web Vitals (LCP, INP, CLS) on mobile devices,
  low-latency touch responses, reduced memory footprint, and battery-friendly CSS.
---

# Mobile Performance Optimizer Skill

Ensures Víctor Reyes's digital portfolio maintains 60 FPS fluidity, instant tap response (<100ms), and rapid load times on 3G/4G networks.

## Core Directives

### 1. Zero Tap Delay & Manipulations
Apply to global interactive elements:
```css
button, a, input, select, textarea {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
```
This removes the legacy 300ms double-tap zoom delay on mobile devices.

### 2. Interaction to Next Paint (INP) Optimization
- Keep touch handlers lightweight.
- Defer non-critical computations with `requestAnimationFrame` or `setTimeout`.
- Use CSS transitions for micro-interactions (`active:scale-95`) rather than JS-heavy layout mutations.

### 3. GPU Compositing on Mobile
- Animate only `transform` and `opacity`.
- Avoid heavy nested `backdrop-filter: blur(20px)` on mobile screens if frame rates drop below 55 FPS; fall back to high-opacity solid backgrounds (`bg-brand-dark/95`).
- Ensure hardware acceleration with `transform: translateZ(0)` where appropriate.

### 4. Image & Media Optimization
- Use WebP format and avatars served with optimal compression.
- Explicitly declare `width` and `height` attributes on images to eliminate Cumulative Layout Shift (CLS).
