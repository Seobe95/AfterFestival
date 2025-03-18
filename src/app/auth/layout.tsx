import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="border-borderLine-light dark:border-borderLine-dark w-full max-w-80 flex-col gap-4 rounded-lg border-2 p-5 text-sm">
        <div>{children}</div>
      </div>
    </main>
  );
}

export default AuthLayout;
