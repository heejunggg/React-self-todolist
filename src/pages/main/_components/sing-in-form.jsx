import styled from "styled-components";

const SignInForm = () => {
  return (
    <S.InputBox>
      <S.Input>
        <S.InputLabel>이메일</S.InputLabel>
      </S.Input>
      <S.Input>
        <S.InputLabel>비밀번호</S.InputLabel>
      </S.Input>
    </S.InputBox>
  );
};

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #999;
  width: 100%;
  border-radius: 4px;
  padding-left: 16px;
  height: 48px;
  &::placeholder {
    text-align: center;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  left: 16px;
  top: -6px;
  font-size: 12px;
  background-color: #fff;
  z-index: 100;
  padding: 0 4px;
`;

const S = {
  Form,
  InputBox,
  InputLabel,
  Input,
};
export default SignInForm;
