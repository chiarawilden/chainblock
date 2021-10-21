import "./index.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home.jsx";
import IntroToChainBlock from "./pages/intro-to-chainblock/IntroToChainBlock";
import WhatIsChainBlock from "./pages/intro-to-chainblock/WhatIsChainBlock";
import HowDoesItWork from "./pages/intro-to-chainblock/HowDoesItWork";
import WhyChooseChainBlock from "./pages/intro-to-chainblock/WhyChooseChainBlock";
import BasicFunctionality from "./pages/intro-to-chainblock/BasicFunctionality";
import GettingStarted from "./pages/getting-started/GettingStarted";
import CoreConcepts from "./pages/getting-started/CoreConcepts";
import ApiSpecification from "./pages/getting-started/ApiSpecification";
import Guides from "./pages/getting-started/Guides";
import Cheatsheet from "./pages/getting-started/Cheatsheet";
import Contracts from "./pages/getting-started/Contracts";
import Reference from "./pages/reference/Reference";
import Resources from "./pages/reference/Resources";
import SecurityConsiderations from "./pages/reference/SecurityConsiderations";
import StyleGuide from "./pages/reference/StyleGuide";
import KnownBugs from "./pages/reference/KnownBugs";
import ChainBlockFaq from "./pages/reference/ChainBlockFaq";
import Community from "./pages/community/Community";
import HowToContribute from "./pages/community/HowToContribute";
import OnlineDiscussionsForums from "./pages/community/OnlineDiscussionForums";
import ChainBlockWorkshops from "./pages/community/ChainBlockWorkshops";
import ContributionTutorial from "./pages/community/ContributionTutorial";
import SocialMedia from "./pages/community/SocialMedia";

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
			<Route path="/how-does-it-work">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<HowDoesItWork/>
				</div>
			</Route>
			<Route path="/why-choose-chainblock">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<WhyChooseChainBlock/>
				</div>
			</Route>
			<Route path="/basic-functionality">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<BasicFunctionality/>
				</div>
			</Route>
			<Route path="/getting-started">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<GettingStarted/>
				</div>
			</Route>
			<Route path="/core-concepts">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<CoreConcepts/>
				</div>
			</Route>
			<Route path="/api-specification">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<ApiSpecification/>
				</div>
			</Route>
			<Route path="/guides">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<Guides/>
				</div>
			</Route>
			<Route path="/cheatsheet">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<Cheatsheet/>
				</div>
			</Route>
			<Route path="/contracts">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<Contracts/>
				</div>
			</Route>
			<Route path="/reference">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<Reference/>
				</div>
			</Route>
			<Route path="/resources">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<Resources/>
				</div>
			</Route>
			<Route path="/security-considerations">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<SecurityConsiderations/>
				</div>
			</Route>
			<Route path="/style-guide">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<StyleGuide/>
				</div>
			</Route>
			<Route path="/known-bugs">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<KnownBugs/>
				</div>
			</Route>
			<Route path="/chainblock-faq">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<ChainBlockFaq/>
				</div>
			</Route>
			<Route path="/community">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<Community/>
				</div>
			</Route>
			<Route path="/how-to-contribute">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<HowToContribute/>
				</div>
			</Route>
			<Route path="/online-discussion-forums">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<OnlineDiscussionsForums/>
				</div>
			</Route>
			<Route path="/chainblock-workshops">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<ChainBlockWorkshops/>
				</div>
			</Route>
			<Route path="/contribution-tutorial">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<ContributionTutorial/>
				</div>
			</Route>
			<Route path="/social-media">
				<Topbar/>
				<div className="main">
					<Sidebar/>
					<SocialMedia/>
				</div>
			</Route>
		</Switch>
    </Router>
  )
}

export default App;
