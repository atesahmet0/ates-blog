# Banner Images for Blog Posts

This directory contains banner images for blog posts. 

## Guidelines

### Image Specifications
- **Dimensions**: 1200x600px (2:1 aspect ratio) recommended
- **Format**: JPG, PNG, or WebP
- **File size**: Keep under 500KB for optimal performance
- **Quality**: High resolution for crisp display

### Naming Convention
Use descriptive names that relate to your blog post:
- `static-websites.jpg`
- `web-performance-tips.png`
- `javascript-frameworks.webp`

### Usage in Blog Posts
Add banner images to your MDX frontmatter:

```yaml
---
title: "Your Blog Post Title"
date: "2025-01-15"
description: "Your post description"
tags: ["tag1", "tag2"]
banner: "/images/banners/your-image.jpg"
bannerAlt: "Descriptive alt text for accessibility"
---
```

### Accessibility
Always include descriptive `bannerAlt` text for screen readers and better accessibility.

### Responsive Behavior
- Desktop: 300px height
- Mobile: 200px height
- Images are automatically cropped to fit using `object-fit: cover`
