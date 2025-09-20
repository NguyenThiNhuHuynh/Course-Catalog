"use client";

import { useState, useEffect } from "react";
import { courses } from "@/data/courses";
import CourseCard, { HEART_PATH } from "@/components/card/CourseCard";
import PageContainer from "@/components/container/pageContainer";
import CourseFilter from "@/components/filter/CourseFilter";
import { Button } from "@/components/ui/button";

export default function Page() {
  const categories = [...new Set(courses.map((c) => c.category))];
  const levels = ["Beginner", "Intermediate", "Advance"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [keyword, setKeyword] = useState("");
  const [likedCourses, setLikedCourses] = useState<number[]>([]);
  const [showLikedOnly, setShowLikedOnly] = useState(false);
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

    if (showLikedOnly) {
      result = result.filter((c) => likedCourses.includes(c.id));
    }

    setFilteredCourses(result);
  }, [
    selectedCategories,
    selectedLevels,
    keyword,
    showLikedOnly,
    likedCourses,
  ]);

  const handleToggleLike = (id: number) => {
    setLikedCourses((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  return (
    <PageContainer>
      <h1 className="text-[36px] text-blow font-medium jost text-gradient">
        Available Courses
      </h1>
      <p className="text-muted-foreground px-4 text-center">
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

      <div className="w-full px-4 md:px-0 md:w-[90%] lg:w-[80%]  flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{filteredCourses.length}</span>{" "}
          of <span className="font-medium">{courses.length}</span> courses
        </p>

        <Button
          variant={showLikedOnly ? "secondary" : "default"}
          size="sm"
          onClick={() => setShowLikedOnly(!showLikedOnly)}
          className="flex items-center gap-2 font-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="shrink-0"
          >
            <defs>
              <linearGradient
                id="heartGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ffcb67" />
                <stop offset="30%" stopColor="#ed5409" />
                <stop offset="70%" stopColor="#506179" />
                <stop offset="100%" stopColor="#214e81" />
              </linearGradient>
            </defs>
            <path d={HEART_PATH} fill="url(#heartGradient)" />
          </svg>
          Favorites
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-0 md:w-[90%] lg:w-[80%]">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            liked={likedCourses.includes(course.id)}
            onToggleLike={() => handleToggleLike(course.id)}
          />
        ))}
      </div>
    </PageContainer>
  );
}
