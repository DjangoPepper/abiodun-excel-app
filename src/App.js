import React from "react"
import ReactDOM from "react-dom"
//-fred import "antd/dist/antd.css"
//+fred
import "antd/dist/antd.min.css"
import ExcelPage from "./components/excelPage"

function App() {
  return (
    <>
      <ExcelPage />
    </>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
export default App;
