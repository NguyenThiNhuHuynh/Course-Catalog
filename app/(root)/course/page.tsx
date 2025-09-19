"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/card/CourseCard";
import PageContainer from "@/components/container/pageContainer";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <PageContainer>
      <h1 className="text-[36px] text-blow font-medium jost text-glow">
        Available Courses
      </h1>
      <p className="text-muted-foreground">
        Browse through our curated list of courses and start learning today!
      </p>

      <div className="flex flex-wrap justify-center gap-3">
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </PageContainer>
  );
}
