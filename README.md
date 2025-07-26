# Ates Blog - Static Blog with Astro + MDX

A beautiful, fast, and modern static blog built with **Astro** and **MDX**. This project demonstrates the power of static site generation with the flexibility of component-based architecture.

## ✨ Features

- **⚡ Lightning Fast**: Built with Astro for optimal performance
- **📝 MDX Support**: Write content in Markdown with JSX components
- **🎨 Beautiful Design**: Clean, responsive design with modern aesthetics
- **🔍 SEO Optimized**: Semantic HTML and meta tags for better search visibility
- **📱 Mobile First**: Responsive design that looks great on all devices
- **🚀 Easy Deployment**: Deploy to Netlify, Vercel, or any static host

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Layout.astro        # Main layout component
│   ├── content/
│   │   └── blog/               # MDX blog posts
│   │       ├── getting-started-with-astro-mdx.mdx
│   │       ├── building-beautiful-static-websites.mdx
│   │       └── future-of-web-development.mdx
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   └── blog.astro          # Blog listing page
│   └── styles/
│       └── fonts.css           # Centralized font configuration
├── astro.config.mjs            # Astro configuration
├── package.json
├── FONT_SYSTEM.md              # Font system documentation
└── README.md
```

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ates-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see your blog!

## 📝 Writing Blog Posts

Blog posts are written in MDX format and stored in `src/content/blog/`. Each post should include frontmatter with the following fields:

```markdown
---
title: "Your Post Title"
date: "2025-01-15"
description: "A brief description of your post"
tags: ["tag1", "tag2", "tag3"]
---

import Layout from '../../components/Layout.astro';

<Layout title={frontmatter.title}>

# Your content goes here...

</Layout>
```

## 🎨 Customization

### Typography
The blog uses a centralized font system with **SF Pro Display** as the default font, providing a modern and clean appearance. All font configurations are defined in `src/styles/fonts.css`. See [FONT_SYSTEM.md](FONT_SYSTEM.md) for detailed documentation on:
- Available font variables (sizes, weights, families)
- How to customize fonts site-wide
- Best practices for typography

### Styling
- Global styles are defined in `src/components/Layout.astro`
- Use scoped styles in individual components
- Primary color: `#007acc` (blue)
- Background: `#f8f9fa` (light gray) and `#ffffff` (white)

### Adding New Pages
Create new `.astro` files in the `src/pages/` directory. Astro automatically creates routes based on the file structure.

### Components
Add reusable components in `src/components/`. Use Astro's component syntax for optimal performance.

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🚀 Deployment

This blog can be deployed to any static hosting service:

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your repository to Vercel
2. Framework preset: Astro
3. Deploy!

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for automatic deployment

## 🛡️ Technologies Used

- **[Astro](https://astro.build/)** - Static site generator
- **[MDX](https://mdxjs.com/)** - Markdown with JSX
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **CSS** - Styling (no framework dependencies)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Astro and MDX
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
