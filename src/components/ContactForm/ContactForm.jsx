import { useId } from "react";
import { Field, Form, Formik } from "formik";

const ContactForm = ({ initialValues, onSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field id={nameFieldId} name="name" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field id={numberFieldId} name="number" type="tel" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
