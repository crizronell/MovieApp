import React from "react";
import Link from "next/link";
import { SiThemoviedatabase } from "react-icons/si";

function Header() {
  return (
    <div>
      <Link href="/" className="text-white">
        <SiThemoviedatabase className="ml-10 text-5xl" />
      </Link>
    </div>
  );
}

export default Header;
