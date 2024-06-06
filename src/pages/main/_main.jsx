// 3번
import { useNavigate } from "react-router-dom";

const mockProducts = [
  {
    id: 100,
    category: "frontend",
    age: 45,
  },
  {
    id: 500,
    category: "backend",
    age: 55,
  },
];

// router에서 element 설정한 컴포넌트 만든다.
function Main() {
  const handler = () => {};
  const navigation = useNavigate();

  return (
    <div onClick={handler}>
      {mockProducts.map((product) => {
        console.log("hello");

        return (
          <div
            key={product.id}
            onClick={() => {
              //주소창위에 나올이름

              console.log(`id ${product.id}`);
              navigation(`/todo/${product.id}?goods=${product.category}`); //주소창에 표시
            }}
          >
            {product.age}
          </div>
        );
      })}
    </div>
  );
}
export default Main;
