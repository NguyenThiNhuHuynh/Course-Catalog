"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import SearchBar from "../shared/other/SearchBar";

type CourseFilterProps = {
  categories: string[];
  levels: string[];
  onFilterCategory: (cat: string) => void;
  onFilterLevel: (level: string) => void;
  onSearch: (keyword: string) => void;
};

export default function CourseFilter({
  categories,
  levels,
  onFilterCategory,
  onFilterLevel,
  onSearch,
}: CourseFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const handleCategory = (cat: string) => {
    setSelectedCategory(cat);
    onFilterCategory(cat);
  };

  const handleLevel = (lvl: string) => {
    setSelectedLevel(lvl);
    onFilterLevel(lvl);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <SearchBar
        placeholder="Search course"
        size="lg"
        onSearch={(val) => onSearch(val)}
      />

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-muted-foreground">
          Filter by category
        </span>
        {categories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            className="rounded-full"
            variant={selectedCategory === cat ? "default" : "secondary"}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-muted-foreground">Filter by level</span>
        {levels.map((lvl) => (
          <Button
            key={lvl}
            size="sm"
            className="rounded-full"
            variant={selectedLevel === lvl ? "default" : "secondary"}
            onClick={() => handleLevel(lvl)}
          >
            {lvl}
          </Button>
        ))}
      </div>
    </div>
  );
}
