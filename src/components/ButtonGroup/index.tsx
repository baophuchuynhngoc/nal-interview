import React from "react";
import { useRouter } from "next/router";

const ButtonGroup = ({ setShowDetail }) => {
  const router = useRouter();
  const directDetails = () => {
    setShowDetail();
    router.push("/details");
  };
  return (
    <div className="button-group d-flex">
      <button
        type="button"
        className="btn btn-outline-primary mr-3"
        onClick={directDetails}
      >
        Show Detail
      </button>
      <button type="button" className="btn btn-outline-warning">
        Edit
      </button>
    </div>
  );
};

export default ButtonGroup;
