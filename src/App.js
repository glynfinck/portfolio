import "./App.css";
import Button from "@material-ui/core/Button";
import Layout from "./components/Layout/Layout";
import { Box } from "@material-ui/core";
import HelloCard from "./components/Hello/HelloCard";
import Projects from "./components/Projects/Projects";
import { useEffect } from "react";
import { withResizeDetector } from "react-resize-detector";
import { Route, Redirect, Switch } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App(props) {
	return (
		<Layout width={props.width}>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/projects"></Redirect>
				</Route>
				<Route path="/projects" exact>
					<ProjectsPage width={props.width} />
				</Route>
				<Route path="/resume" exact>
					<ResumePage />
				</Route>
				<Route path="/contact" exact>
					<ContactPage />
				</Route>
				<Route path="*">
					<Redirect to="/projects"></Redirect>
				</Route>
			</Switch>
			<Box id="footer" height="100px" width="100%"></Box>
		</Layout>
	);
}

export default withResizeDetector(App);
