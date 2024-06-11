// 컴포넌트 OneTodo 에는 무엇이 있어야 하는가.
// 상위 todolist안에 OneTodo가 있다.
// Todllist안에는 Todo가 있다. 그안에는 todos라는 배열이 있다. 이 배열하나가 OneTodo컴포넌트이다.

import styled from "styled-components";

// 태그의 모양을 생각하자.
const OneTodo = ({ todo }) => {
  return (
    <S.Wrapper state={todo.state}>
      <S.Header>
        {/* 완료/미완료 => state가 true이면 완료 아니면 미완료*/}
        {/* 수정삭제 버튼이 있다. */}

        <div>
          {todo.state ? "완료" : "미완료"}
          {todo.title}
        </div>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </S.Header>
      <S.Content>
        <div state={todo.state}>{todo.content}</div>
      </S.Content>
    </S.Wrapper>
  );
};
export default OneTodo;

const Wrapper = styled.div`
  /* border: 1px solid #999; */
  margin: 16px 0;
  border-radius: 3px;
  background-color: ${({ state, theme }) =>
    state ? theme.colors.Gray[2] : theme.colors.Gray[1]};
`;

const Header = styled.div`
  /* color: ${({ theme }) => theme.fontSize.large}; */
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const Content = styled.div`
  padding: 16px;
  color: blueviolet;
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
`;

const S = {
  Wrapper,
  Header,
  Content,
};
