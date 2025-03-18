import React, { AnchorHTMLAttributes } from "react";

interface AuthLinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  size?: "small" | "middle" | "large";
  buttonType?: "email" | "signup";
}
function AuthLinkButton({
  label,
  size = "middle",
  buttonType = "email",
  ...props
}: AuthLinkButtonProps) {
  let buttonSizeStyle = "px-4 h-8";
  if (size === "middle") buttonSizeStyle = "max-w-20 w-full ";
  if (size === "large") buttonSizeStyle = "w-full";

  let buttonColorStyle = `bg-primary-300 hover:bg-primary-200`;
  if (buttonType === "signup")
    buttonColorStyle = `bg-secondary-300 hover:bg-secondary-200`;

  return (
    <a
      className={`text-primarytxt-dark flex cursor-pointer items-center justify-center rounded-lg py-2 text-sm font-semibold ${buttonSizeStyle} ${buttonColorStyle} `}
      {...props}
    >
      {label}
    </a>
  );
}

export default AuthLinkButton;
