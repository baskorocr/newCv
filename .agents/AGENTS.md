# Workspace Rules & Anti-AI Slop Standards

## 1. Avoid AI Slop UI
- **No Generic AI Blue/Purple Glows**: Unless specifically requested, avoid standard dark mode with high-saturation purple glowing borders.
- **Typography First**: Define modern typography scale (e.g. Outfit, Geist, Inter, Plus Jakarta Sans) with crisp tracking and leading.
- **Depth & Surface**: Use structured background surface layers (e.g. `bg-background`, `bg-surface-elevated`, `border-border/50`).
- **Interactive Feedback**: All clickable components must have tactile hover and active states (scale, brightness, or elevation shift).

## 2. Framer Motion Best Practices
- **Centralized Motion System**: Put shared motion variants in `@/lib/motion` or `@/components/motion`.
- **Reusable Motion Primitives**:
  - `FadeUp`: Subtle reveal on scroll (`whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}`).
  - `StaggerContainer`: Stagger children animations with `staggerChildren: 0.08`.
  - `MagneticButton`: Smooth magnetic physics for CTA buttons.
- **Performance**:
  - Avoid animating layout properties (`width`, `height`, `margin`) directly when transform (`scale`, `x`, `y`) can be used.
  - Use `layoutId` for smooth layout morphing (tabs, pills, nav active state).
