import React from "react";
import { Input } from "antd";
const { Search } = Input;

function SearchComponent() {
  return <Search placeholder="Search Line Name" allowClear style={{ width: 200 ,float:'right',marginBottom:"10px",color:"red"}}/>

}

export default SearchComponent;
