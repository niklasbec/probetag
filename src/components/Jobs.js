import React from "react";
import { Divider } from "antd";
import "antd/dist/antd.css";

import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

function Jobs() {
  return (
    <div className="jobs">
      <h1 className="main-heading">Ihre Karriere bei AGRAVIS</h1>
      <div className="job-search">
        <div className="job-postings"></div>
        <div className="filter-pannel">
          <Search
            placeholder="input search text"
            onChange={(e) => console.log(e.target.value)}
            style={{ width: "80%" }}
            size="large"
          />
          <Divider />
          <Search
            placeholder="input search text"
            onChange={(e) => console.log(e.target.value)}
            style={{ width: "80%" }}
            size="large"
          />
          <Divider />
          <h3 className="category-heading">Kategorie</h3>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
