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

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <Card className="w-full border border-light100_dark100 bg-transparent rounded-4 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-col items-center gap-3">
        <div className="flex flex-row w-full items-center justify-between rounded-md">
          <Image
            src={course.image}
            alt={course.title}
            width={50}
            height={50}
            className="object-contain"
          />
          <IconButton icon="mdi:heart" onClick={() => console.log("Liked")} />
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
