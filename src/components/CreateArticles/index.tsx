import React, { useEffect, useState } from "react";
import ButtonGroup from "@components/ButtonGroup";
import map from "lodash/map";
import get from "lodash/get";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateArticles = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  let createdAt = new Date();
  const postData = (e: any) => {
    e.preventDefault();
    axios.post(`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs`, {
      createdAt,
      title,
      content,
      image,
    });
    toast["success"]("Create successfully");
  };

  return (
    <div className="create-articles p-5">
      <div className="d-flex flex-column">
        <label>Image Link</label>
        <input name="image" onChange={(e) => setImage(e.target.value)} />
        <label>Title</label>
        <input name="title" onChange={(e) => setTitle(e.target.value)} />
        <label>Content</label>
        <input name="content" onChange={(e) => setContent(e.target.value)} />
      </div>
      <div className="btn-group mt-4">
        <button className="btn btn-primary mr-4" onClick={postData}>
          Save
        </button>
        <Link href="/">
          <button className="btn btn-danger">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateArticles;
