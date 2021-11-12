import React from "react";
import Link from "next/link";
import CreateButton from "@components/CreateButton";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between align-items-center">
      <Link href="/">
        <a>
          <img className="p-2 cursor" src="/icons/home.png" />
        </a>
      </Link>
      <CreateButton />
    </div>
  );
};

export default Header;
