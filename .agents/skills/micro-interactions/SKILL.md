---
name: micro-interactions
description: Guides tactile feedback, hover depth, interactive counters, and dynamic user responses in Víctor Reyes's digital portfolio.
---

# Micro-Interactions Skill

This skill governs immediate feedback loops that make the interface feel alive and premium.

## Key Interaction Archetypes

1. **Animated Number Rolling (Counters)**:
   - Rolling up numbers from 0 to destination (`27+`, `100%`, `<0.8s`) when scrolled into view.
   - Use easing functions that slow down towards completion for natural momentum.

2. **Card Glow & Depth on Hover**:
   - Subtle translateY (`-4px` to `-8px`).
   - Border transition from muted `rgba(255, 255, 255, 0.08)` to active `rgba(245, 176, 39, 0.6)`.
   - Shadow expansion: `hover:shadow-2xl hover:shadow-black/70`.

3. **Tactile Button Clicks**:
   - `active:scale-95` on primary interactive buttons.
   - Immediate visual feedback on actions (e.g. "Copiado" status with checkmark).

4. **Floating Ambient Accents**:
   - Background subtle radial glows with opacity breathing cycles (`opacity: [0.4, 0.8, 0.4]`).
