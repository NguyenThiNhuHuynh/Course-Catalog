## Course Catalog (Front-End)

A simple, interactive Course Catalog front-end built with Next.js and TailwindCSS.  
Users can browse courses, filter by category, level, search by keyword, mark favorite courses.

---

## Features

- Display a list of courses with details: **title, description, level, category, duration, and image**.  
- Filters by **category** and **level**.  
- Keyword search for course titles.  
- **Favorites (Like)** feature: mark/unmark courses with a heart icon.  
- **Show Favorites Only** option to quickly filter favorite courses.  
- Shows the number of results vs. total courses.  
- Smooth animations with **GSAP**:
  - Background SVG path animation  
  - Bloom/dot effects with fading and scaling  
- **Responsive design**: works on desktop and mobile.  
- Dark/Light theme support.

---

## Tech Stack

- [Next.js](https://nextjs.org/)  
- [React](https://react.dev/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [GSAP](https://gsap.com/) for animations  
- Custom components with React Hooks (`useState`, `useEffect`)  
- SVG icons with gradient support

---

## Getting Started
```bash
- Clone the repository:
git clone https://github.com/NguyenThiNhuHuynh/Course-Catalog.git
- Install dependencies:
cd Course-Catalog
npm install
- Run the development server:
npm run dev
- Open your browser at:
http://localhost:3000
```

---

## Project Structure
```
Course-Catalog/
├── public/
│   └── images/                   # Course images
├── src/
│   ├── components/
│   │   ├── card/                 # CourseCard, IconButton, etc.
│   │   ├── filter/               # CourseFilter component
│   │   └── shared/other/         # Shared components like GradientButton
│   ├── data/
│   │   └── courses.ts            # Sample course data
│   ├── pages/ / app/             # Next.js routes
│   └── styles/                   # Custom styles if needed
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Deploy on Vercel

https://course-catalog-blond-eight.vercel.app/course

---

