---
name: mobile-responsive-auditor
description: >-
  Audits viewports (iPhone SE 375px, Android 360px, modern smartphones 390-430px,
  tablets 768px) for horizontal overflow, clipped text, safe area insets, and tap targets.
---

# Mobile Responsive Auditor Skill

Systematic audit checklist for ensuring flawless rendering and functionality across all mobile device form factors.

## Viewport Target Matrix

| Device Profile | Viewport Width | Key Consideration |
| :--- | :--- | :--- |
| **Small Mobile** (iPhone SE, Galaxy A) | 360px – 375px | Avoid multi-column text wrap; ensure modals fit within 340px width |
| **Standard Mobile** (iPhone 14/15, Galaxy S) | 390px – 414px | Check safe area insets around home indicator and notch/dynamic island |
| **Large Mobile / Phablets** (Pro Max, Ultra) | 428px – 440px | Ensure hero typography scales proportionally |
| **Tablets** (iPad mini, Air) | 768px – 834px | Seamless transition from bottom dock to desktop header |

## Audit Checklist
1. **Horizontal Scroll Check**: Run `document.documentElement.scrollWidth > window.innerWidth`. Must ALWAYS return `false`.
2. **Fixed Positioning Safety**: Ensure `bottom-` elements include `calc(Xrem + env(safe-area-inset-bottom))`.
3. **Tap Target Sizes**: Verify all clickable icons (close buttons, social icons, links) are >= 44x44px bounding box.
4. **Header Navigation**: Confirm mobile hamburger drawer opens smoothly, locks body scroll, and closes automatically upon clicking a link.
5. **AI Assistant Box**: Ensure it centers or anchors neatly without overflowing the viewport width on 360px screens.
