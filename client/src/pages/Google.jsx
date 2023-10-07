import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom/dist';

import { authenticate } from 'store/auth/authSlice';
import { refreshThunk } from 'store/auth/authOperations';

const Google = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  const result = { user: { accessToken, refreshToken } };

  dispatch(authenticate({ result }));
  dispatch(refreshThunk());
};

export default Google;
