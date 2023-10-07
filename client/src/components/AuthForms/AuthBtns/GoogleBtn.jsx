import { FcGoogle } from 'react-icons/fc';
import { MdArrowForwardIos } from 'react-icons/md';

import { baseURL } from 'servises/baseURL';
import Container from 'components/common/Container/Container';
import { IconLink } from './AuthBtns.styled';

export const GoogleBtn = () => (
  <IconLink href={`${baseURL}/auth/google`}>
    <Container p="0" d="flex" ai="center" jc="space-between">
      <FcGoogle size="20px" />
      Sign in with Google
      <MdArrowForwardIos size="16px" />
    </Container>
  </IconLink>
);
