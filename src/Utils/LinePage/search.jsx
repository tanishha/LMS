import React from "react";
import {
  Input
} from "antd";
const {
  Search
} = Input;

function SearchComponent(props) {
  return <Search placeholder = {
    props.title
  }
  allowClear style = {
    {
      width: 200,
      float: 'right',
      marginBottom: "10px",
      color: "red"
    }
  }
  />

}

export default SearchComponent;