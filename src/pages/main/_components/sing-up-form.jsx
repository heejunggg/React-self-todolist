import React from "react";
import FormInput from "../../../components/FormInput";
import SelfBtn from "../../../components/SelfButton";
import { Form } from "./styled";

// 중복되는 ui는 배열로 순회하며 제거할수있다-- 제거를 왜 하는거야
// const SIGNFORM_ARRAY = [
//   {
//     label: "이메일",
//     size: 3,
//     name: "email",
//     option: {
//       placeholder: "이메일을 입력해주세요",
//     },
//   },
//   {
//     label: "비밀번호",
//     size: 3,
//     name: "pass",
//   },
//   {
//     label: "비밀번호확인",
//     size: 3,
//     name: "passconfirm",
//   },
// ];

const SignUpForm = () => {
  // 회원가입 할때 입력했던 이메일 명을 통해 000@naver.com님 환영합니다.alert창으로 나오게 하자.
  // input - value를 가지고 오는 방법
  // Dom에서  $input.value

  // 임의의 배열을 만든다.

  return (
    // 로그인폼에서 로그인 클릭시 todo페이지로 간다.
    // <FormInput/>
    // <FormInput/>

    <S.Form>
      {/* 하나씩 돌리면서 왜돌려? */}
      <FormInput selfLabel={"이메일"} />
      <FormInput selfLabel={"비밀번호 "} />
      <FormInput selfLabel={"비밀번호 확인"} />
      <SelfBtn variant={" secondary"} size={"full"}>
        {"회원가입"}
      </SelfBtn>
    </S.Form>
  );
};
export default SignUpForm;

// const Form = styled.form`
//   background-color: "#fff";
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 32px;
//   width: 100%;
// `;

const S = {
  Form,
};
