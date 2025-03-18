"use client";

import AuthContainer from "@/components/auth/AuthContainer";
import AuthInput from "@/components/auth/AuthInput";
import AuthLinkButton from "@/components/auth/AuthLinkButton";
import CustomButton from "@/components/default/CustomButton";
import { useForm } from "@/hooks/auth/useForm";
import { loginSchema } from "@/utils/validate";
import Link from "next/link";

function LoginPage() {
  const { onSubmit, handleChange } = useForm<{
    email: string;
    password: string;
  }>({
    initialValue: { email: "", password: "" },
    schema: loginSchema,
    callback: postLogin,
  });

  async function postLogin<T>(values: T) {
    const result = await fetch("", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });

    console.log("result: ", await result.json());
  }
  return (
    <AuthContainer title="이메일 로그인">
      <form
        className="flex w-full flex-col items-start gap-4"
        onSubmit={onSubmit}
      >
        <label
          htmlFor="email"
          className="focus-within:border-secondary-400 flex w-full flex-col border-1 border-transparent p-2"
        >
          아이디
          <AuthInput
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
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
          <AuthInput
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </label>
        <CustomButton label="로그인" size="large" />
        <Link href={"/auth/signup"} legacyBehavior>
          <AuthLinkButton label="회원가입" buttonType="signup" size="large" />
        </Link>
      </form>
    </AuthContainer>
  );
}

export default LoginPage;
