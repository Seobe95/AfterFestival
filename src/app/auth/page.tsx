import AuthContainer from "@/components/auth/AuthContainer";
import AuthLinkButton from "@/components/auth/AuthLinkButton";
import SocialLoginButton from "@/components/auth/SocialLoginButton";
import Link from "next/link";
import React from "react";

function AuthHome() {
  return (
    <AuthContainer title="로그인">
      <section className="flex flex-col gap-4">
        <SocialLoginButton label="카카오 로그인" loginType="kakao" />
        <SocialLoginButton label="구글로 로그인" loginType="google" />
        <Link href={"/auth/login"} legacyBehavior>
          <AuthLinkButton label="이메일 로그인" size="large" />
        </Link>
        <Link href={"/auth/signup"} legacyBehavior>
          <AuthLinkButton label="회원가입" size="large" buttonType="signup" />
        </Link>
      </section>
    </AuthContainer>
  );
}

export default AuthHome;
