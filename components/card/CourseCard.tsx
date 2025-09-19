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
import { Button } from "@/components/ui/button";
import { Course } from "@/data/courses";
import CardContainer from "../container/cardContainer";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <CardContainer className="w-full max-w-sm">
      <Card className="w-full bg-background/80 border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            {course.title}
          </CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2 items-center">
          <Badge variant="secondary">{course.level}</Badge>
          <Badge>{course.duration}</Badge>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Enroll Now</Button>
        </CardFooter>
      </Card>
    </CardContainer>
  );
}
