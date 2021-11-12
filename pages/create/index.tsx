import CreateArticles from "@components/CreateArticles";
import Header from "@components/Header";
import React from "react";

const CreatePage = () => {
  return (
    <div className="create-page">
      <Header />
      <CreateArticles />
    </div>
  );
};

export default CreatePage;
