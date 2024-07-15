import React from 'react';
import { Form, Input } from 'antd';

const ClaimForm = ({ formData, handleInputChange }) => {
  return (
    <Form
      layout="vertical"
      style={{ marginTop: '40px' }}
    >
      <Form.Item
        label="Name of the member"
        name="name"
        rules={[{ required: true, message: 'Please enter name of the member!' }]}
      >
        <Input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Item>
    </Form>
  );
};
export default ClaimForm;
