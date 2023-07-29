import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import SignInForm from './SignInForm';

function SignIn() {
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
      <SignUpBtn type="button">로그인</SignUpBtn>
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
