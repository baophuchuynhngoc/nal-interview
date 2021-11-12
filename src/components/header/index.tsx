import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <a>
          <img className="p-2 cursor" src="/icons/home.png" />
        </a>
      </Link>
    </div>
  );
};

export default Header;
