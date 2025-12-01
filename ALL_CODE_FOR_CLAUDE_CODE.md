# Complete Besties Landing Page - Give This to Claude Code

Copy this entire message and send it to Claude Code.

---

## Instructions for Claude Code

Build a Besties landing page and deploy to: https://github.com/cryptoboost4-spec/thisdogweb-this-is-the-website-/

**Repo name:** `thisdogweb-this-is-the-website-`

---

## package.json

```json
{
  "name": "besties-landing",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "start": "vite",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "gh-pages": "^6.1.0",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.8"
  }
}
```

---

## vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/thisdogweb-this-is-the-website-/',
  build: {
    outDir: 'build',
  },
})
```

---

## tailwind.config.js

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF69B4',
        secondary: '#9370DB',
        accent: '#FFB6C1',
      },
      fontFamily: {
        display: ['Fredoka One', 'cursive'],
        body: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(255, 105, 180, 0.1), 0 2px 4px -1px rgba(255, 105, 180, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(255, 105, 180, 0.2), 0 4px 6px -2px rgba(255, 105, 180, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF69B4 0%, #9370DB 100%)',
      },
    },
  },
  plugins: [],
}
```

---

## postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Besties 💜 - Never check in alone</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <meta name="description" content="Safety check-ins with countdown timers. If you don't check in, your besties are automatically alerted.">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-body;
    background-color: #FFF5F7;
    background-image: 
      radial-gradient(at 40% 20%, rgba(255, 105, 180, 0.05) 0px, transparent 50%),
      radial-gradient(at 80% 0%, rgba(147, 112, 219, 0.05) 0px, transparent 50%),
      radial-gradient(at 0% 50%, rgba(255, 182, 193, 0.05) 0px, transparent 50%);
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer components {
  .gradient-text {
    background: linear-gradient(135deg, #FF69B4 0%, #9370DB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .btn-primary {
    @apply inline-block px-8 py-4 font-semibold text-lg rounded-full shadow-lg;
    @apply transition-all duration-200 cursor-pointer;
    background: linear-gradient(135deg, #FF69B4 0%, #9370DB 100%);
    color: white;
    border: none;
  }

  .btn-primary:hover {
    @apply scale-105 shadow-xl;
  }

  .btn-primary:active {
    @apply scale-95;
  }

  .feature-card {
    @apply bg-white p-8 rounded-3xl shadow-card;
    @apply transition-all duration-300;
  }

  .feature-card:hover {
    @apply shadow-card-hover -translate-y-1;
  }
}
```

---

## src/main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## src/App.jsx

```jsx
function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4 font-display gradient-text">
            Besties 💜
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4 font-body">
            Never check in alone
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Safety check-ins with countdown timers. If you don't check in, 
            your besties are automatically alerted.
          </p>
          
          <a 
            href="https://app.bestiesapp.xyz"
            className="btn-primary"
          >
            Enter App →
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl gradient-text mb-4">
              Why Besties?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your safety network, always ready when you need it most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-display text-gray-800 mb-2">
                Instant Alerts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your trusted circle gets notified immediately when you need help
              </p>
            </div>

            <div className="feature-card">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-display text-gray-800 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Set custom check-in times. Miss one? We've got your back.
              </p>
            </div>

            <div className="feature-card">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-display text-gray-800 mb-2">
                Your Circle
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with people who care. Build your safety network.
              </p>
            </div>

            <div className="feature-card">
              <div className="text-5xl mb-4">🌙</div>
              <h3 className="text-2xl font-display text-gray-800 mb-2">
                Always On
              </h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 monitoring. Your safety never sleeps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl gradient-text mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay safe in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-3xl shadow-card mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF69B4] to-[#9370DB] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-display text-2xl">1</span>
                </div>
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-2xl font-display text-gray-800 mb-2">
                  Set Check-In
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose when you need to check in. Set a timer for your activity or journey.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-3xl shadow-card mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF69B4] to-[#9370DB] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-display text-2xl">2</span>
                </div>
                <div className="text-5xl mb-4">⏳</div>
                <h3 className="text-2xl font-display text-gray-800 mb-2">
                  Timer Counts Down
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Go about your activity while the timer runs. Stay safe knowing you're monitored.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-3xl shadow-card mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF69B4] to-[#9370DB] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-display text-2xl">3</span>
                </div>
                <div className="text-5xl mb-4">📢</div>
                <h3 className="text-2xl font-display text-gray-800 mb-2">
                  Besties Alerted
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  If you don't check in on time, your trusted circle is instantly notified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 rounded-3xl shadow-card">
            <h2 className="text-3xl md:text-4xl gradient-text mb-4">
              Ready to stay safe together?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands who trust Besties to keep them connected and protected
            </p>
            <a 
              href="https://app.bestiesapp.xyz"
              className="btn-primary"
            >
              Get Started Now →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display gradient-text mb-1">
                Besties 💜
              </h3>
              <p className="text-gray-500 text-sm">
                Never check in alone
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="mailto:support@bestiesapp.xyz" 
                className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
              >
                Support
              </a>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary transition-colors text-xl"
                  aria-label="Social"
                >
                  💬
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary transition-colors text-xl"
                  aria-label="Email"
                >
                  ✉️
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-pink-100">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Besties. All rights reserved. Made with 💜
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
```

---

## .gitignore

```
node_modules
build
build-ssr
*.local
.DS_Store
.vscode/*
```

---

## After creating these files:

```bash
npm install
npm run deploy
```

Then enable GitHub Pages:
- Settings → Pages
- Source: Branch `gh-pages`, Folder `/ (root)`
- Save

Site will be live at: https://cryptoboost4-spec.github.io/thisdogweb-this-is-the-website-/
