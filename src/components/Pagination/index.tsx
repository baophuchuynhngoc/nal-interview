import React, { useEffect, useState } from "react";
import map from "lodash/map";
import axios from "axios";
import Loading from "@components/Loading";

const Pagination = ({ totalPages = 1, setData }) => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= totalPages; i++) {
      arr = [...arr, i];
    }
    setPages(arr);
  }, []);

  const fetchData = (page) => async () => {
    try {
      setShowLoading(true);
      const res = await axios.get(
        `${process.env.API_URL}/blogs?page=${page}&limit=10`
      );
      setData(res?.data || []);
      setCurrentPage(page);
      setShowLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      fetchData(currentPage + 1)();
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      fetchData(currentPage - 1)();
    }
  };

  return (
    <div>
      {showLoading && <Loading />}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled page-link" onClick={handlePrev}>
            Previous
          </li>
          {map(pages, (item) => (
            <li
              className={`page-item page-link ${
                item == currentPage ? "active" : ""
              }`}
              key={item}
              onClick={fetchData(item)}
            >
              {item}
            </li>
          ))}

          <li className="page-item page-link" onClick={handleNext}>
            Next
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
