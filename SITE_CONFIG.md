# Site Configuration Guide

This project uses a centralized site configuration system located in `/src/config/site.ts` for consistent branding and settings across the entire site.

## Configuration File Location

All site-wide settings are defined in:
```
/src/config/site.ts
```

## Available Configuration Options

### Site Identity
```typescript
{
  title: "My Blog",              // Site title/logo text
  description: "Site description", // Default meta description  
  author: "Your Name",           // Author name
  url: "https://your-blog.com",  // Site URL (no trailing slash)
}
```

### Navigation
```typescript
nav: {
  home: { label: "Home", href: "/" },
  blog: { label: "Blog", href: "/" },
  // Add more navigation items:
  // about: { label: "About", href: "/about" },
  // contact: { label: "Contact", href: "/contact" },
}
```

### Footer Settings
```typescript
footer: {
  copyright: "My Static Blog",    // Copyright holder name
  builtWith: "Built with Astro and MDX", // Technology credits
}
```

### Blog Settings
```typescript
blog: {
  postsPerPage: 10,              // Posts per page (future pagination)
  defaultBanner: "/images/banners/default-post-bg.jpg", // Default banner image
}
```

### Social Links (Optional)
```typescript
social: {
  twitter: "https://twitter.com/yourusername",
  github: "https://github.com/yourusername", 
  linkedin: "https://linkedin.com/in/yourusername",
}
```

## How to Customize

### Change Site Title/Logo
Update the `title` field in `/src/config/site.ts`:
```typescript
export const siteConfig = {
  title: "Your New Blog Name", // This appears in header and page titles
  // ...
}
```

### Add Navigation Items
Add new items to the `nav` object:
```typescript
nav: {
  home: { label: "Home", href: "/" },
  blog: { label: "Blog", href: "/" },
  about: { label: "About", href: "/about" }, // New nav item
  contact: { label: "Contact", href: "/contact" }, // New nav item
}
```

### Change Default Banner
Update the default banner path:
```typescript
blog: {
  defaultBanner: "/images/banners/your-new-default.jpg",
}
```

### Update Footer
Modify footer content:
```typescript
footer: {
  copyright: "Your Company Name",
  builtWith: "Powered by Astro & TypeScript",
}
```

## Helper Functions

The configuration includes useful helper functions:

### `getPageTitle(pageTitle?: string)`
Automatically formats page titles:
```typescript
getPageTitle("About") // Returns: "About | My Blog"
getPageTitle()        // Returns: "My Blog"
```

### `getFullUrl(path: string)`
Creates absolute URLs:
```typescript
getFullUrl("/blog/my-post") // Returns: "https://your-blog.com/blog/my-post"
```

## Usage in Components

Import and use the configuration in any Astro component:

```astro
---
import { siteConfig, getPageTitle } from '../config/site';
---

<Layout title={getPageTitle("About")}>
  <h1>{siteConfig.title}</h1>
  <p>{siteConfig.description}</p>
</Layout>
```

## Benefits

1. **Single Source of Truth**: All site settings in one place
2. **Consistent Branding**: Title/logo appears the same everywhere
3. **Easy Updates**: Change site name once, updates everywhere
4. **Type Safety**: TypeScript ensures configuration integrity
5. **Helper Functions**: Convenient utilities for common tasks
6. **Scalable**: Easy to add new configuration options

## Migration

If you have hardcoded site titles or settings elsewhere, replace them with references to `siteConfig`:

```astro
<!-- Before -->
<title>My Blog - About</title>

<!-- After -->
<title>{getPageTitle("About")}</title>
```

This system makes your site much more maintainable and professional!
