import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
//-fredimport "antd/dist/antd.css";
//+fred
import "antd/dist/antd.min.css"
import ExcelPage from "./components/excelPage";

function App() {
  return (
    <>
      <ExcelPage />
    </>
  );
}

const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);