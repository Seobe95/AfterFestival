import React from "react";

interface ReviewCardProps {
  size?: "small" | "large";
  festivalName: string;
  description: string;
  date: string;
  reviewNumber: number;
}

function ReviewCard({
  size = "samll",
  festivalName,
  description,
  date,
  reviewNumber,
}: ReviewCardProps) {
  return (
    <li>
      <div></div>
    </li>
  );
}

export default ReviewCard;
