// todolist와 onetodo를 제어하기보다는 편리하게 쓸수있게 틀을 마련.

import styled from "styled-components";
import SelfBtn from "../../components/SelfButton";
import { flexAlignCenter, flexCenter } from "../../libs/styles/common";
import Todolist from "./todolist";
import AddTodoModal from "./addtodomodal";

// 1.임의로 배열을 만든다
//2. 추가를 선택하면 모달창이나온다.--모달창에서 추가를 클릭하면
//3. todolist에 추가된다. -- ontetodo의 태그창안에 map을 돌린다.
//4. todolist안에 있는 목록들이 onetodo이다.

//todo라는 컴포넌트를 만들고, 그 안에 배열을 만든다.

const Todo = () => {
  let isOpenAddTodoModal = false;
  //isOpenAddTodoModal가 true여야 modal창이 나온다는데 이부분은 이해가 가지않는다.

  // 배열을 만든다.
  const todos = [
    {
      id: 1,
      title: "title-1",
      content: "타이틀 1입니다.",
      state: true,
    },
    {
      id: 2,
      title: "title-2",
      content: "타이틀 2입니다.",
      state: true,
    },
    {
      id: 3,
      title: "title-3",
      content: "타이틀 3입니다.",
      state: false,
    },
  ];
  return (
    <>
      {isOpenAddTodoModal && <AddTodoModal todos={todos} />}
      <S.Wrapper>
        <S.Container>
          <S.Title>TODOLIST</S.Title>
          {/* 얘도 컴포넌트화 사키고싶은데.. */}
          <Todolist todos={todos} />
        </S.Container>
        <SelfBtn>추가</SelfBtn>
      </S.Wrapper>
    </>
  );
};
export default Todo;

const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter}; // 공통으로 사용할수있는것을 변수화한것(모듈화), display:flex같은..
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: "#a17777";
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;
const Title = styled.h1`
  background-color: ${(props) => props.theme.colors.primary};
  /* color는 구조분해할당으로. 객체로도 올수있다. */
  color: ${({ theme }) => theme.colors.Gray[3]};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const S = {
  Wrapper,
  Container,
  Title,
};
