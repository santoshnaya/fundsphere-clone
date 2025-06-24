# FundsphereClone

A pixel-perfect, front-end-only clone of the Fundsphere Webflow site, replicating every layout section, visual detail, and interaction—without any backend logic or data processing.

## 🚀 Live Demo

Visit the live application: [Deployed on Vercel]

## 📋 Features

- **Hero Section**: Full-width hero with bold headline, subheadline, and CTA button
- **Sticky Navigation**: Fixed top nav with smooth scroll links and mobile hamburger menu
- **Stats Section**: Key metrics display (10% Beneficial Cashback, 7M Satisfied Customers, 40+ Countries)
- **Features Section**: Interactive feature cards with payment mockups and security demonstrations
- **Pricing Plans**: Three-tier pricing cards (Basic, Pro, Enterprise) with feature comparison
- **Magazine/Blog**: Article cards with gradient backgrounds and hover effects
- **Testimonials**: Customer reviews with ratings and company affiliations
- **CTA Section**: Call-to-action with email signup form
- **Footer**: Complete site navigation and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations and hover effects

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with perfect tablet and desktop layouts
- **Smooth Animations**: Scroll-triggered reveals, hover states, and button animations
- **Modern UI**: Clean typography, balanced whitespace, and consistent color palette
- **Interactive Elements**: Hover effects, form states, and navigation transitions
- **Accessibility**: Semantic HTML, keyboard navigation, and proper contrast ratios

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fundsphere-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🔧 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Magazine.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── lib/
```

## 🎯 Component Overview

### Header
- Sticky navigation with logo
- Dropdown menus for features
- Mobile hamburger menu with overlay
- Sign In and Free Trial CTAs

### Hero
- Animated background elements
- Email signup form
- Partner logos
- Interactive dashboard mockup

### Stats
- Three key metrics in grid layout
- Large numbers with descriptions
- Dark background for contrast

### Features
- Payment and security demonstrations
- Mobile mockups with realistic UI
- Cost reduction and integration info

### Pricing
- Three-tier comparison table
- Popular plan highlighting
- Feature inclusion indicators
- Hover animations on cards

### Magazine
- Article cards with gradients
- Hover scale effects
- Read More CTA button

### Testimonials
- Customer quotes and ratings
- Company affiliations
- Trustpilot integration mockup

### CTA
- Email signup with validation
- Gradient background
- Centered layout

### Footer
- Multi-column navigation links
- Social media icons
- Copyright information

## 🎨 Color Palette

- **Primary**: Purple/Blue gradient (#6366f1 to #4f46e5)
- **Secondary**: Gray scale (#f8fafc to #0f172a)
- **Accent**: Orange/Red for highlights
- **Success**: Green for positive metrics

## 📄 License

This project is for educational and demonstration purposes only.

## 🤝 Contributing

This is a showcase project demonstrating pixel-perfect front-end development skills.

---

Built with ❤️ using Next.js and Tailwind CSS 