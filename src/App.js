// 1번 : router를 보내고 -->  2번 받는다 import한다

import "./App.css";
import { RouterProvider } from "react-router-dom";
import heejung from "./libs/routes/router"; //const router를 가져옴

function App() {
  return <RouterProvider router={heejung} />;
}

export default App;
