import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  password: z
    .string()
    .min(8, "비밀번호는 8자리 이상이어야 합니다.")
    .regex(/[A-Za-z]/, "비밀번호에는 영문자가 포함되어야 합니다.")
    .regex(/\d/, "비밀번호에는 숫자가 포함되어야 합니다.")
    .regex(/[\W_]/, "비밀번호에는 특수문자가 포함되어야 합니다."),
});

const signupSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  password: z
    .string()
    .min(8, "비밀번호는 최소 8자리 이상이어야 합니다.")
    .max(16, "비밀번호는 최대 16자까지 가능합니다.")
    .regex(/[A-Za-z]/, "비밀번호에는 영문자가 포함되어야 합니다.")
    .regex(/\d/, "비밀번호에는 숫자가 포함되어야 합니다.")
    .regex(/[\W_]/, "비밀번호에는 특수문자가 포함되어야 합니다."),
  nickname: z.string().max(16, "닉네임은 최대 16자까지 가능합니다."),
});

export { loginSchema, signupSchema };
