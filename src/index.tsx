import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./utils/theme";
import GlobalStyle from "./utils/Globalstyle";
import { BrowserRouter } from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter basename="/FortunaFi">
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
