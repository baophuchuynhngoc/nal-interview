import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import map from "lodash/map";
import get from "lodash/get";

const ArticleDetail = ({detail = {}}) => {

  return (
    <div className="details-articles">
      <div className="status-bar mt-4 px-5">
        <h1 className="black">{get(detail, "title", "")}</h1>
      </div>
      <div className="content mt-3">
        <img src={get(detail, "image", "")} />
        <div className="black">
          <span className="black mr-3">Created At:</span>
          {get(detail, "createdAt", "")}
        </div>
        <div className="black">{get(detail, "content", "")}</div>
      </div>
    </div>
  );
};

export default ArticleDetail;
