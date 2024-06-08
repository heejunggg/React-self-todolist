import styled from "styled-components";
import SignInForm from "./_components/sing-in-form";
import SignUpForm from "./_components/sing-up-form";

// router 입력했음 이번에는 Main컴포넌트를 만든다.
// 내가 무슨 화면을 보여주고 싶은지 코딩한다.

/*sign-in /  sign-up의 header를 만들어서 
내가 클릭시 내가 어떤걸클릭하는지 몰라. 변수지정 sign-in을 클릭하면 그에 해당하는 글을 보여주고,
sign-up클릭하면 그에 해당하는 글을 보여준다.
*/

// main컴포넌트를 만든다. --> 그 안에 무엇을 입력?
const Main = () => {
  // 클릭한 것 변수지정
  let handClick = "SIGN-UP"; // 임의로 sign-in, hancClick이 sign-in이었다가 sign-up 이면 되잖아.

  const ARRAY_LIST = [
    {
      name: "SIGN-IN",
      //isSelected: handClick === "SIGN-IN",
    },
    {
      name: "SIGN-UP",
      // isSelected: handClick === "SIGN-UP",
    },
  ];

  // 클릭한것을 어떻게 표현?

  //--> 함수를 만들어서 내가 누르는것을 매개변수로 받아서 handClick에 넣는다.(sign-in 이었따가 sign-up이었다가.)
  const handPress = (tabName) => {
    handClick = tabName;
    console.log(handClick);
  };
  console.log(handPress);

  return (
    <S.Wrapper>
      <S.Container className={handClick === "SIGN-IN" ? "" : ""}>
        <S.Header>
          {ARRAY_LIST.map((tab) => (
            <S.Tab
              $isSelected={handClick === tab.name}
              onClick={() => handPress(tab.name)}
            >
              {/* //내가 선택한것이 sign-in과 같다면  sign-in컴포넌트를 실행하고 아니면 sign-up실행하고 컴포넌트를 실행한다.  */}
              {/* map으로 순회- 왜? - 매개변수 tabName에 따라서 handClick가 SIGN-IN이면 SignInForm을 보여주고 SIGN-UP이면 SignUpForm을 보여줘라  */}
              {/* $변수를 넣어서  handClick === tab.name으로 넣어주고 속성을 넣어서 styled한다. */}
              {tab.name}
            </S.Tab>
          ))}
        </S.Header>
        {/* 1.signin을 선택하면 sigininform나오게 작성
          -- signinform을 작성해야겠지. */}
        {/* handClick === "SIGN-IN" 이면 SignInForm을 보여주고 아니면 SignUpForm을 보여줘라 */}
        {/* {handClick === "SIGN-IN" ? <SignInForm /> : <SignUpForm />} */}

        {handClick === "SIGN-IN" ? (
          <SignInForm />
        ) : (
          <SignUpForm handClick={handClick} />
        )}
      </S.Container>
    </S.Wrapper>
  );
};
export default Main;

const Wrapper = styled.div`
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid greenyellow;
`;

const Container = styled.div`
  width: 400px;
  border: 3px solid #f6d7d7;
  border-radius: 8px;
`;
const Header = styled.header`
  background-color: #ac1212;
  display: flex;
`;
const Tab = styled.div`
  width: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ebf3db;

  ${(props) =>
    props.$isSelected && "background-color : #890eb6"} // 왜 안변하지?

  &:hover {
    background-color: red;
  }
`;

const S = {
  Wrapper,
  Container,
  Header,
  Tab,
};
