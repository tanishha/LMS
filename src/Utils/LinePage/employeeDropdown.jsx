import React from "react";
import { Select } from "antd";
const { Option } = Select;

function DropdownComponent() {
  return (
    <Select
      labelInValue
      defaultValue={{ value: "lucy" }}
      style={{
        borderRadius: "15px",
        borderColor: "#219f94",
        width: "98%",
        marginLeft: "5px",
        boxShadow: " 0px 8px 16px 0px rgba(0,0,0,0.2)",
      }}
      // onChange={handleChange}
    >
      <Option value="jack">Jack (100)</Option>
      <Option value="lucy">Lucy (101)</Option>
    </Select>
  );
}

export default DropdownComponent;
