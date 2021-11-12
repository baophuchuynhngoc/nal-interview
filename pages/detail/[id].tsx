import ArticleDetail from "@components/ArticleDetail";
import Header from "@components/Header";
import axios from "axios";
import React from "react";

const DetailPage = ({ detail }) => {
  return (
    <div className="detail-page">
      <ArticleDetail detail={detail} />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await axios.get(
    `https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs/${query.id}`
  );
  return {
    props: {
      detail: res?.data || {},
    },
  };
};

export default DetailPage;
