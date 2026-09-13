---
description: Performance and timing standards for all dynamic animations across the portfolio
globs: ["src/**/*.{tsx,ts,css}"]
---

# Dynamic Animation & Motion Standards

To ensure that the portfolio feels ultra-responsive, luxurious, and maintains a 60 FPS frame rate on all devices:

1. **Hardware Acceleration**:
   - Only animate `transform` (`scale`, `x`, `y`, `rotate`) and `opacity`.
   - Never animate layout triggers like `width`, `height`, `margin`, or `top` directly without `layout` prop.

2. **Duration Budget**:
   - Micro-interactions (hover, button press): **150ms - 250ms**.
   - Content reveals & modals: **350ms - 550ms**.
   - Ambient background or floating loops: **3000ms - 6000ms**.

3. **Motion Curves**:
   - For UI interactions, use custom bezier curves like `[0.22, 1, 0.36, 1]` or `[0.16, 1, 0.3, 1]` (Deceleration/Out-Quart curve) rather than linear or abrupt transitions.

4. **Accessibility**:
   - Respect `prefers-reduced-motion` media query to ensure accessible navigation for all users.
