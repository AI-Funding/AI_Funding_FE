import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../modules/login';

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const code = new URLSearchParams(window.location.search).get('code');
      const loginType = new URLSearchParams(window.location.search).get('loginType');
      if (code === null) {
        throw Error('query parameter:code is not exist.');
      }
      axios
        .get(`${process.env.REACT_APP_API}/api/auth/sign-in`, {
          params: {
            loginType,
            code,
          },
        })
        .then((res) => {
          const {
            data: { accessToken, UID, isExistUser },
          } = res;
          if (isExistUser === true) {
            dispatch(signIn(accessToken, UID));
            navigate('/', { replace: true });
          } else if (isExistUser === false) {
            navigate('/sign-up', { replace: true, state: { UID, loginType, accessToken } });
          }
        })
        .catch((error) => {
          console.log(error);
          navigate('/', { replace: true });
        });
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, navigate]);

  return <div style={{ margin: '50%', color: 'white' }}>{'로그인 중입니다...'}</div>;
}
