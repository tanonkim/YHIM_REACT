import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import SignInForm from './SignInForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [signInData, setSignInData] = useState<SignInInfoType>({
    email: '',
    password: '',
  });

  const signIn = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_ADDRESS}/users/signin`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: signInData.email,
          password: signInData.password,
        }),
      },
    );

    const { message, access_token } = await res.json();

    if (message === 'INVALID_USER')
      return alert('이메일 또는 비밀번호가 잘못 입력되었습니다.');
    if (message === 'KEY_ERROR')
      return alert('이메일 또는 비밀번호를 모두 입력해주세요.');
    if (message === 'SUCCESS' && !access_token) {
      alert('일시적인 token 오류입니다. 관리자에게 문의하세요');
      return navigate('/');
    }
    if (message === 'SUCCESS' && access_token) {
      alert('로그인에 성공했습니다. YHIM에 오신걸 환영합니다.');
      navigate('/');
    }
  };

  return (
    <Container>
      <Title>YHIM에 오신 것을 환영합니다.</Title>
      <TextList>
        <SignInForm
          label="이메일"
          type="text"
          placeholder="예) YourHomeIsMine@yhim.com"
          className="email"
          name="email"
          // onChange={handleChange}
        />
        <SignInForm
          label="비밀번호"
          type="password"
          placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
          className="password"
          name="password"
          // onChange={handleChange}
        />
      </TextList>
      <hr />
      <SignUpBtn type="button" onClick={signIn}>
        로그인
      </SignUpBtn>
    </Container>
  );
}

const Container = styled.main`
  ${flex('', 'center', 'column')}
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 20px;
`;

const Title = styled.div`
  width: 100%;
  padding: 20px 300px 20px 20px;
  margin-top: 10px;
  ${font(20, 500)};
`;

const TextList = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  width: 100%;
  padding: 10px 0px 10px;
  margin-left: 20px;
`;

const SignUpBtn = styled.button`
  width: 60%;
  margin: 0px 10px 20px 20px;
  padding: 20px 15px;
  border-radius: 10px;
  background-color: ${colors.PINK};
  color: ${colors.WHITE};
  ${font(18, 400)}
`;

export default SignIn;
