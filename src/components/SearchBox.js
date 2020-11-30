import React, { Component, createRef } from "react";
import { Input, Space } from "antd";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { isFocused: false, text: "" };
    this.searchField = createRef();
  }
  componentDidMount() {
    this.searchField.current.focus();
  }
  render() {
    const { onInput, handleSearch } = this.props;
    return (
      <Space>
        <Input
          ref={this.searchField}
          placeholder="book title to search ..."
          onChange={onInput}
          onPressEnter={handleSearch}
        />
      </Space>
    );
  }
}
