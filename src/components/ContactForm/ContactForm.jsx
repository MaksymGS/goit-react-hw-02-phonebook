import { Formik, Field, Form } from 'formik';

export const ContactForm = ({ name, number, onAddContacts }) => {
  console.log(name);

  return (
    <Formik
      initialValues={{
        name: 'maxim',
        number: '956509806',
      }}
      onSubmit={(values, actions) => {
        onAddContacts(values);
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name"></Field>
        </label>
        <label>
          Number
          <Field type="tel" name="number"></Field>
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
