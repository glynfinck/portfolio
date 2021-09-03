import Projects from "../components/Projects/Projects";
import { Fragment } from "react";
import { Box } from "@material-ui/core";
import HelloCard from "../components/Hello/HelloCard";

const ProjectsPage = (props) => {
	return (
		<Fragment>
			<Box height="40px" width="100%" flex="0 0 40px"></Box>
			<Box width="100%" display="flex" flexWrap="wrap" justifyContent="center">
				<HelloCard windowWidth={props.width} />
			</Box>
			<Box>
				<Projects windowWidth={props.width} />
			</Box>
		</Fragment>
	);
};

export default ProjectsPage;
