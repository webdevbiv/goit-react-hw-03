import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  email: "",
};

const FeedbackForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <>
      <p>Formik Form</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="username" />
          <Field type="email" name="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default FeedbackForm;
