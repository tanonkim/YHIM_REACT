import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import UserInfoForm from './UserInfoForm';
import { useEffect, useState } from 'react';
import convertDate from 'utils/convertDate';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    birthDate: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'birthDate') return handleBirthDate(value);

    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const handleBirthDate = (value: string) => {
    // early return 패턴, 아래 setSignUpInfo가 실행되지 않도록 막습니다.
    if (value.length > 10) return;

    // delete 키 입력을 고려해서 글자수가 더 줄어들 경우 value 그대로 저장
    if (value.length < signUpInfo.birthDate.length) {
      setSignUpInfo({ ...signUpInfo, birthDate: value });
      return;
    }

    // handleBirth는 하이픈을 붙이는 기능
    const converted = convertDate(value);
    setSignUpInfo({ ...signUpInfo, birthDate: converted });
  };

  const signup = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_ADDRESS}/users/signup`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: signUpInfo.email,
          password: signUpInfo.password,
          nickname: signUpInfo.name,
          birthdate: signUpInfo.birthDate,
        }),
      },
    );

    const { message } = await res.json();

    if (message === 'User Created!') {
      alert('회원가입을 축하드립니다.');
      navigate('/');
    } else if (message === 'Invalid Email!') {
      alert('이메일 조건에 밎지 않습니다!');
    } else if (message === 'Invalid Password!') {
      alert('비밀번호 조건에 맞지 않습니다!');
    } else if (message === 'Email Already Exists!') {
      alert('중복된 이메일입니다!');
    } else if (message === 'KEY_ERROR') {
      alert('정보를 모두 입력해주세요!');
    }
  };

  return (
    <Conatiner>
      <Header>회원가입 및 소셜로그인</Header>
      <Title>YHIM에 오신 것을 환영합니다.</Title>
      <fieldset>
        <UserInfoForm signUpInfo={signUpInfo} onChange={handleChange} />
      </fieldset>
      <SignUpBtn onClick={signup}>회원가입</SignUpBtn>
    </Conatiner>
  );
}

const Conatiner = styled.main`
  ${flex('', 'center', 'column')}
  border:1px solid ${colors.MEDIUMGRAY};
  border-radius: 20px;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
  ${font(15, 600)}
  text-align: center;
`;

const Title = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 10px;
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

export default SignUp;
