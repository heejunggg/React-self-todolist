import React from "react";
import styled, { css } from "styled-components";

// props는 함수,컴포넌트의 매개변수로 전달된다.
const FormInput = ({ selfLabel, selfSize, ...props }) => {
  return (
    // 이메일,비밀번호
    <S.InputBox>
      <S.InputLabel>{selfLabel}</S.InputLabel>
      <S.Input size={selfSize} {...props} />
    </S.InputBox>
    // button
  );
};
export default FormInput;

// input size를 css로 만들고 input에 넣기
const InputSize = {
  10: css`
    width: 100px;
    height: 30px;
    background-color: #572dc2;
  `,
  20: css`
    width: 300px;
    height: 48px;
    background-color: gray;
  `,
  30: css`
    width: 100%;
    height: 48px;
    background-color: #d2f9fa;
  `,
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

  //
  ${(props) => InputSize[props.size]}
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
  InputBox,
  InputLabel,
  Input,
};
