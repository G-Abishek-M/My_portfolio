---
name: Luminescent Atelier
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd7f1'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f1ff'
  surface-container: '#f0ebff'
  surface-container-high: '#eae5ff'
  surface-container-highest: '#e4dffa'
  on-surface: '#1b192c'
  on-surface-variant: '#494454'
  inverse-surface: '#302e42'
  inverse-on-surface: '#f3eeff'
  outline: '#7a7485'
  outline-variant: '#cbc3d6'
  surface-tint: '#6c3fce'
  primary: '#693bca'
  on-primary: '#ffffff'
  primary-container: '#8257e5'
  on-primary-container: '#fff9ff'
  inverse-primary: '#d0bcff'
  secondary: '#006684'
  on-secondary: '#ffffff'
  secondary-container: '#7fd7fe'
  on-secondary-container: '#005d79'
  tertiary: '#af1e42'
  on-tertiary: '#ffffff'
  tertiary-container: '#d13959'
  on-tertiary-container: '#fff9f8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5420b5'
  secondary-fixed: '#bee9ff'
  secondary-fixed-dim: '#79d1f8'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#004d64'
  tertiary-fixed: '#ffd9dc'
  tertiary-fixed-dim: '#ffb2ba'
  on-tertiary-fixed: '#400010'
  on-tertiary-fixed-variant: '#910030'
  background: '#fcf8ff'
  on-background: '#1b192c'
  surface-variant: '#e4dffa'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 88px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  editorial-italic:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2.25rem
  space-xl: 4rem
---

## Brand & Style

This design system frames creative development as contemporary digital atelier work. It merges the tactile, atmospheric sensitivity of painterly fine art with the exacting precision of cutting-edge creative engineering. The intended emotional response is wonder tempered by technical authority—a digital gallery where software feels crafted, luminous, and deliberate.

The visual grammar balances high-end editorial gallery curation with organic, airbrushed chromatic fields:
- **Atmospheric Chromatics:** Diffused, multi-layered aurora mesh clouds that breathe softly beneath glass surfaces, avoiding rigid boundaries.
- **Glassmorphic Precision:** Translucent physical layers (frosted slates, luminous pill badges) providing structural anchoring over dynamic pigment washes.
- **Tactile Grain & Surface:** Micro-fine organic noise overlaying canvases to evoke archival cotton rag paper within a digital screen space.
- **Curatorial Restraint:** Massive negative space, museum-grade typography hierarchies, and intentional pacing where interactive elements behave like gallery plaques and exhibition vitrines.

## Colors

The palette models light passing through translucent pigments onto a primed gesso canvas.

### Color Tokens & Roles
- **Canvas Base (`#FAF9FF`):** A high-key, slightly cool off-white serving as the foundational surface. It repels clinical sterile white while providing an uncolored ground for liquid washes.
- **Deep Ink (`#19172A`):** The primary neutral for high-contrast typographic rendering, ensuring WCAG AAA legibility against the canvas base and glass plates.
- **Muted Slate (`#58536E`):** Secondary neutral for metadata, captions, structural outlines, and subdued iconography.
- **Violet Accent (`#8257E5`):** The primary focal anchor—deep, kinetic, and used for focal micro-interactions, primary call-to-actions, and active states.
- **Atmospheric Aurora Range:**
  - Sky Blue (`#80D8FF`) & Cyan (`#8CE8F2`): High-luminance ethereal airbrush highlights.
  - Lavender (`#B9A5FF`): Midtone bridge between violet and atmospheric blues.
  - Coral Red (`#FF5C79`), Rose Pink (`#FFB3CB`), and Warm Peach (`#FFD2B5`): Warm counter-pigments used in gradient meshes to generate natural optical friction against cool tones.
- **Glass Specular:** `rgba(255, 255, 255, 0.65)` fill with `rgba(255, 255, 255, 0.85)` edge highlights and `rgba(25, 23, 42, 0.04)` contact shadows.

## Typography

The typographic hierarchy establishes three distinct voices working in counterpoint:
1. **The Sculptural Voice (`Syne`):** High-impact, wide-proportioned geometric forms used for hero titles, section entrances, and large portfolio numbers.
2. **The Curatorial Voice (`Space Grotesk`):** Technical, structural, and modern; provides navigational titles, project tags, tech-stack labels, and metrics.
3. **The Pragmatic Voice (`Inter`):** Neutral, hyper-legible body typography designed for long-form case studies, design narratives, and technical descriptions.
4. **The Artist’s Margin (`Playfair Display` in Italic):** Used sparingly for editorial flourishes, exhibition notes, project dates, and curated captions to evoke hand-inscribed folio notations.

## Layout & Spacing

The layout operates on a fluid, asymmetrical 12-column grid system tuned to museum exhibition staging. Negative space is treated as an active compositional medium rather than void.

### Grid Architecture
- **Desktop (≥ 1280px):** 12 columns, max-width `1440px`, centered, with dynamic outer margins scaling up to `5rem`. Editorial project showcases deliberately alternate between 7-column feature spans and 5-column metadata offsets.
- **Tablet (768px – 1279px):** 8 columns, `2.5rem` outer margins. Content groups collapse into balanced half-width tiers.
- **Mobile (< 768px):** 4 columns, `1.25rem` outer margin, single-column vertical flow with sticky float controls.

