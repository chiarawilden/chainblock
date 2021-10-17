import "./index.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home.jsx";
import GettingStarted from "./pages/GettingStarted";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
		<Switch>
			<Route path="/" exact>
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<Home/>
				</div>
			</Route>
			<Route path="/getting-started" exact>
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<GettingStarted/>
				</div>
			</Route>
		</Switch>
    </Router>
  );
}

export default App;
