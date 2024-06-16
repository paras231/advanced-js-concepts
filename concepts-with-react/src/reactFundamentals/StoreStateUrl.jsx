import React from "react";
import { useSearchParams } from "react-router-dom";

const StoreStateUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    query: "search",
    test: true,
    userId: "",
  });
  const q = searchParams.get("query");
  const userId = searchParams.get("userId");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Store state in url</h3>
        <input
          type="search"
          placeholder="Search here..."
          value={q}
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set("query", e.target.value);
              return prev;
            })
          }
        />
        <input
          type="text"
          value={userId}
          placeholder="Enter user id"
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set("userId", e.target.value);
              return prev;
            })
          }
        />
      </div>
    </>
  );
};

export default StoreStateUrl;
