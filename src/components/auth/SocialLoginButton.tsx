import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";
import googleIcon from "@/public/google.svg";
import kakaoIcon from "@/public/kakao.svg";

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
      "bg-google-container text-google-symbol dark:bg-google-container-dark dark:text-google-symbol-dark dark:border-google-stroke dark:hover:bg-google-container-dark-hover hover:bg-gray-100 dark:border-1";

  return (
    <button
      className={`flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg py-2 font-semibold ${buttonStyle}`}
      {...props}
    >
      {loginType === "google" ? (
        <Image
          src={googleIcon}
          width={16}
          height={16}
          alt="구글 로그인 아이콘"
        />
      ) : (
        <Image
          src={kakaoIcon}
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
