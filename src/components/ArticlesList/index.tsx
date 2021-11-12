import React, { useEffect, useState } from "react";
import ButtonGroup from "@components/ButtonGroup";
import map from "lodash/map";
import axios from "axios";

const ArticlesList = () => {
  const [datas, setDatas] = useState({});
  const [showDetail, setShowDetail] = useState({});
  const getData = () => {
    axios
      .get("https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs")
      .then((response) => {
        const articlesList = response.data;
        setDatas(articlesList);
      });
  };

  const setData = ({data} :any) => {
    let { id, title, content, image } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', title);
    localStorage.setItem('Last Name', content);
    localStorage.setItem('Checkbox Value', image)
}

  

  useEffect(() => getData(), []);
  return (
    <div className="articles-list px-5">
      <ul className="list-unstyled">
        {map(datas, (item, index) => {
          return (
            <li className="media my-4" key={index}>
              <img src={item.image} className="mr-3" />
              <div className="media-body ">
                <h4 className="mt-0 mb-1 black">{item.title}</h4>
                {item.content}
                <ButtonGroup setShowDetail={setShowDetail} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
