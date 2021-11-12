import ActionBar from "@components/ActionBar";
import ArticlesList from "@components/ArticlesList";
import Header from "@components/Header";
import SearchBar from "@components/SearchBar";
import axios from "axios";
import React from "react";

const Home: React.FC = ({ articles, totalPages }) => {
  return (
    <div className="main-page d-flex flex-column min-vh-100">
      <ActionBar />
      
      <ArticlesList articles={articles} totalPages={totalPages} />
    </div>
  );
};

export const getStaticProps = async () => {
  const resAll = await axios.get(
    "https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs"
  );
  const totalPages = Math.ceil(resAll?.data.length / 10);

  const res = await axios.get(
    "https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs?page=1&limit=10"
  );

  return {
    props: { articles: res?.data || [], totalPages },
  };
};
export default Home;
