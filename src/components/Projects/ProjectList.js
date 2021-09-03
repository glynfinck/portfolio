import ProjectItem from "./ProjectItem";
import { Box, Grid } from "@material-ui/core";

const dist2NextMultN = (N, num) => {
	let count = 0;
	while (num % N !== 0) {
		count++;
	}
	return count;
};

const ProjectList = (props) => {
	return (
		<Grid container wrap="wrap" justifyContent="center">
			{props.projects.map((item, index) => (
				<ProjectItem
					key={index}
					title={item.title}
					description={item.description}
					technologies={item.technologies}
					githubUrl={item.githubUrl}
					siteUrl={item.siteUrl}
					imageUrl={item.imageUrl}
				/>
			))}
			{}
		</Grid>
	);
};

export default ProjectList;
