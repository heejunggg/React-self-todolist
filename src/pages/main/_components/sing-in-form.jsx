import styled from "styled-components";
import FormInput from "../../../components/FormInput";
import SelfBtn from "../../../components/SelfButton";
import { Form } from "./styled";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();

  // inputvalue입력,-ㅡemail, password input value입력하는 부분
  const handlePressSignIn = (event) => {
    event.preventDefault();

    // const email = event.target.value;
    // const password = event.target.value;

    //구조분해할당
    const { email, password } = event.target;
    // vaule는 어떻게?
    //1. 예외처리
    if (!email.value.trim() || !password.value.trim()) return;

    // ! 없을떄 : 이메일공간에 공백제거, 즉 공백없거나, 패스워드 공백없으면 리턴--> 끝내라.
    // 공백이 있으면 안되니. 앞에 !를쓴다.

    //2. 조건처리
    if (email.value === "test" && password.value === "test") {
      return navigate(`/todo/10`);
    }

    // 1,2번 모두 아니면 alert
    alert("희정아 제대로 입력하자!");
  };

  return (
    //속성은 컴포넌트의 매개변수로 전달된다.
    <S.Form onSubmit={handlePressSignIn}>
      <FormInput
        selfLabel={"이메일"}
        selfSize={30}
        placeholder={"email"}
        name="email"
      />
      <FormInput
        selfLabel={"비밀번호"}
        selfSize={30}
        placeholder={"pw"}
        name="password"
      />

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
