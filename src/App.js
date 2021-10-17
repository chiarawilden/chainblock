import "./index.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="wrapper">
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
