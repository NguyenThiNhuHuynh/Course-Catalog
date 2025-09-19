// data/courses.ts
export interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  category: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Next.js Fundamentals",
    description: "Learn the basics of Next.js, routing, and rendering methods.",
    level: "Beginner",
    duration: "4 weeks",
    category: "Web Development",
    image: "/images/nextjs.png",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Dive into compound components, render props, and hooks.",
    level: "Intermediate",
    duration: "6 weeks",
    category: "Frontend",
    image: "/images/react.png",
  },
  {
    id: 3,
    title: "TypeScript for Developers",
    description: "Build safer React apps using TypeScript with strict typing.",
    level: "All Levels",
    duration: "5 weeks",
    category: "Programming",
    image: "/images/typescript.png",
  },
];
