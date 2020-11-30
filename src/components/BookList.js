import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import "./BookList.css";

export default function BookList({ list }) {
  const columns = [
    {
      title: "Cover",
      dataIndex: "coverUrl",
      key: "coverUrl",
      width: "10%",
      render: (src) => ({
        children: <img src={src} className="book-list__img" alt="" />
      })
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "40%"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "40%"
    }
  ];
  return <Table columns={columns} dataSource={list} bordered />;
}

BookList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  coverUrl: PropTypes.string
};
