import Pagination from "@components/Pagination";
import SearchBar from "@components/SearchBar";
import React from "react";

const ActionBar = () => {
    return (
        <div className="action-bar px-5 py-3 d-block d-lg-flex align-items-center justify-content-between">
            <SearchBar />
            <Pagination />
        </div>
    )
}

export default ActionBar;