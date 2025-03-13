import Link from "next/link";

export default function Home() {
  return (
    <div className="text-text-primary-light min-h-screen p-6">
      <Link
        href={"/auth"}
        className="text-primarytxt-light dark:text-primarytxt-dark"
      >
        회원가입
      </Link>
      <p className="text-primarytxt-light dark:text-primarytxt-dark">
        회원가입
      </p>
    </div>
  );
}
