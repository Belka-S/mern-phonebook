import { useState } from 'react';

import Container from 'components/shared/Container/Container';
import SigninForm from 'components/AuthForms/SigninForm';
import ForgotForm from 'components/AuthForms/ForgotForm';
import Modal from 'layouts/Modal/Modal';
import VerifyForm from 'components/AuthForms/VerifyForm';

const SigninPage = () => {
  const [isVerify, setIsVerify] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Container w="400px" h="100vh" p="0" d="flex" fd="column" jc="center">
      <SigninForm
        setIsVerify={setIsVerify}
        setIsForgot={setIsForgot}
        setEmail={setEmail}
      />

      {isVerify && (
        <Modal onClick={() => setIsVerify(!isVerify)}>
          <VerifyForm />
        </Modal>
      )}

      {isForgot && (
        <Modal onClick={() => setIsForgot(!isForgot)}>
          <ForgotForm setIsForgot={setIsForgot} email={email} />
        </Modal>
      )}
    </Container>
  );
};

export default SigninPage;
