# Jagathi Nagamani — Portfolio

React + Vite + Tailwind CSS v4, with GSAP, Framer Motion and Lenis (smooth scroll).

## Run locally
Requires Node.js 18+.
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production
```bash
npm run build      # outputs dist/
npm run preview    # test the production build
```

## Deploy
Upload the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages), or deploy the project directly with build command `npm run build` and output directory `dist`.

## Project structure
```
public/            static files served as-is (images, favicon, manifest, resume PDF)
  resume/Jagathi_Nagamani_Resume.pdf   <- your resume
  img/jagathi.jpg
src/
  data/content.js  all text, links, projects, nav and the resume path
  components/      one file per section
  styles/index.css theme (Charcoal + Pink) and global styles
  App.jsx, main.jsx
```

## Updating your resume
Replace `public/resume/Jagathi_Nagamani_Resume.pdf` with your new PDF using the **same file name**, then rebuild/redeploy. To use a different name or location, edit `RESUME_URL` in `src/data/content.js`.
"View Resume" opens the PDF in a new tab; "Download Resume" downloads it.

## Editing content
Projects, skills, education, etc. are in `src/data/content.js`. Each project shows only a GitHub button (its `repo` link).
