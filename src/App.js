import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { Button } from "antd";
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";

import SearchBox from "./components/SearchBox";
import BookList from "./components/BookList";

const url = `https://5f3e40ab13a9640016a6880d.mockapi.io/books`;

export default function App() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    (async () => {
      const { data } = await axios(url, {
        headers: { "Content-type": "application/json" }
      }).catch((e) => []);
      setList(data);
    })();
  }, []);
  const handleSearch = () => {
    setFilter(input.toUpperCase());
    setInput("");
  };

  return (
    <div className="App container">
      <div className="">
        <SearchBox
          onInput={(e) => setInput(e.target.value)}
          handleSearch={handleSearch}
        />
        <Button type="primary" onClick={handleSearch} className="btn">
          <SearchOutlined />
          Search
        </Button>
      </div>
      <div className="">
        <BookList
          list={list.filter(
            (book) => book.title.toUpperCase().indexOf(filter) > -1
          )}
        />
      </div>
    </div>
  );
}
