"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/data/courses";
import Image from "next/image";
import IconButton from "../shared/other/IconButton";
import GradientButton from "../shared/other/GradientButton";

const HEART_PATH =
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 \
   2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 \
   C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 \
   22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

interface Props {
  course: Course;
  liked: boolean;
  onToggleLike: () => void;
}

export default function CourseCard({ course, liked, onToggleLike }: Props) {
  return (
    <Card className="w-full border border-light400_dark500 bg-transparent rounded-4 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-col items-center gap-3">
        <div className="flex flex-row w-full items-center justify-between rounded-md">
          <Image
            src={course.image}
            alt={course.title}
            width={50}
            height={50}
            className="object-contain"
          />
          <IconButton
            svg={HEART_PATH}
            onClick={onToggleLike}
            gradient={liked}
          />
        </div>

        <div>
          <CardTitle className="text-lg font-semibold">
            {course.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
            {course.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex gap-2 flex-wrap">
        <Badge className="px-3 py-[6px] rounded-5 text-sm font-medium text-dark300_light600">
          {course.level}
        </Badge>

        <Badge className="px-3 py-[6px] rounded-5 text-sm font-medium text-dark300_light600">
          {course.category}
        </Badge>
      </CardContent>

      <CardFooter className="px-5 justify-end">
        <GradientButton
          title="Start learning"
          onClick={() => console.log("Clicked!")}
        />
      </CardFooter>
    </Card>
  );
}
