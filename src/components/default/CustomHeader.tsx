import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLinkButton from "../auth/AuthLinkButton";

function CustomHeader() {
  return (
    <header className="flex items-center justify-center" role="banner">
      <div className="mx-auto flex h-15 w-full max-w-5xl items-center justify-between px-4">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="로고"
            className="w-25 object-contain"
            width={120}
            height={0}
          />
        </Link>
        <Link href={"/auth"} legacyBehavior>
          <AuthLinkButton label="로그인" size={"small"} />
        </Link>
      </div>
    </header>
  );
}

export default CustomHeader;
