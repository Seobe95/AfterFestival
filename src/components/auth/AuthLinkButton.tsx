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
  let buttonSizeStyle = "max-w-20 h-8";
  if (size === "middle") buttonSizeStyle = "max-w-20 w-full ";
  if (size === "large") buttonSizeStyle = "w-full";

  let buttonColorStyle = "bg-primary-500 hover:bg-primary-400";
  if (buttonType === "signup")
    buttonColorStyle = "bg-secondary-500 hover:bg-secondary-400";

  return (
    <a
      className={`flex cursor-pointer items-center justify-center rounded-lg py-2 font-semibold ${buttonSizeStyle} ${buttonColorStyle}`}
      {...props}
    >
      {label}
    </a>
  );
}

export default AuthLinkButton;
