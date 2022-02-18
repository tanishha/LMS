import React, { useState } from "react";

import { DatePicker, Modal, Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import InputComponent from "./input";
import DropdownComponent from "./employeeDropdown";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function AddLine() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select date!",
      },
    ],
  };
  const dateFormat = "YYYY/MM/DD";

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSubmit = (e) => {};
  return (
    <>
      <Button
        icon={<PlusOutlined />}
        style={{
          float: "right",
          borderRadius: "15px",
          borderColor: "#219f94",
          color: "#219f94",
        }}
        onClick={showModal}
      >
        New Line
      </Button>
      <Modal
        title="Create New Line"
        style={{ color: "red", fontSize: "16px" }}
        visible={isModalVisible}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="newLine"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="lineCode"
            label="Line Code"
            rules={[
              {
                required: true,
                message: "Please enter Line Code",
              },
            ]}
          >
            <InputComponent />
          </Form.Item>
          <Form.Item
            name="lineName"
            label="Line Name"
            rules={[
              {
                required: true,
                message: "Please enter Line Name",
              },
            ]}
          >
            <InputComponent />
          </Form.Item>
          <Form.Item
            name="lineHead"
            label="Line Head"
            rules={[
              {
                required: true,
                message: "Please enter Line Head",
              },
            ]}
          >
            <DropdownComponent />
          </Form.Item>
          <Form.Item
            name="deputylineHead"
            label="Deputy Line Head"
            rules={[
              {
                required: true,
                message: "Please enter Deputy Line Head",
              },
            ]}
          >
            <DropdownComponent />
          </Form.Item>
          <Form.Item
            name="lineManager"
            label="Line Manager"
            rules={[
              {
                required: true,
                message: "Please enter Line Manager",
              },
            ]}
          >
            <DropdownComponent />
          </Form.Item>
          <Form.Item
            name="range-picker"
            label="Effective Date"
            {...rangeConfig}
          >
            <DatePicker
              format={dateFormat}
              style={{
                borderRadius: "15px",
                borderColor: "#219f94",
              }}
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              style={{
                color: "white",
                borderRadius: "15px",
                borderColor: "#219f94",
                backgroundColor: "#219f94",
                width: "100px",
              }}
              onClick={handleSubmit}
            >
              CREATE
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddLine;
