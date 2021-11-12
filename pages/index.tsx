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
 
  try {
    const resAll = await axios.get(
   `${process.env.API_URL}/blogs`
    );
    const totalPages = Math.ceil(resAll?.data.length / 10);

    const res = await axios.get(
      `${process.env.API_URL}/blogs?page=1&limit=10`
    );

    return {
      props: { articles: res?.data || [], totalPages },
    };
  } catch (err) {
    console.log(err);
  }
};
export default Home;
