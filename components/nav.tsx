import React from "react";
import Link from "next/link";

const nav = () => {
  return (
    <nav className="AppNav">
      <Link href="/">logo</Link>
      <Link href="/search">search bar</Link>
      <Link href="/profile">profile</Link>
    </nav>
  );
};

export default nav;
