"use client";

import AuthContainer from "@/components/auth/AuthContainer";
import AuthInput from "@/components/auth/AuthInput";
import CustomButton from "@/components/default/CustomButton";
import React, { useRef } from "react";

function SignUpPage() {
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <AuthContainer title="회원가입">
      <form className="flex w-full flex-col items-start gap-4">
        <label
          htmlFor="email"
          className="focus-within:border-secondary-400 flex w-full flex-col border-1 border-transparent p-2"
        >
          아이디
          <AuthInput
            id="email"
            name="email"
            ref={emailRef}
            type="email"
            onFocus={() => {
              console.log("email");
            }}
          />
        </label>
        <label
          htmlFor="password"
          className="focus-within:border-secondary-400 flex w-full flex-col border-1 border-transparent p-2"
        >
          비밀번호
          <AuthInput id="password" name="password" type="password" />
        </label>
        <label
          htmlFor="password-check"
          className="focus-within:border-secondary-400 flex w-full flex-col border-1 border-transparent p-2"
        >
          비밀번호 확인
          <AuthInput
            id="password-check"
            name="password-check"
            type="password"
          />
        </label>
        <CustomButton label="회원가입" size="large" buttonType="secondary" />
      </form>
    </AuthContainer>
  );
}

export default SignUpPage;
