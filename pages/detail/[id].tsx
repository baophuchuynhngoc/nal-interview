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
  try {
    const res = await axios.get(
      `${process.env.API_URL}/blogs/${query.id}`
    );
    return {
      props: {
        detail: res?.data || {},
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export default DetailPage;
