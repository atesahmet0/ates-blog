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
} as const;

// Helper function to get the full URL
export function getFullUrl(path: string = '') {
  return `${siteConfig.url}${path}`;
}

// Helper function to get page title
export function getPageTitle(pageTitle?: string) {
  return pageTitle ? `${pageTitle} | ${siteConfig.title}` : siteConfig.title;
}