### Spacing Philosophy
- Macro section spacing uses dramatic intervals (`space-xl` scaled dynamically via `clamp(4rem, 8vw, 9rem)`) to allow each project and section to function as an independent exhibition bay.
- Component-level spacing adheres strictly to 4px/8px baseline multiples for pixel-perfect glass container alignment.

## Elevation & Depth

Visual hierarchy does not rely on opaque stacking or heavy industrial shadows. Instead, it relies on light refraction, chromatic diffusion, and atmospheric planes.

### Depth System

1. **Layer 0 — Pigment Underlay (Atmosphere):**
   Continuous radial blur meshes featuring Sky Blue, Coral Red, Lavender, and Rose Pink (`filter: blur(100px) to blur(140px)`), with an SVG perlin noise overlay at 3.5% opacity creating cotton-paper tactile tooth.

2. **Layer 1 — Canvas Floor:**
   Solid `#FAF9FF` surface holding structural text, direct baseline content, and standard gallery flows.

3. **Layer 2 — Frosted Slates (Cards & Panels):**
   - Background: `rgba(255, 255, 255, 0.65)`
   - Backdrop filter: `blur(24px) saturate(180%)`
   - Border: `1px solid rgba(255, 255, 255, 0.8)`
   - Shadow: `0 8px 32px 0 rgba(25, 23, 42, 0.04), 0 1px 2px 0 rgba(25, 23, 42, 0.02)`

4. **Layer 3 — Floating Portals (Modals & Nav Pills):**
   - Background: `rgba(255, 255, 255, 0.75)`
   - Backdrop filter: `blur(32px) saturate(190%)`
   - Top Highlight: `1px solid rgba(255, 255, 255, 0.95)`
   - Bottom Shadow Rim: `1px solid rgba(130, 87, 229, 0.08)`
   - Shadow: `0 20px 48px -8px rgba(25, 23, 42, 0.08), 0 4px 12px 0 rgba(130, 87, 229, 0.03)`

## Shapes

The design system adopts pill and organically softened geometry (level 3) to contrast the sharp typographic grid with smooth, liquid tactile edges reminiscent of sea glass and polished river stones.

- **Primary Interactive Elements (Buttons, Navigation Bars, Tags):** Full pill rounding (`rounded-full`, 9999px).
- **Curated Display Cards & Media Containers:** Super-elliptical corners (`2rem` / `32px` on desktop, `1.25rem` / `20px` on mobile).
- **Micro UI (Checkboxes, Tooltips, Status Badges):** Sculpted curvature ranging between `0.75rem` and `1rem`.

## Components

### Floating Navigation Pill
- **Structure:** Floating dock pinned centrally at bottom-mobile and top-desktop.
- **Materials:** `rgba(255, 255, 255, 0.75)` fill, `backdrop-blur-2xl`, pill geometry (`border-radius: 9999px`), `border: 1px solid rgba(255, 255, 255, 0.8)`.
- **States:** Active links display a soft ink background `#19172A` with white typography, or an illuminated violet pill badge. Inactive links remain muted slate (`#58536E`), transitioning to deep ink on hover.

### Buttons
- **Primary Action:** Solid Deep Ink (`#19172A`) or Violet Accent (`#8257E5`) pill. Text in pure white using `Space Grotesk` medium. On hover: Subtle 2px lift, subtle aurora glow (`box-shadow: 0 10px 24px -4px rgba(130, 87, 229, 0.35)`).
- **Secondary Action (Glass Button):** `rgba(255, 255, 255, 0.65)` background, `1px solid rgba(255, 255, 255, 0.85)`, Deep Ink text. On hover: Background shifts to `rgba(255, 255, 255, 0.9)`, border intensifies.

### Project Exhibition Cards
- **Structure:** Generous padding (`space-lg` to `space-xl`), asymmetric layout framing high-resolution imagery/WebGL frames against editorial descriptions.
- **Glass Shell:** Frosted translucent background, delicate hairline perimeter, subtle internal shadow.
- **Interaction:** On cursor proximity, an internal gradient aura follows the cursor along the border using an absolute radial mask.

### Interactive Toolkit Chips
- **Geometry:** Pill-shaped, minimal height (`32px` to `36px`).
- **Styling:** `rgba(255, 255, 255, 0.5)` background with `Space Grotesk` label text (`label-caps`).
- **Active / Hover State:** Shifts to soft pastel wash (Sky Blue `#80D8FF` or Lavender `#B9A5FF` at 20% opacity) with crisp violet text and a glowing 1px border.

### Form Inputs & Text Fields
- **Base:** Translucent white fill (`rgba(255, 255, 255, 0.4)`), `1px solid rgba(25, 23, 42, 0.1)`, rounded `1rem`.
- **Focus:** Canvas transitions to `rgba(255, 255, 255, 0.8)`, border snaps to Violet Accent (`#8257E5`), accompanied by a soft `0 0 0 4px rgba(130, 87, 229, 0.12)` halo. Placeholder styled in Muted Slate.