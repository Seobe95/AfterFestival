import React, { ButtonHTMLAttributes } from "react";

interface CustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "small" | "middle" | "large";
  buttonType?: "primary" | "secondary" | "accent";
}

function CustomButton({
  label,
  size = "middle",
  buttonType = "primary",
  ...props
}: CustomButton) {
  let buttonSizeStyle = "h-8 px4";
  if (size === "middle") buttonSizeStyle = "max-w-20 w-full ";
  if (size === "large") buttonSizeStyle = "w-full";

  let buttonColor = "bg-primary-300 hover:bg-primary-200";
  if (buttonType === "secondary")
    buttonColor = "bg-secondary-300 hover:bg-secondary-200";
  if (buttonType === "accent")
    buttonColor = "bg-accent-300 hover:bg-accent-200";
  return (
    <button
      className={`text-primarytxt-dark flex cursor-pointer items-center justify-center rounded-lg py-2 text-sm font-semibold ${buttonSizeStyle} ${buttonColor}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default CustomButton;
