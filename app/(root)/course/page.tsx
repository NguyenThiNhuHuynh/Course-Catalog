"use client";

import { useState, useEffect } from "react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/card/CourseCard";
import PageContainer from "@/components/container/pageContainer";
import CourseFilter from "@/components/filter/CourseFilter";

export default function Page() {
  const categories = [...new Set(courses.map((c) => c.category))];
  const levels = ["Beginner", "Intermediate", "Advance"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [keyword, setKeyword] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    let result = courses;

    if (selectedCategories.length > 0) {
      result = result.filter((c) => selectedCategories.includes(c.category));
    }

    if (selectedLevels.length > 0) {
      result = result.filter((c) => selectedLevels.includes(c.level));
    }

    if (keyword) {
      result = result.filter((c) =>
        c.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredCourses(result);
  }, [selectedCategories, selectedLevels, keyword]);

  return (
    <PageContainer>
      <h1 className="text-[36px] text-blow font-medium jost text-gradient">
        Available Courses
      </h1>
      <p className="text-muted-foreground px-4">
        Browse through our curated list of courses and start learning today!
      </p>

      <CourseFilter
        categories={categories}
        levels={levels}
        selectedCategories={selectedCategories}
        selectedLevels={selectedLevels}
        onFilterCategory={setSelectedCategories}
        onFilterLevel={setSelectedLevels}
        onSearch={setKeyword}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-0 md:w-[90%] lg:w-[80%]">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </PageContainer>
  );
}
