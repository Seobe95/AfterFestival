import React, { InputHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AuthInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function AuthInput({ ref, ...props }: AuthInputProps) {
  return <input ref={ref} className="py-1 outline-none" {...props} />;
}

export default AuthInput;
