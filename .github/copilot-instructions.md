<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Ates Blog - Astro + MDX Static Blog

This is a static blog website built with Astro and MDX. The project focuses on performance, simplicity, and beautiful design.

## Project Structure

- `src/pages/` - Astro pages (blog.astro for the main blog page)
- `src/content/blog/` - MDX blog posts with frontmatter
- `src/components/` - Reusable Astro components (Layout.astro)
- `public/` - Static assets

## Key Technologies

- **Astro**: Static site generator with component islands architecture
- **MDX**: Markdown with JSX components for rich content
- **TypeScript**: Type safety throughout the project

## Content Guidelines

### Blog Posts
- All blog posts are MDX files in `src/content/blog/`
- Use frontmatter with: title, date, description, tags
- Import Layout component at the top of each post
- Include post metadata styling for consistency

### Components
- Use Astro components (.astro files) for layout and UI
- Follow component islands pattern - minimal JavaScript
- Use scoped styles with `<style>` tags
- Ensure responsive design with mobile-first approach

## Styling Conventions

- Use CSS custom properties for consistent theming
- Primary color: #007acc (blue)
- Background colors: #f8f9fa (light gray), #ffffff (white)
- Typography: system-ui font stack
- Responsive breakpoint: 768px for mobile

## Development Notes

- The blog page uses Astro.glob() to dynamically load MDX posts
- Posts are sorted by date (newest first)
- Layout component provides consistent header/footer
- Global styles are defined in Layout.astro
- All content should be accessible and semantic HTML

When working on this project, prioritize performance, accessibility, and clean, readable code.
