import React from "react";
import Link from "next/link";

const CreateButton = () => {
  return (
    <Link href="/create">
      <div className="create-btn mr-5">
        <button className="btn btn-primary">Create</button>
      </div>
    </Link>
  );
};

export default CreateButton;
