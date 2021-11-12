import React, { useState } from "react";
import { useRouter } from "next/router";
import ModalEdit from "@components/ModalEdit";
import Link from 'next/link'

const ButtonGroup = ({ setShowDetail, item, updateData }: any) => {
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();

  const directDetails = () => {
    router.push("/detail");
  };
  const handleShowEdit = () => {
    setShowEdit(true);
  };
  return (
    <div className="button-group d-flex">
      <Link href={`/detail/${item.id}`}>
        <a className="btn btn-outline-primary mr-3">Show Detail</a>
      </Link>

      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={handleShowEdit}
      >
        Edit
      </button>
      <ModalEdit
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        item={item}
        updateData={updateData}
      />
    </div>
  );
};

export default ButtonGroup;
