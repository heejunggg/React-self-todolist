// 로그인 버튼의 글이 바뀔수있다

import styled, { css } from "styled-components";

// 사이즈,스타일
const SelfBtn = ({ variant, size, shape, children, ...rest }) => {
  return (
    //사이즈나 스타일을 어떻게 변수화 해야하나.
    // 버튼의 사이즈에 따라서 달라진다. 10일때는 css를 이렇게..20일때는 css 이렇게..
    // 태그 속성(키와값)
    <S.Button btn_variant={variant} btn_size={size} btn_shape={shape} {...rest}>
      {/* 안에 들어가는 글자가 로그인이거나 다른거 일 수 있다. */}
      {children}
    </S.Button>

    // 썜코드
    //<S.Button
    // {...{size, shape, variant}}
    // {...rest}
    // >
    // {children}
    // </S.Button>
  );
};
export default SelfBtn;

// 매개변수에 대한 css
const VariantCSS = {
  primary: css`
    background-color: #0a540a;
    color: #fff;
  `,
  secondary: css`
    background-color: #5ddcf0;
    color: #fff;
  `,
  "primary-text": css`
    color: #0a540a;
    background-color: transparent;
    outline: none;
  `,
};

// size에 따라 css가 변경 -> sizeCSS
const SizeCSS = {
  small: css`
    padding: 16px;
  `,
  medium: css`
    padding: 16px 32px;
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1; //가로 8 세로 1
  `,
};

// shape에 따라 css가 변경 -> shapeCSS
const ShapeCSS = {
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};
//Button이라는 태그를 만든다.
//<S.Button btn_variant={variant} btn_size={size} btn_shape={shape}>
const Button = styled.button`
  ${(props) => VariantCSS[props.btn_variant]}
  ${(props) => SizeCSS[props.btn_size]} 
    /* ${({ size }) => SizeCSS[size]} */
    ${(props) => ShapeCSS[props.btn_shape]}
`;

const S = {
  Button,
};
