import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <img className="p-2 cursor" src="/icons/home.png" />
      </Link>
    </div>
  );
};

export default Header;
