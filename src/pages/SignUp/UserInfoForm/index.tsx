import styled from 'styled-components';
import { colors, font } from 'styles';
import { emailRegex, passwordRegex } from 'utils/regex';
import TextInput from './TextInput';

interface UserInfoFormProps {
  signUpInfo: SignUpInfoType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UserInfoForm({ signUpInfo, onChange }: UserInfoFormProps) {
  const { email, password, passwordCheck, name, birthDate } = signUpInfo;

  return (
    <>
      <TextInput
        label="이메일"
        type="text"
        placeholder="예) YourHomeIsMine@yhim.com"
        className="email"
        name="email"
        onChange={onChange}
      >
        <Button
          className={emailRegex.test(email) ? 'buttonOn' : 'button'}
          disabled
        >
          O
        </Button>
      </TextInput>
      <TextInput
        label="비밀번호"
        type="password"
        placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
        className="password"
        name="password"
        onChange={onChange}
      />
      <TextInput
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        className="passwordCheck"
        name="passwordCheck"
        onChange={onChange}
      >
        <Button
          className={emailRegex.test(email) ? 'buttonOn' : 'button'}
          disabled
        >
          O
        </Button>
      </TextInput>
      <TextInput
        label="이름"
        type="text"
        placeholder="이름을 입력해주세요"
        className="name"
        name="name"
        onChange={onChange}
      />

      <TextInput
        label="생년월일"
        type="text"
        placeholder="예) 1993-11-02"
        className="birthDate"
        name="birthDate"
        onChange={onChange}
        value={birthDate}
      />
    </>
  );
}

const Button = styled.button`
  width: 60%;
  margin: 0px 10px 0px 20px;
  padding: 15px 15px;
  border-radius: 10px;
  cursor: default;

  &.buttonOn {
    background-color: ${colors.PINK};
    color: ${colors.MEDIUMGRAY};
  }
  &.button {
    background-color: ${colors.LIGHTGRAY};
  }
`;

export default UserInfoForm;
