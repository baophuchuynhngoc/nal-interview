import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import axios from "axios";
import map from "lodash/map";
import get from "lodash/get";
import { useRouter } from "next/router";

const ModalEdit = ({ showEdit, setShowEdit, item, updateData }: any) => {
  const style = showEdit ? {} : { display: "none" };
  const handleClickHide = () => {
    setShowEdit(!showEdit);
    router.push("/");
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      maxWidth: "90rem",
      width: "85%",
      transform: "translate(-50%, -50%)",
    },
  };

  let router = useRouter();
  const [id, setID] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setID(id);
    setTitle(title);
    setContent(content);
    setImage(image);
  }, []);

  const updateAPIData = async () => {
    const res = await axios.put(
      `https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs/${item.id}`,
      {
        title,
        content,
      }
    );
    updateData(get(res, "data", {}));
    setShowEdit(false);
  };
  return (
    <ReactModal isOpen={showEdit} ariaHideApp={false} style={customStyles}>
      <div className="modal-edit d-flex align-items-center justify-content-between">
        <h1 className="black bold">Edit</h1>
        <div className="cursor" onClick={handleClickHide}>
          <img src="/icons/cancel.png" />
        </div>
      </div>
      <div className="edit-business d-flex flex-wrap align-items-center justify-content-between mt-4">
        <div className="edit-business-inner form-group">
          <label>Title</label>
          <input
            name={title}
            placeholder={title}
            defaultValue={title}
            value={title}
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Content</label>
          <input
            name={content}
            placeholder={content}
            defaultValue={content}
            value={content}
            className="form-control"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="group-btn d-flex justify-content-end">
        <button className="btn-success btn mr-3" onClick={updateAPIData}>
          Save
        </button>
        <button className="btn-success btn" onClick={handleClickHide}>
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default ModalEdit;
