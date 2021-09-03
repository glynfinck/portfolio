import ProjectsPage from "../../pages/ProjectsPage";
import {
	Box,
	makeStyles,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

// const useStyles = makeStyles({
// 	root: {
// 		width: 300,
// 	},
// });

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
		margin: "10px",
		display: "flex",
		flexDirection: "column",
		backgroundColor: "rgb(250,250,250)",
	},
	action: {},
	area: {
		marginBottom: "auto",
	},
	media: {
		height: 140,
		top: "0px",
	},
});

const ProjectItem = (props) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea className={classes.area}>
				<CardMedia
					className={classes.media}
					image={props.imageUrl}
					title={props.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.action}>
				<Button size="small" color="primary">
					<a
						href={props.siteUrl}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						Live Site
					</a>
				</Button>
				<Button size="small" color="primary">
					<a
						href={props.githubUrl}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						Github
					</a>
				</Button>
			</CardActions>
		</Card>
		// <Box p={1}>
		// 	<Skeleton variant="rect" width={projectWidth} height={projectHeight} />
		// 	<Box pt={0.5} width={projectWidth}>
		// 		<Skeleton />
		// 		<Skeleton width="60%" />
		// 	</Box>
		// </Box>
	);
};

export default ProjectItem;
