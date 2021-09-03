import { Box, Card, makeStyles, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ProjectList from "./ProjectList";

//const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

const DUMMY_PROJECTS = [
	{
		title: "Graph Editor Application",
		description:
			"Written in React, this Front-End application allows the user to manipulate a graph (add/remove edges and nodes) and then write custom graph algorithms in python which are visualized in the graph. More information on usage can be found at the corresponding GitHub repository.",
		technologies: ["React", "Firebase"],
		githubUrl: "https://github.com/glynfinck/graph-editor",
		siteUrl: "https://graph-editor-7e4ef.firebaseapp.com/",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/portfolio-25793.appspot.com/o/graph-editor-portfolio.png?alt=media&token=f45bae99-a058-42aa-8dee-5ce8210b47d5",
	},
	{
		title: "This Portfolio Website",
		description:
			"This portfolio website is written in React and is full responsive to different device sizes.",
		technologies: ["React", "Firebase"],
		githubUrl: "https://github.com/glynfinck/portfolio",
		siteUrl: "www.google.com",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/portfolio-25793.appspot.com/o/portfolio-portfolio.png?alt=media&token=0fcf7f01-a4c3-4fcf-a728-4a7f038027c3",
	},
	{
		title: "Graph Editor Application",
		description:
			"Written in React, this Front-End application allows the user to manipulate a graph (add/remove edges and nodes) and then write custom graph algorithms in python which are visualized in the graph. More information on usage can be found at the corresponding GitHub repository.",
		technologies: ["React", "Firebase"],
		githubUrl: "https://github.com/glynfinck/graph-editor",
		siteUrl: "https://graph-editor-7e4ef.firebaseapp.com/",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/portfolio-25793.appspot.com/o/graph-editor-portfolio.png?alt=media&token=f45bae99-a058-42aa-8dee-5ce8210b47d5",
	},
];

const Projects = (props) => {
	return (
		<Box
			display="flex"
			flexWrap="wrap"
			flexDirection="column"
			alignItems="center"
			alignContent="center"
			textAlign="center"
			justifyContent="center"
			width="100%"
		>
			<Box width="100%" height="80px"></Box>
			<Box m={3} maxWidth="500px">
				<h1 style={{ margin: "1px", fontSize: "40px" }}>Projects</h1>
				<p style={{ color: "grey" }}>
					Mauris malesuada mi at porttitor vestibulum. Nam egestas nisl et
					vulputate hendrerit. Donec porttitor sapien a augue vehicula lacinia.
					Mauris eleifend neque vel urna gravida, vitae interdum erat imperdiet.
				</p>
			</Box>
			<Box display="flex">
				<ProjectList projects={DUMMY_PROJECTS} />
			</Box>
		</Box>
	);
};

export default Projects;
