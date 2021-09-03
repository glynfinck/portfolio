import ProjectsPage from "../../pages/ProjectsPage";
import { Box, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
	root: {
		width: 300,
	},
});

const BlankProjectItem = () => {
	const classes = useStyles();

	const projectWidth = 250;
	const projectHeight = 150;
	return (
		<Box p={1}>
			<Skeleton
				bg="transparent"
				variant="rect"
				width={projectWidth}
				height={projectHeight}
			/>
			<Box pt={0.5} width={projectWidth}>
				<Skeleton />
				<Skeleton width="60%" />
			</Box>
		</Box>
	);
};

export default BlankProjectItem;
