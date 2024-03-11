import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { RecoilRoot } from "recoil"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
