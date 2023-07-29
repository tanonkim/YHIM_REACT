import styled from 'styled-components';
import { colors, font } from 'styles';

function SignInForm(props: {
  label: string;
  type: string;
  placeholder: string;
  className: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { label, type, placeholder, className, name, onChange } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <InputForm
        type={type}
        placeholder={placeholder}
        className={className}
        name={name}
        onChange={onChange}
      />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  align-items: center;
  padding: 10px 0px 10px;
  margin-left: 20px;
`;

const Label = styled.label`
  padding: 10px;
  ${font(15, 400)};
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

export default SignInForm;
