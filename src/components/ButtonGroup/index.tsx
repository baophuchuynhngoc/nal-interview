import React, { useState } from "react";
import { useRouter } from "next/router";
import ModalEdit from "@components/ModalEdit";

const ButtonGroup = ({ setShowDetail }: any) => {
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();
  const directDetails = () => {
    setShowDetail();
    router.push("/details");
  };
  const handleShowEdit = () => {
    setShowEdit(true);
  };
  console.log(showEdit);
  return (
    <div className="button-group d-flex">
      <button
        type="button"
        className="btn btn-outline-primary mr-3"
        onClick={directDetails}
      >
        Show Detail
      </button>
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={handleShowEdit}
      >
        Edit
      </button>
      <ModalEdit showEdit={showEdit} setShowEdit={setShowEdit} />
    </div>
  );
};

export default ButtonGroup;
