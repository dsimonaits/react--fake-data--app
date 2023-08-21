import React from "react";
import MyInput from "src/components/UI/input/MyInput";
import MySelect from "src/components/UI/select/MySelect";
import cl from "./PostFilter.module.css";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className={cl.postFilter__wrapper}>
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
