import "./index.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="wrapper">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
