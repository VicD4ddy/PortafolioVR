---
name: motion-animations
description: Directs implementation and maintenance of 60 FPS hardware-accelerated animations using motion (Framer Motion v12) in Víctor Reyes's portfolio.
---

# Motion Animations Skill

Use this skill when designing, improving, or adding motion-driven UI experiences.

## Core Patterns with `motion/react`

1. **Scroll-Driven Reveals (`whileInView`)**:
   - Always set `viewport={{ once: true, margin: '-50px' }}` to prevent repetitive jarring triggers.
   - Use initial/animate tuples:
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 24 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
   >
     {children}
   </motion.div>
   ```

2. **Continuous Organic Floating Badges**:
   - For tech badges and ambient icons, use multi-keyframe looping:
   ```tsx
   animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
   transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
   ```

3. **Staggered Child Entrances**:
   - Parent defines `variants={{ visible: { transition: { staggerChildren: 0.12 } } }}`.
   - Children define `variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}`.

4. **Dynamic Layout Transitions (`AnimatePresence`)**:
   - Wrap dynamically filtered project grids with `<AnimatePresence mode="popLayout">`.
   - Provide each child element with `<motion.div layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}>`.
