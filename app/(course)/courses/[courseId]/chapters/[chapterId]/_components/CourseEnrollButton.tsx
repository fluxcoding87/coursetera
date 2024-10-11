/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const CourseEnrollButton = ({
  price,
  courseId,
}: {
  price: number;
  courseId: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const onClick = async () => {
    try {
      const response = await axios.post(`/api/courses/${courseId}/checkout`);
      window.location.assign(response.data.url);
    } catch {
      toast.error("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      size="sm"
      className="w-full md:w-auto"
      onClick={onClick}
      disabled={isLoading}
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default CourseEnrollButton;
