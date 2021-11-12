import React, { useEffect, useState } from "react";
import ButtonGroup from "@components/ButtonGroup";
import map from "lodash/map";
import get from "lodash/get";
import axios from "axios";
import Pagination from "@components/Pagination";
import SearchBar from "@components/SearchBar";

const ArticlesList = ({ articles = [], totalPages = 1 }) => {
  const [data, setData] = useState(articles);
  const [showDetail, setShowDetail] = useState(false);

  const updateData = (newItem) => {
    setData(
      map(data, (item) => {
        if (item.id == newItem.id) {
          item = newItem;
        }

        return item;
      })
    );
  };

  return (
    <div className="articles-list px-5">
      <div className="d-flex justify-content-between align-items-center">
        <SearchBar setData={setData} />
        <Pagination totalPages={totalPages} setData={setData} />
      </div>

      <ul className="list-unstyled">
        {map(data, (item, index) => {
          return (
            <li className="media my-4" key={index}>
              <img src={item.image} className="mr-3" />
              <div className="media-body ">
                <h4 className="mt-0 mb-1 black">{item.title}</h4>
                {item.content}
                <ButtonGroup
                  setShowDetail={setShowDetail}
                  item={item}
                  updateData={updateData}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
