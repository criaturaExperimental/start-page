import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </>
  );
}
