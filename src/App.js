// 1번 : router를 보내고 -->  2번 받는다 import한다

import "./App.css";
import { RouterProvider } from "react-router-dom";
import heejung from "./libs/routes/router"; //const router를 가져옴
import { ThemeProvider } from "styled-components";
import { theme } from "./libs/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={heejung} />;
    </ThemeProvider>
  );
}

export default App;
