// Site Configuration - Single Source of Truth
export const siteConfig = {
  // Site Identity
  title: "Be Fucking Bold",
  description: "Burası bana ait",
  author: "Ahmet Rıza Ateş",
  
  // URLs and Links
  url: "https://befuckingbold.com",
  
  // Navigation
  nav: {
    home: { label: "Home", href: "/" },
    blog: { label: "Blog", href: "/" }, // Currently points to home since it's the blog listing
    // Add more nav items here as needed
    // about: { label: "About", href: "/about" },
    // contact: { label: "Contact", href: "/contact" },
  },
  
  // Social Links (optional)
  social: {
    // twitter: "https://twitter.com/yourusername",
    // github: "https://github.com/yourusername",
    // linkedin: "https://linkedin.com/in/yourusername",
  },
  
  // Footer
  footer: {
    copyright: "Be Fucking Bold",
    builtWith: "",
  },
  
  // SEO & Meta
  defaultMeta: {
    image: "/images/og-image.png", // Default Open Graph image
    twitterCard: "summary_large_image",
  },
  
  // Blog Settings
  blog: {
    postsPerPage: 10,
    defaultBanner: "/images/banners/default-post-bg.jpg",
  },

  // Theme Colors - Single Source of Truth
  colors: {
    // Primary brand colors
    primary: "#ff6b35",
    primaryHover: "#e55a2b",
    
    // Background colors
    background: {
      primary: "#1a1a1a",     // Main background
      secondary: "#262626",   // Card backgrounds
      tertiary: "#2a2a2a",    // Skeleton/loading backgrounds
    },
    
    // Text colors
    text: {
      primary: "#e4e4e7",     // Main headings
      secondary: "#d1d5db",   // Body text
      muted: "#9ca3af",       // Meta text, descriptions
    },
    
    // Border colors
    border: {
      primary: "#374151",     // Main borders
      accent: "#ff6b35",      // Accent borders (left border on cards)
    },
    
    // Interactive states
    hover: {
      scale: 1.05,
      translateY: "-2px",
    },
    
    // Status colors
    error: {
      background: "#3a1f1f",
      backgroundAlt: "#4a2222",
    },
    
    // Code syntax
    code: {
      background: "#374151",
      text: "#fbbf24",
      blockBackground: "#262626",
    },
  },
} as const;

// Helper function to get the full URL
export function getFullUrl(path: string = '') {
  return `${siteConfig.url}${path}`;
}

// Helper function to get page title
export function getPageTitle(pageTitle?: string) {
  return pageTitle ? `${pageTitle} | ${siteConfig.title}` : siteConfig.title;
}

// Helper function to get theme colors
export function getColor(path: string) {
  const keys = path.split('.');
  let color: any = siteConfig.colors;
  
  for (const key of keys) {
    color = color?.[key];
    if (color === undefined) {
      console.warn(`Color path "${path}" not found in theme colors`);
      return '#000000'; // fallback color
    }
  }
  
  return color;
}

// CSS Custom Properties generator for colors
export function generateCSSCustomProperties() {
  const { colors } = siteConfig;
  
  return `
    --color-primary: ${colors.primary};
    --color-primary-hover: ${colors.primaryHover};
    
    --color-bg-primary: ${colors.background.primary};
    --color-bg-secondary: ${colors.background.secondary};
    --color-bg-tertiary: ${colors.background.tertiary};
    
    --color-text-primary: ${colors.text.primary};
    --color-text-secondary: ${colors.text.secondary};
    --color-text-muted: ${colors.text.muted};
    
    --color-border-primary: ${colors.border.primary};
    --color-border-accent: ${colors.border.accent};
    
    --color-error-bg: ${colors.error.background};
    --color-error-bg-alt: ${colors.error.backgroundAlt};
    
    --color-code-bg: ${colors.code.background};
    --color-code-text: ${colors.code.text};
    --color-code-block-bg: ${colors.code.blockBackground};
  `;
}
