import ActionBar from "@components/ActionBar";
import ArticlesList from "@components/ArticlesList";
import Header from "@components/Header";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="main-page d-flex flex-column min-vh-100">
      <Header />
      <ActionBar />
      <ArticlesList />
    </div>
  );
};

export default Home;
