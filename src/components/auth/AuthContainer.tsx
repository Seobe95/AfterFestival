"use client";
import React from "react";

interface AuthContainerProps {
  children: React.ReactNode;
  title: string;
}

function AuthContainer({ children, title }: AuthContainerProps) {
  return (
    <div className="border-borderLine-light dark:border-borderLine-dark flex max-w-80 flex-auto flex-col items-center justify-center gap-4 rounded-lg border-2 p-5">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default AuthContainer;
