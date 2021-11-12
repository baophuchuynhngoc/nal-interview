import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import map from "lodash/map";
import get from "lodash/get";

const DetailsArticles = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const directHome = () => {
    router.push("/");
  };

  const getData = () => {
    axios
      .get(`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs/1`)
      .then((response) => {
        const myData = response.data;
        setData(myData);
      });
  };

  useEffect(() => getData(), []);
  return (
    <div className="details-articles">
      <div className="status-bar mt-4 px-5">
        <h1 className="black">{get(data, "title", "")}</h1>
      </div>
      <div className="content mt-3">
        <img src={get(data, "image", "")} />
        <div className="black">
          <span className="black mr-3">Created At:</span>
          {get(data, "createdAt", "")}
        </div>
        <div className="black">{get(data, "content", "")}</div>
      </div>
    </div>
  );
};

export default DetailsArticles;
