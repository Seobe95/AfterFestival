import React, { ButtonHTMLAttributes } from "react";

interface CustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "small" | "middle" | "large";
}

function CustomButton({ label, size = "middle", ...props }: CustomButton) {
  let buttonSizeStyle = "max-w-20 h-8";
  if (size === "middle") buttonSizeStyle = "max-w-20 w-full ";
  if (size === "large") buttonSizeStyle = "w-full";

  return (
    <button
      className={`bg-primary-500 hover:bg-primary-400 flex cursor-pointer items-center justify-center rounded-lg py-2 font-semibold ${buttonSizeStyle} `}
      {...props}
    >
      {label}
    </button>
  );
}

export default CustomButton;
