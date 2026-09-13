---
name: mobile-ux-architect
description: >-
  Guides ergonomic mobile UX architecture, bottom sheets, thumb-zone navigation,
  floating quick-actions, touch target sizing, and responsive layout patterns
  for Víctor Reyes's digital portfolio.
---

# Mobile UX Architect Skill

This skill guides the design and implementation of mobile-first ergonomic patterns to maximize engagement, conversion, and comfort on touch devices.

## Key Mobile UX Patterns

### 1. Thumb-Zone Bottom Quick Dock
On mobile viewports (`<768px`), users hold devices with one hand.
Place a high-utility bottom dock with:
- Quick scroll to Top / Hero
- Proyectos (instant jump to portfolio gallery)
- WhatsApp (instant 1-tap connection)
- AI Chat (opens Gemini assistant)

Include `env(safe-area-inset-bottom)` to clear iOS home indicator bars.

### 2. Native Bottom-Sheet Modals
Instead of tiny centered dialogs on phones:
```tsx
<div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
  <motion.div
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '100%' }}
    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    className="w-full sm:max-w-2xl max-h-[88vh] rounded-t-2xl sm:rounded-2xl bg-brand-card p-6 overflow-y-auto"
  >
    {/* Optional drag handle bar */}
    <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-4 sm:hidden" />
    {/* Modal Content */}
  </motion.div>
</div>
```

### 3. Touch Scrollable Tabs
For category navigation (e.g. E-Commerce, SaaS, Python, Web Apps):
- Enable smooth horizontal touch swiping: `flex gap-2 overflow-x-auto pb-2 scrollbar-none`
- Prevent text wrapping inside pill buttons: `whitespace-nowrap`
- Keep pills minimum 44px height for effortless tapping.

### 4. Input Auto-Zoom Prevention
Always declare:
```tsx
<input className="text-base sm:text-sm ..." />
```
Never use font sizes under `16px` on mobile inputs to prevent iOS Safari auto-zooming.
