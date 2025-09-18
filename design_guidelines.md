# Personal Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like those of Linear, Vercel, and GitHub's professional developer showcases, emphasizing clean aesthetics with subtle technical sophistication.

## Core Design Elements

### Color Palette
**Light Mode:**
- Primary: 15 8% 15% (charcoal)
- Secondary: 220 13% 69% (muted blue-gray)
- Accent: 262 83% 58% (vibrant purple)
- Background: 0 0% 98% (near white)
- Surface: 0 0% 100% (pure white)

**Dark Mode:**
- Primary: 0 0% 98% (near white)
- Secondary: 220 9% 46% (mid gray)
- Accent: 262 83% 58% (vibrant purple - consistent)
- Background: 222 84% 5% (deep dark)
- Surface: 217 33% 8% (dark surface)

### Typography
**Primary Font**: Inter (Google Fonts) - excellent readability for technical content
**Code Font**: JetBrains Mono (Google Fonts) - for code snippets and technical details
**Hierarchy**: h1 (48px), h2 (36px), h3 (24px), body (16px), small (14px)

### Layout System
**Spacing Units**: Consistent use of Tailwind units: 2, 4, 8, 12, 16, 24 (as in p-2, m-4, gap-8, etc.)
**Grid**: 12-column responsive grid with generous gutters
**Breakpoints**: Mobile-first approach using Tailwind's standard breakpoints

### Component Library
**Navigation**: Fixed header with smooth scroll-to-section links and theme toggle
**Hero**: Full-viewport height with animated typing effect for role/skills
**Cards**: Elevated surfaces for experience items and projects with subtle shadows
**Buttons**: Primary (filled accent), Secondary (outline), and Ghost variants
**Timeline**: Vertical timeline for experience with connecting lines and milestone dots
**Skill Badges**: Rounded badges with proficiency indicators using progress rings

## Section Structure
1. **Hero Section**: Professional headshot, animated introduction, CTA buttons
2. **About**: Brief professional summary with personality
3. **Skills**: Visual grid of technologies with proficiency levels
4. **Experience**: Timeline-based professional history
5. **Projects**: Featured work with live demos and GitHub links
6. **Contact**: Clean form with social links

## Visual Treatment
**Gradients**: Subtle purple-to-blue gradients in hero background and accent elements
**Shadows**: Soft, layered shadows for depth (shadow-sm to shadow-xl)
**Animations**: Minimal, purposeful - fade-ins, gentle hover states, and scroll-triggered reveals
**Icons**: Heroicons for UI elements, brand icons for technologies/social links

## Images
**Hero Image**: Professional headshot (400x400px) with subtle border treatment
**Project Screenshots**: High-quality mockups showcasing responsive designs
**Technology Logos**: SVG icons for skills section in consistent sizing
**Background Elements**: Subtle geometric patterns or gradients, no distracting imagery

**Key Constraint**: Single-page scroll experience with smooth section transitions, optimized for both technical recruiters and fellow developers.