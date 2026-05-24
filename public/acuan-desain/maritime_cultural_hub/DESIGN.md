---
name: Maritime Cultural Hub
colors:
  surface: '#fff8f1'
  surface-dim: '#e0d9d0'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf3e9'
  surface-container: '#f4ede3'
  surface-container-high: '#eee7de'
  surface-container-highest: '#e8e1d8'
  on-surface: '#1e1b16'
  on-surface-variant: '#41474e'
  inverse-surface: '#33302a'
  inverse-on-surface: '#f7f0e6'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#2f6388'
  primary: '#003b5a'
  on-primary: '#ffffff'
  primary-container: '#1a5276'
  on-primary-container: '#94c5ee'
  inverse-primary: '#9bccf6'
  secondary: '#745a27'
  on-secondary: '#ffffff'
  secondary-container: '#fedb9b'
  on-secondary-container: '#795f2b'
  tertiary: '#4d3100'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b4604'
  on-tertiary-container: '#eab66d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe6ff'
  primary-fixed-dim: '#9bccf6'
  on-primary-fixed: '#001e30'
  on-primary-fixed-variant: '#0e4b6e'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e4c285'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5a4312'
  tertiary-fixed: '#ffddb3'
  tertiary-fixed-dim: '#f2bd74'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#fff8f1'
  on-background: '#1e1b16'
  surface-variant: '#e8e1d8'
typography:
  h1:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  h4:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.5'
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  body-medium:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.6'
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 24px
---

## Brand & Style

The design system is crafted for a professional tourism ecosystem that bridges traditional cultural heritage with modern digital efficiency. It evokes a sense of reliability, warmth, and maritime authority, reflecting the prestige of a regional hub.

The aesthetic follows a **Corporate Modern** approach infused with **Tactile** warmth. It utilizes a sophisticated "Krem" background instead of stark white to provide a premium, editorial feel reminiscent of high-end travel journals. The interface remains clean and functional, prioritizing clarity for partners while using gold accents to signify value and excellence.

## Colors

This design system uses a palette inspired by the sea and local heritage. **Sea Blue** serves as the primary anchor for navigation and primary actions, establishing a professional and trustworthy foundation. **Gold** is reserved for high-value moments, such as star ratings, status badges, and highlights.

The neutral palette departs from standard grays, using **Coklat Teks** for deep contrast and **Abu Hangat** (Warm Gray) for secondary information. This ensures the UI feels organic and integrated with the creamy background. Surfaces like cards and modals use pure white to pop against the off-white background, creating a clear visual stack.

## Typography

The design system utilizes **Inter** exclusively to maintain a highly legible, systematic, and professional appearance across all partner touchpoints. 

The type scale is intentionally compact to accommodate data-heavy partner dashboards while maintaining a clear hierarchy. Headlines use bold weights with tighter letter spacing for a modern, impactful look. Body text is set at 14px to maximize information density without sacrificing readability on mobile devices, utilizing a generous line height to prevent fatigue.

## Layout & Spacing

This design system is built on a **4px base grid**, ensuring all components and layouts scale mathematically. The layout philosophy uses a **fluid grid** for mobile and a **fixed-width container** (max 1200px) for desktop management portals.

On mobile, the layout adheres to a 16px side margin. Gutters between cards and interactive elements are consistently 16px (lg) to provide enough breathing room. Vertical rhythm should follow the spacing scale, with 24px (xl) or 32px (2xl) used to separate distinct content sections.

## Elevation & Depth

Hierarchy is established through a combination of **tonal layering** and **ambient shadows**. 

- **Level 0 (Background):** The Krem (#F5F3F0) base layer.
- **Level 1 (Cards):** White surfaces with a "Light Shadow" (0 2px 8px rgba(0,0,0,0.06)). This provides a subtle lift that distinguishes content from the background.
- **Level 2 (Modals/Overlays):** White surfaces with a "Heavy Shadow" (0 8px 24px rgba(0,0,0,0.15)) to indicate temporary, high-priority interaction.
- **Navigation:** The mobile bottom nav uses a specific "upward" shadow (0 -2px 12px rgba(0,0,0,0.08)) to anchor the element to the bottom of the viewport while suggesting it sits above all other content.

## Shapes

The shape language is approachable yet structured. A **Rounded (2)** base is used to soften the corporate nature of the hub. 

- **8px (sm):** Used for smaller interactive elements like checkboxes, input fields, and small buttons.
- **12px (md):** The standard for primary buttons and smaller content cards.
- **16px (lg):** Reserved for large containers, main dashboard cards, and modal windows.
- **Pill:** Exclusively used for status badges (e.g., "Active", "Pending") and tags to differentiate them from actionable buttons.

## Components

### Buttons
- **Primary:** 48px height, Sea Blue background, White text, 12px radius, Inter 500.
- **Secondary:** 48px height, Gold background, White text.
- **Ghost:** 48px height, Transparent background, Sea Blue border (1px), Sea Blue text.

### Inputs & Form Fields
- Height: 48px.
- Background: White.
- Border: 1px solid Abu Hangat (#6B6560) at 30% opacity.
- Radius: 8px.
- Focused State: Sea Blue 1px border with a soft blue glow.

### Cards
- Background: White (#FFFFFF).
- Radius: 16px.
- Shadow: Light Shadow.
- Padding: 16px or 24px depending on content density.

### Mobile Navigation
- Height: 64px.
- Background: White (#FFFFFF).
- Shadow: 0 -2px 12px rgba(0,0,0,0.08).
- Icons: Material Icons (Filled for active state in Sea Blue; Outline for inactive state in Abu Hangat).

### Feedback & Status
- **Success/Warning/Error/Info:** Use a soft tinted background (10% opacity of the functional color) with a solid color left-border or icon to ensure accessibility.