import { useParams, useSearchParams } from "react-router-dom";

export const Todo = () => {
  "/구분 query-string아니고  << url-parameter  이다.";
  const { todoId } = useParams();
  const [searchParams] = useSearchParams(); // 구조분해할당

  // 필터링 -> 색상을 거정색으로 선택 -> 화면이 바뀌어야함
  // 리액트에서 화면을 다시그리려면 state라는 값이 수정
  // serachParams, userParams 등을 사용하면 자체가 state이기 떄문에 편리

  console.log(todoId, searchParams.get("goods"));

  return <div>투두 페이지입니다.나는 _todo</div>;
};
// import { router } from "상대경로"
// 투두페이지입니다. 하면 이 페이지 찾아갈줄 알아야한다.!!!
