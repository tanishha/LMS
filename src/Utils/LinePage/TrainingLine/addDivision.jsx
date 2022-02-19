import React, { useState } from "react";

import { Modal, Button, Form } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import InputComponent from "../input";
import DropdownComponent from "../employeeDropdown";

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

function AddDivision() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
          marginRight: " 10px",
          borderRadius: "15px",
          borderColor: "#219f94",
          color: "#219f94",
          marginBottom: "20px",
        }}
        onClick={showModal}
      >
        Add Division
      </Button>
      <Modal
        title="Add Division"
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
            name="linedivision"
            label="Line Division"
            rules={[
              {
                required: true,
                message: "Please enter Line Division",
              },
            ]}
          >
            <InputComponent />
          </Form.Item>

          <Form.List name="coordinators">
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    {...formItemLayout}
                    label="Coordinator"
                    required={true}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Please choose coordinator's name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <DropdownComponent />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{}}
                    icon={<PlusOutlined />}
                  >
                    Add Coordinator
                  </Button>

                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
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
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddDivision;
