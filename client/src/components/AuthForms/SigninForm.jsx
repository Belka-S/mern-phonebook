import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast';

import LinkRoute from 'components/AuthForms/AuthLinks/LinkRoute';
import LinkBtn from './AuthLinks/LinkBtn';
import SignBtn from './AuthBtns/SignBtn';
import GoogleBtn from './AuthBtns/GoogleBtn';
import { loginThunk } from 'store/auth/authOperations';
import { Form, Field, Label } from 'components/AuthForms/AuthForms.styled';
import { ErrorMessage, Div } from 'components/AuthForms/AuthForms.styled';
import { signinSchema } from 'utils/validation';

const initialValues = { email: '', password: '' };

const SigninForm = ({ setIsVerify, setIsForgot, setEmail }) => {
  const dispatch = useDispatch();

  const isDisabled = ({ errors, values }) => {
    const { email, password } = values;

    return Object.keys(errors).length || !email || !password;
  };

  const onClick = ({ email }) => {
    setEmail(email);
    setIsForgot(true);
  };

  const onSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(pld => setIsVerify(!pld.result.user.verifiedEmail))
      .catch(err => err.includes('401') && toast('Unauthorized'));

    actions.resetForm();
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
            <LinkRoute to="/signup">Don't have an account?</LinkRoute>
          </Div>

          {Object.keys(initialValues).map(key => (
            <Fragment key={key}>
              <Label>
                {key.at(0).toUpperCase() + key.substring(1) + ':'}
                <pre> </pre>
                <ErrorMessage name={key} component="span" />
                {key === 'password' && (
                  <LinkBtn onClick={() => onClick(values)}>
                    Forgot your pass?
                  </LinkBtn>
                )}
              </Label>
              <Field type={key} name={key} />
            </Fragment>
          ))}

          <SignBtn disabled={isDisabled({ values, errors })}>Sign in</SignBtn>

          <GoogleBtn />
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;

SigninForm.propTypes = {
  setIsVerify: PropTypes.func,
  setIsForgot: PropTypes.func,
  setEmail: PropTypes.func,
};
