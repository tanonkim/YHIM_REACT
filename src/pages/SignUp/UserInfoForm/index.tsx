import styled from 'styled-components';
import { colors, font } from 'styles';

interface UserInfoFormProps {
  signUpInfo: SignUpInfoType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UserInfoForm({ signUpInfo, onChange }: UserInfoFormProps) {
  const { email, password, passwordCheck, name, birthDate } = signUpInfo;

  return (
    <>
      <Conatiner>
        <Label>이메일</Label>
        <InputForm
          type="text"
          placeholder="예) YourHomeIsMine@yhim.com"
          className="email"
          name="email"
          onChange={onChange}
        />
        <Button>O</Button>
      </Conatiner>
      <Conatiner>
        <Label>비밀번호</Label>
        <InputForm
          type="password"
          placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
          className="password"
          name="password"
          onChange={onChange}
        />
        <Button>O</Button>
      </Conatiner>
      <Conatiner>
        <Label>비밀번호 확인</Label>
        <InputForm
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          className="passwordCheck"
          name="passwordCheck"
          onChange={onChange}
        />
        <Button>O</Button>
      </Conatiner>
      <Conatiner>
        <Label>이름</Label>
        <InputForm
          type="text"
          placeholder="이름을 입력해주세요"
          className="name"
          name="name"
          onChange={onChange}
        />
      </Conatiner>
      <BirthConatiner>
        <Label>생년월일</Label>
        <BirthForm
          type="text"
          placeholder="예) 1993-11-02"
          name="birthDate"
          onChange={onChange}
        />
        <Button>O</Button>
      </BirthConatiner>
    </>
  );
}

const Conatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  align-items: center;
  padding: 10px 0px 10px;
  margin-left: 20px;
`;

const Label = styled.label`
  padding: 10px;
  ${font(15, 400)}
`;

const InputForm = styled.input`
  padding: 15px 25px 15px 10px;
  margin-left: 10px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 10px;

  ::placeholder {
    color: ${colors.GRAY};
  }

  :focus {
    outline-color: ${colors.PINK};
  }
`;

const Button = styled.button`
  width: 60%;
`;

const BirthConatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  align-items: center;
  padding: 10px 0px 10px;
  margin-left: 20px;
`;

const BirthForm = styled.input`
  padding: 15px 25px 15px 10px;
  margin-left: 10px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 10px;

  ::placeholder {
    color: ${colors.GRAY};
  }

  :focus {
    outline-color: ${colors.PINK};
  }
`;

export default UserInfoForm;
