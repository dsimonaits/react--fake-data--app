import React from "react";
import { usePaginationCount } from "src/hooks/usePagination";
import cl from "./Pagination.module.css";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePaginationCount(totalPages);

  return (
    <div className={cl.page__wrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          className={
            page === p ? [cl.page, cl.page__current].join(" ") : cl.page
          }
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
