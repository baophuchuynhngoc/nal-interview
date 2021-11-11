import React, { useEffect, useState } from "react";
import ButtonGroup from "@components/ButtonGroup";
import { List } from "src/constants";
import map from "lodash/map";
import axios from "axios";

const ArticlesList = () => {
  const [datas, setDatas] = useState([]);
  const [showDetail, setShowDetail] = useState({});
  const getData = () => {
    axios
      .get("https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs")
      .then((response) => {
        const myData = response.data;
        setDatas(myData);
      });
  };

  const handleShowDetail = (detailData = {}) => {
      const data = map (datas, (item) => {
          let obj = item;
          if (obj.id === detailData.id) {
              obj = detailData
          }

          return obj;
      });

    setShowDetail(data);
  }

  useEffect(() => getData(), []);
  return (
    <div className="articles-list px-5">
      <ul className="list-unstyled">
        {map(datas, (data, index) => {
          return (
            <li className="media my-4" key={index}>
              <img src={data.image} className="mr-3" />
              <div className="media-body ">
                <h4 className="mt-0 mb-1 black">{data.title}</h4>
                {data.content}
                <ButtonGroup setShowDetail={setShowDetail}/>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
