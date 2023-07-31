import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import { setAccessToken } from 'utils/jwt';

declare global {
  interface Window {
    Kakao: any;
  }
}

function KakaoSignIn() {
  const navigate = useNavigate();

  const goToMain = () => {
    window.alert('YHIM에 오신걸 환영합니다.');
    navigate('/');
  };

  const handleLogin = () => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, account_email, gender, birthday',
      success: async function (authObj: any) {
        window.Kakao.API.request({
          url: '/v2/user/me',
        });
        const res = await fetch(
          `${process.env.REACT_APP_API_ADDRESS}/users/login/kakao`,
          {
            method: 'GET',
            headers: {
              Authorization: authObj.access_token,
            },
          },
        );

        const { token: access_token } = await res.json();
        setAccessToken(access_token);
      },
    });
  };

  return (
    <KakaoButton onClick={handleLogin}>
      <KakaoLogo alt="kakaoLogo" src="../images/kakao.svg"></KakaoLogo>
      <span>카카오 로그인 </span>
    </KakaoButton>
  );
}

const KakaoButton = styled.a`
  ${flex('center', 'center')}
  width: 60%;
  margin: 0px 10px 20px 20px;
  padding: 12px 15px;
  border-radius: 10px;
  background-color: #fee500;
  color: ${colors.BLACK};
  ${font(18, 400)}
`;

const KakaoLogo = styled.img`
  width: 20px;
  margin-right: 20px;
`;

export default KakaoSignIn;
