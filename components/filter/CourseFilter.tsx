"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SearchBar from "../shared/other/SearchBar";
import { Icon } from "@iconify/react";

type CourseFilterProps = {
  categories: string[];
  levels: string[];
  selectedCategories: string[];
  selectedLevels: string[];
  onFilterCategory: (cats: string[]) => void;
  onFilterLevel: (lvls: string[]) => void;
  onSearch: (keyword: string) => void;
};

export default function CourseFilter({
  categories,
  levels,
  selectedCategories,
  selectedLevels,
  onFilterCategory,
  onFilterLevel,
  onSearch,
}: CourseFilterProps) {
  const [openCategory, setOpenCategory] = useState(false);
  const [openLevel, setOpenLevel] = useState(false);

  const toggleCategory = (cat: string) => {
    const isSelected = selectedCategories.includes(cat);
    const next = isSelected
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];

    onFilterCategory(next);
  };

  const toggleLevel = (lvl: string) => {
    const isSelected = selectedLevels.includes(lvl);
    const next = isSelected
      ? selectedLevels.filter((l) => l !== lvl)
      : [...selectedLevels, lvl];

    onFilterLevel(next);
  };

  return (
    <div className="w-full px-4 md:px-0 md:w-[90%] flex flex-col gap-6 lg:w-[80%]">
      <SearchBar
        placeholder="Search course"
        size="md"
        onChange={onSearch}
        className="dark:border-none border border-light400_dark500 dark:bg-[#1B1C1E]"
      />

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setOpenCategory(!openCategory)}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-dark100_light500 transition"
        >
          <Icon
            icon={openCategory ? "mdi:chevron-down" : "mdi:chevron-right"}
            width="18"
            height="18"
          />
          Filter by category
        </button>

        {openCategory && (
          <div className="flex flex-wrap items-center gap-3 pl-6">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                className="px-3 py-[6px] rounded-[20px] text-sm font-medium"
                variant={
                  selectedCategories.includes(cat) ? "secondary" : "default"
                }
                onClick={() => toggleCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setOpenLevel(!openLevel)}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-dark100_light500 transition"
        >
          <Icon
            icon={openLevel ? "mdi:chevron-down" : "mdi:chevron-right"}
            width="18"
            height="18"
          />
          Filter by level
        </button>

        {openLevel && (
          <div className="flex flex-wrap items-center gap-3 pl-6">
            {levels.map((lvl) => (
              <Button
                key={lvl}
                size="sm"
                className="rounded-full"
                variant={selectedLevels.includes(lvl) ? "secondary" : "default"}
                onClick={() => toggleLevel(lvl)}
              >
                {lvl}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
