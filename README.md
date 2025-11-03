# HM College Conference Website 🌐

A beautiful, futuristic conference website for the **Two-Day International Multidisciplinary Conference on Automated Humanity and Sustainable Livelihoods** organized by HM College of Science & Technology, Manjeri.

## ✨ Features

- **🎨 Futuristic Design** - Modern UI with animated 3D particle background
- **📱 Fully Responsive** - Optimized for both desktop and mobile devices
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times
- **🎭 Smooth Animations** - Beautiful transitions using Framer Motion
- **🌌 3D Graphics** - Interactive particle system using Three.js
- **💎 Glass Morphism** - Modern card designs with backdrop blur effects

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nishaj0/hm_college_confrence_webiste.git
cd hm_college_confrence_webiste
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **CSS Modules** - Scoped styling

## 📝 Configuration

### Update Google Form

To add your registration form, edit `src/components/Registration/Registration.tsx` and replace the iframe URL:

```tsx
<iframe 
  src="YOUR_GOOGLE_FORM_URL"
  // ... other props
/>
```

### Update Important Dates

Edit the `importantDates` array in `src/components/Domains/Domains.tsx` to add actual dates.

## 🎨 Customization

### Colors

The color scheme can be customized in `src/index.css`:

```css
:root {
  --primary: #00ffff;        /* Cyan */
  --secondary: #7c4dff;      /* Purple */
  --accent: #ff1744;         /* Red */
  /* ... more colors */
}
```

### Content

All content is modular and can be easily updated:

- **Hero Section**: `src/components/Hero/Hero.tsx`
- **About Section**: `src/components/About/About.tsx`
- **Domains**: `src/components/Domains/Domains.tsx`
- **Registration**: `src/components/Registration/Registration.tsx`
- **Footer**: `src/components/Footer/Footer.tsx`


## 📄 License

This project is created for HM College of Science & Technology, Manjeri.

## 🌟 Conference Details

**Theme**: Automated Humanity and Sustainable Livelihoods: Innovations for a Disaster-Resilient World

**Date**: January 2026

**Venue**: HM College of Science & Technology, Alukkal, Manjeri, Kerala, India

**Website**: www.hmcollegemanjeri.com

**Email**: conference@hmcollegemanjeri.com

**Phone**: +91 99954 83901

---

© 2025 HM College of Science & Technology, Manjeri | Website Designed by the Department of IT & AI
