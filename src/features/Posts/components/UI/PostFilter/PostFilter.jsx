import React from "react";
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";
import cl from "./PostFilter.module.css";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className={cl.postFilter__wrapper}>
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        defaultValue="Sort by"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
