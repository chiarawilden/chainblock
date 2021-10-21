import "./index.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home.jsx";
import IntroToChainBlock from "./pages/intro-to-chainblock/IntroToChainBlock";
import Community from "./pages/community/Community";
import GettingStarted from "./pages/getting-started/GettingStarted";
import Reference from "./pages/reference/Reference";
import WhatIsChainBlock from "./pages/intro-to-chainblock/WhatIsChainBlock";
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
			<Route path="/intro-to-chainblock">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<IntroToChainBlock/>
				</div>
			</Route>
			<Route path="/what-is-chainblock">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<WhatIsChainBlock/>
				</div>
			</Route>
			<Route path="/getting-started">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<GettingStarted/>
				</div>
			</Route>
			<Route path="/reference">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<Reference/>
				</div>
			</Route>
			<Route path="/community">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<Community/>
				</div>
			</Route>
		</Switch>
    </Router>
  );
}

export default App;
