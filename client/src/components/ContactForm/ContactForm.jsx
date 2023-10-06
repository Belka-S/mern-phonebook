import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import GrigWrap from 'components/common/GrigWrap/GrigWrap';
import Button from 'components/common/Button/Button';
import { Form, Field, Label } from 'components/ContactForm/ContactForm.styled';
import { ErrorMessage } from 'components/ContactForm/ContactForm.styled';
import { RENDER_FIELDS, FORM_FIELDS } from 'utils/constants';
import { useContacts } from 'utils/hooks';
import { addContactThunk } from 'store/contacts/contactsOperations';
import { updateContactThunk } from 'store/contacts/contactsOperations';
import { contactSchema } from 'utils/validation';

const initialValues = {};

const ContactForm = ({ triggerForm, isContactForm }) => {
  const dispatch = useDispatch();
  const { contacts, activeContact } = useContacts();
  const [width, setWidth] = useState({ firstName: null, lastName: null });

  const spanEl = document.querySelector('span');
  const getWidth = el => el.getBoundingClientRect().width + 8;
  const getInitialValues = bool => {
    FORM_FIELDS.forEach(
      key => (initialValues[key] = bool === 'edit' ? activeContact[key] : '')
    );
    return initialValues;
  };

  useEffect(() => {
    const { firstName, lastName } = initialValues;
    const firstSpanEl = document.querySelector('.first-name');
    const lastSpanEl = document.querySelector('.last-name');
    firstSpanEl.innerHTML = firstName ? firstName : 'Name';
    lastSpanEl.innerHTML = lastName ? lastName : 'Surname';
    setWidth(prevState => ({ ...prevState, firstName: getWidth(firstSpanEl) }));
    setWidth(prevState => ({ ...prevState, lastName: getWidth(lastSpanEl) }));
  }, []);

  const onChange = e => {
    const { name, value, placeholder } = e.target;
    spanEl.innerHTML = value ? value : placeholder;
    setWidth(prevState => ({ ...prevState, [name]: getWidth(spanEl) }));
  };

  const onSubmit = (values, actions) => {
    const { firstName } = values;
    const isInContacts = contacts.some(
      el => el.firstName.toLowerCase() === firstName.toLowerCase()
    );
    if (isInContacts && isContactForm === 'add') {
      return alert(`${firstName} is already in contacts!`);
    }

    dispatch(
      isContactForm === 'add'
        ? addContactThunk(values)
        : updateContactThunk({ id: activeContact._id, contact: values })
    );
    // .unwrap().then(pld => console.log(pld)).catch(err => console.log(err));
    triggerForm(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={getInitialValues(isContactForm)}
      validationSchema={contactSchema}
      onSubmit={onSubmit}
    >
      <Form onChange={onChange} fnw={width.firstName} lnw={width.lastName}>
        <ErrorMessage name="firstName" component="div" />
        <ErrorMessage name="lastName" component="div" />
        <Field id="first" type="text" name="firstName" placeholder="Name" />
        <Field id="last" type="text" name="lastName" placeholder="Surname" />

        {RENDER_FIELDS.map(key => (
          <div className="wrapper" key={key}>
            <Label>
              {key}
              <Field type="text" name={key} />
            </Label>
            <ErrorMessage name={key} component="div" />
          </div>
        ))}

        <GrigWrap mm="40px" cg="3vw" gtc="1fr 1fr 1fr">
          <Button type="submit">Save</Button>
          <Button type="button" onClick={() => triggerForm(false)}>
            Cancel
          </Button>
        </GrigWrap>

        <span></span>
        <span className="first-name"></span>
        <span className="last-name"></span>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = { triggerForm: PropTypes.func };
