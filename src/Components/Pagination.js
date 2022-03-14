import React from "react";

const Pagination = ({
  userPerPage,
  totalPosts,
  paginate,
  CurrentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / userPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={CurrentPage === 1 ? "page-item disabled" : ""}>
          <a
            onClick={() => setCurrentPage(CurrentPage - 1)}
            className="page-link"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className={CurrentPage === 1 ? "" : "page-item disabled"}>
          <a
            onClick={() => setCurrentPage(CurrentPage + 1)}
            className="page-link"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
