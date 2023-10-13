import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignBtn from './AuthBtns/SignBtn';
import { Form, Field, ErrorMsg } from 'components/AuthForms/AuthForms.styled';
import { Label, Tittle } from 'components/AuthForms/AuthForms.styled';
import { verifySchema } from 'utils/validation';
import { useAuth } from 'utils/hooks';
import { refreshThunk, verifyThunk } from 'store/auth/authOperations';

const VerifyForm = () => {
  const dispatch = useDispatch();
  const { userEmail } = useAuth();

  const isValid = ({ values, errors, key }) => {
    const noValue = !values[key] && 'noValue';
    const isError = errors[key] ? 'error' : 'success';
    return noValue || isError;
  };

  const isDisabled = ({ errors }) => Object.keys(errors).length;

  const onSubmit = (values, actions) => {
    dispatch(verifyThunk(values))
      .unwrap() // .then(pld =>  console.log(pld))
      .catch(err => console.log(err))
      .then(() => dispatch(refreshThunk()));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ verificationCode: '' }}
      validationSchema={verifySchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Tittle>
            <h2>Verify: {userEmail}</h2>
          </Tittle>

          <Fragment>
            <Label>
              Code:
              <pre> </pre>
              <ErrorMsg name="verificationCode" component="span" />
            </Label>
            <Field
              type="text"
              name="verificationCode"
              validation={isValid({ values, errors, key: 'verificationCode' })}
            />
          </Fragment>

          <SignBtn disabled={isDisabled({ errors })}>Submit</SignBtn>
        </Form>
      )}
    </Formik>
  );
};

export default VerifyForm;
