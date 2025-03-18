"use client";
import React from "react";

interface AuthContainerProps {
  children: React.ReactNode;
  title: string;
}

function AuthContainer({ children, title }: AuthContainerProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-primarytxt-light dark:text-primarytxt-dark text-center text-xl font-bold">
          {title}
        </h1>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default AuthContainer;
