import styled from "styled-components";
import FormInput from "../../../components/FormInput";
import SelfBtn from "../../../components/SelfButton";
import { Form } from "./styled";

const SignInForm = () => {
  return (
    //속성은 컴포넌트의 매개변수로 전달된다.
    <S.Form>
      <FormInput selfLabel={"이메일"} selfSize={30} placeholder={"email"} />
      <FormInput selfLabel={"비밀번호"} selfSize={30} placeholder={"pw"} />

      <SelfBtn variant={"secondary"} size={"full"}>
        로그인
      </SelfBtn>
    </S.Form>

    /*
    forminput으로 컴포넌트 시킨다.
    <S.InputBox>
        <S.InputLabel>이메일</S.InputLabel>
        <S.Input placeholder="email"/>
    </S.InputBox>

    <S.InputBox>
    <S.InputLabel>비밀번호</S.InputLabel>
    <S.Input placeholder="pass"/>
    </S.InputBox>
    
    */
  );
};
export default SignInForm;

// const Form = styled.form`
//   background-color: "#fff";
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 32px;
//   width: 100%;
// `;

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
