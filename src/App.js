import logo from "./logo.svg";
import "./App.css";
import MyForm from "./Component/Form/Login";
import Validation from "./Component/Form/Validation";
import Props from "./Component/propss/Props";
import Notification from "./Component/propss/Notification";
import Userdetails from "./Component/Userdetail/Userdetails";
import Board from "./Component/kanbanboard/Board";
function App() {
  return (
    <>
      <Board />
      {/* <Userdetails></Userdetails> */}
    </>
  );
}

export default App;

// <>
//   {/* <Notification></Notification> */}
//   <Props firstname="sameer" lastname="adk"></Props>
//   {/* <MyForm></MyForm>;<Validation></Validation>; */}
// </>
