# Abdelrahman Kamal - DevOps Engineer Portfolio

A modern, professional portfolio website for a DevOps Engineer built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a clean, serious design with subtle animations and comprehensive accessibility support.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Professional Animations**: Subtle, high-performance animations with Framer Motion
- **Accessibility First**: WCAG compliant with keyboard navigation, focus management, and screen reader support
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Performance Focused**: Optimized images, lazy loading, and efficient bundle size

## 📋 Sections

- **Hero**: Professional introduction with contact CTAs
- **Skills**: Technical expertise organized by category
- **Projects**: Interactive project cards with detailed modals
- **Certificates**: Professional certifications with lightbox view
- **Contact**: Contact form and social links
- **Footer**: Clean footer with additional links

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Image Optimization**: Next.js Image component

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mo-mostafa-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Adding Real Content

1. **Profile Image**: Replace `/public/images/placeholder-profile.png` with your actual profile photo
2. **Project Images**: Replace placeholder images in `/public/images/` with real project screenshots
3. **CV**: Replace `/public/cv.pdf` with your actual resume
4. **Contact Info**: Update email addresses and social links in components
5. **Content**: Update `src/data/projects.ts` and `src/data/certificates.ts` with your real data

### Updating Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "your-project-id",
    title: "Your Project Title",
    image: "/images/your-project-image.png",
    tech: ["React", "Node.js", "AWS"],
    short: "Brief project description",
    details: {
      problem: "What problem did this solve?",
      solution: "How did you solve it?",
      results: "What was the impact?",
      architectureImage: "/images/your-architecture.png",
      repo: "https://github.com/your-repo",
      live: "https://your-live-demo.com",
    },
  },
];
```

### Updating Certificates

Edit `src/data/certificates.ts`:

```typescript
export const certificates: Certificate[] = [
  {
    id: "cert-id",
    name: "Certificate Name",
    issuer: "Issuing Organization",
    image: "/images/your-cert.png",
    issueDate: "2024-01-01",
  },
];
```

### Color Customization

The color palette is defined in `src/app/globals.css`:

```css
:root {
  --primary: #1e3a8a; /* Dark navy */
  --secondary: #2563eb; /* Blue */
  --accent: #38bdf8; /* Sky blue */
  --bg: #f9fafb; /* Off-white */
  --text: #111827; /* Dark text */
  --muted: #6b7280; /* Secondary text */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Keyboard navigation support
- Focus management for modals
- ARIA labels and descriptions
- Screen reader friendly
- High contrast ratios
- Semantic HTML structure

## 🔧 Build & Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy your app

### Deploy to Other Platforms

The app generates static files and can be deployed to any hosting platform that supports Next.js:

- **Netlify**: Use the Next.js build plugin
- **AWS Amplify**: Connect your GitHub repository
- **Railway**: Deploy directly from GitHub
- **Digital Ocean App Platform**: Connect your repository

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Images**: Next.js Image optimization with lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vercel** for hosting and deployment platform

---

**Built with ❤️ by Abdelrahman Kamal**
