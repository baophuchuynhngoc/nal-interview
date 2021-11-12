import React from "react";
import Link from "next/link";

const CreateButton = () => {
  return (
    <Link href="/create">
      <div className="create-btn">
        <button className="btn btn-outline-primary">Create</button>
      </div>
    </Link>
  );
};

export default CreateButton;
