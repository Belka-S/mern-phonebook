import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import Link from 'components/common/Link/Link';
import { SignBtn, GoogleBtn } from './FormBtns/FormBtns';
import { loginThunk } from 'store/auth/authOperations';
import { Form, Field, Label } from 'components/SignForms/SignForms.styled';
import { ErrorMessage, Div } from 'components/SignForms/SignForms.styled';
import { signinSchema } from 'utils/validation';
import { errMsg } from 'utils/constants';
import { notify } from 'components/common/Toast/Toast';

const initialValues = { email: '', password: '' };

const SigninForm = () => {
  const dispatch = useDispatch();

  const isDisabled = ({ errors, values }) => {
    const { email, password } = values;
    return Object.keys(errors).length || !email || !password;
  };

  const onSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(pld => console.log(pld.status))
      .catch(err => notify(errMsg(err)));

    actions.resetForm();
  };

  const handleGoogleAuth = e => {
    console.log(e);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Div>
            <h2>Sign in</h2>
            <Link to="/signup">Don't have an account?</Link>
          </Div>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key} <ErrorMessage name={key} component="span" />
              </Label>
              <Field type={key} name={key} />
            </Fragment>
          ))}

          <SignBtn type="submit" disabled={isDisabled({ values, errors })}>
            Sign in
          </SignBtn>
          <GoogleBtn type="button" onClick={handleGoogleAuth} />
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;
