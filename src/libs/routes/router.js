//1번 작성

// router란 URL를 감지하여 router주소(url)에 맞게 컴포넌트를 전달한다.(path의 주소에 element에 있는 컴포넌트를 전달한다.)
// 페이지별로 컴포넌트를 분리하면서 페이지를 관리하기 위해 필요한 것이 라우팅 시스템.

// createBrowserRouter 생성하는것, / RouterProvider 감지하는것. 함수이름은 몰라도 됨

import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/main/main";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>안녕 희정아 Hello world!</div>,
    element: <Main />,
  },
]);
export default router;
