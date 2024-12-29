import { Form, Input, InputNumber, Button } from 'antd';

const AddMovieForm = ({ onMovieAdded }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const newMovie = {
      id: Date.now(), // Générer un identifiant unique
      ...values,
    };
    onMovieAdded(newMovie);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleFinish} layout="vertical">
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input the title!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Director"
        name="director"
        rules={[{ required: true, message: 'Please input the director!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Duration"
        name="duration"
        rules={[{ required: true, message: 'Please input the duration!' }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label="Image URL"
        name="imageUrl"
        rules={[{ required: true, message: 'Please input the image URL!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Budget"
        name="budget"
        rules={[{ required: true, message: 'Please input the budget!' }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Movie
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddMovieForm;