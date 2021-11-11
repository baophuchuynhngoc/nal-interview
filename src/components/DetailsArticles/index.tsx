import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import map from "lodash/map";
import get from "lodash/get";

const DetailsArticles = () => {
  const [datas, setDatas] = useState([]);
  const router = useRouter();
  const directHome = () => {
    router.push("/");
  };

  const getData = () => {
    axios
      .get("https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs/1")
      .then((response) => {
        const myData = response.data;
        setDatas(myData);
      });
  };

  useEffect(() => getData(), []);
  return (
    <div className="details-articles">
      <div className="status-bar mt-4 px-5">
        <span className="cursor home-direct" onClick={directHome}>
          Home
        </span>
        <span>
          <img src="/icons/next.png" />
        </span>
        <span>{get(datas, "title", "")}</span>
      </div>
      <div className="content  mt-3">
        <img src={get(datas, "image", "")} />
        <div>{get(datas, "content", "")}</div>
      </div>
    </div>
  );
};

export default DetailsArticles;
