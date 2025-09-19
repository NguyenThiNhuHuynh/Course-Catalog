"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/card/CourseCard";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <main className="min-h-screen  from-background to-muted px-6 py-12">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Available Courses
        </h1>
        <p className="text-muted-foreground mb-8">
          Browse through our curated list of courses and start learning today!
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "secondary"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Course list */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
}
