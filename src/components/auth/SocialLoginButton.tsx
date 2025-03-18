import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";

interface SocialLoginButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loginType: "kakao" | "google";
}

function SocialLoginButton({
  label,
  loginType,
  ...props
}: SocialLoginButtonProps) {
  let buttonStyle =
    "bg-kakao-container text-kakao-symbol hover:bg-kakao-containerHover";
  if (loginType === "google")
    buttonStyle =
      "bg-google-container text-google-symbol dark:bg-google-container-dark dark:text-google-symbol-dark border-1 border-google-stroke dark:border-google-stroke-dark dark:hover:bg-google-container-dark-hover hover:bg-gray-100";

  return (
    <button
      className={`flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg py-2 text-sm font-semibold ${buttonStyle}`}
      {...props}
    >
      {loginType === "google" ? (
        <Image
          src={"/social_logos/google.svg"}
          width={16}
          height={16}
          alt="구글 로그인 아이콘"
        />
      ) : (
        <Image
          src={"/social_logos/kakao.svg"}
          width={16}
          height={16}
          alt="카카오 로그인 아이콘"
        />
      )}
      <span>{label}</span>
    </button>
  );
}

export default SocialLoginButton;
