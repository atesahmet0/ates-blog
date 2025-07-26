# Font Configuration Guide

This project uses a centralized font system with CSS custom properties for consistent typography across the entire site. The default font is **SF Pro Display** for a modern, clean appearance.

## Font System Overview

All font configurations are defined in `/src/styles/fonts.css` as CSS custom properties (variables). This provides a single source of truth for all typography decisions. The SF Pro Display font is automatically imported from CDN.

## Available Font Variables

### Font Families
- `--font-primary`: Main body text font (SF Pro Display with system fallbacks)
- `--font-heading`: Heading font (defaults to primary font)
- `--font-mono`: Monospace font for code blocks (SF Mono with fallbacks)

### Font Weights
- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700
- `--font-weight-extrabold`: 800

### Font Sizes
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)
- `--font-size-6xl`: 3.75rem (60px)

### Line Heights
- `--line-height-tight`: 1.25
- `--line-height-snug`: 1.375
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.625
- `--line-height-loose`: 2

### Letter Spacing
- `--letter-spacing-tighter`: -0.05em
- `--letter-spacing-tight`: -0.025em
- `--letter-spacing-normal`: 0
- `--letter-spacing-wide`: 0.025em
- `--letter-spacing-wider`: 0.05em
- `--letter-spacing-widest`: 0.1em

## How to Use

### In Component Styles
```css
.my-heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}
```

### Common Usage Patterns
```css
/* Large heading */
h1 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

/* Body text */
p {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}

/* Small metadata text */
.meta {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

/* Code blocks */
code {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
}
```

## Customization

### Changing Font Families
To use a different font family, update the variables in `/src/styles/fonts.css`:

```css
:root {
  /* Use a custom font (remember to add @import at the top) */
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-heading: 'Playfair Display', serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

**Note**: When changing fonts, make sure to add the appropriate `@import` statement at the top of the file if using web fonts.

### Adding New Font Sizes
Add new size variables to maintain consistency:

```css
:root {
  --font-size-7xl: 4.5rem;
  --font-size-8xl: 6rem;
}
```

### Responsive Font Sizes
The system includes responsive adjustments that automatically scale down large font sizes on mobile devices (< 768px).

## Benefits

1. **Consistency**: All typography decisions are centralized
2. **Maintainability**: Change fonts site-wide by updating one file
3. **Developer Experience**: Semantic variable names make code more readable
4. **Performance**: CSS custom properties are efficient and well-supported
5. **Responsive**: Built-in responsive scaling for mobile devices
6. **Extensibility**: Easy to add new font configurations

## Migration

If you need to migrate existing hardcoded font styles:

1. Identify the current font-size, font-weight, or font-family
2. Find the equivalent CSS variable in `/src/styles/fonts.css`
3. Replace the hardcoded value with `var(--variable-name)`
4. Test the visual result and adjust if needed

Example:
```css
/* Before */
.title {
  font-size: 2rem;
  font-weight: 700;
}

/* After */
.title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
}
```
