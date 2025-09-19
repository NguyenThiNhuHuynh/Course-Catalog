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
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) Accessible, themeable UI components
- [GSAP](https://gsap.com/) for animations  
- Custom components with React Hooks (`useState`, `useEffect`)  
- SVG icons with gradient support

---

## Responsive

- Mobile: < 768px
- Tablet (md): ≥ 768px
- Desktop (lg): ≥ 1024px

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
├── app/                         
│   ├── (root)/
│   │    ├──(home)/
│   │    │   └── page.tsx
│   │    ├── course/
│   │    │   ├── page.tsx
│   │    └──layout.tsx
│   ├── layout.tsx
│   └── global.css
├── components/
│   ├── card/
│   │    └── CourseCard.tsx
│   ├── filter/
│   │    └── CourseFilter.tsx
│   ├── shared/
│   │    ├── navbar/
│   │    │   └── Navbar.tsx
│   │    ├── other/
│   │    │   ├── GradientButton.tsx
│   │    │   ├── IconButton.tsx
│   │    │   └── SearchBar.tsx
│   │    └── theme/
│   │        └── Theme.tsx
│   └── ui/
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── card.tsx                      
├── contexts/
│   └── ThemeProvider.tsx                    
├── data/
│   └── courses.ts
├── lib/
│   └── utils.ts                      
├── public/
│   └── images/
├── gitgnore
├── components.json
├── eslint.config.mjs            
├── next.config.ts
├── tsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.json
└── README.md
```

---

## Figma

https://www.figma.com/design/ZvqT7T3kN5guD4kJjFfivN/Untitled?node-id=86-362&t=ALnsQkXcaMPdQHsT-0

---

## Deploy on Vercel

https://course-catalog-blond-eight.vercel.app/course

---

