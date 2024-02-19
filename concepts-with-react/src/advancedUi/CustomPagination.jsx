import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePagination } from "../customHooks/pagination";
const CustomPagination = () => {
  const [items, setItems] = useState([]);
  // fetch comments from test server
  useEffect(() => {
    async function fetchComments() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchComments();
  }, []);
  //   console.log(items);
  const {
    currentItems,
    nextPage,
    prevPage,
    currentPage,
    totalNumOfPages,
    middlePages,
    jumpToPage,
  } = usePagination(items, 10);

  return (
    <>
      <PaginationComponent
        items={currentItems}
        next={nextPage}
        prev={prevPage}
        currentPage={currentPage}
        totalPages={totalNumOfPages}
        middlePages={middlePages}
        jumpToPage={jumpToPage}
        showMiddlePages={false}
      />
    </>
  );
};

export default CustomPagination;

export const PaginationComponent = ({
  items,
  next,
  prev,
  currentPage,
  totalPages,
  middlePages,
  jumpToPage,
  showMiddlePages,
}) => {
  return (
    <>
      <div className="flex h-[60vh] overflow-y-scroll flex-col gap-4 px-2 py-2">
        {items?.map((item) => {
          return <li key={item.id}>{item.body}</li>;
        })}
      </div>
      <div className="flex gap-4 px-4 py-4">
        <PageButton clickEvent={prev} title={"Prev"} />
        {showMiddlePages && (
          <DisplayMiddlePages
            middlePages={middlePages}
            jumpToPage={jumpToPage}
          />
        )}

        <PageButton clickEvent={next} title={"Next"} />
      </div>
      <div>
        <span>Current Page {currentPage}</span>
      </div>
    </>
  );
};

const PageButton = ({ clickEvent, title }) => {
  return (
    <>
      <button
        className="text-white bg-purple-500 rounded-md border-none outline-none px-2 py-2 cursor-pointer"
        onClick={clickEvent}
      >
        {title}
      </button>
    </>
  );
};

const DisplayMiddlePages = ({ middlePages, jumpToPage }) => {
  return (
    <>
      <div className="flex gap-3">
        {middlePages.map((page) => {
          return <button key={page} className="bg-transparent rounded-md border-none outline-none cursor-pointer" onClick={() => jumpToPage(page)}>{page}</button>;
        })}
      </div>
    </>
  );
};
