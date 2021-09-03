import { Fragment } from "react";
import { Box, Button, withStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import Skeleton from "@material-ui/lab/Skeleton";

const HelloCard = (props) => {
	const ColorButton = withStyles((theme) => ({
		root: {
			color: theme.palette.getContrastText(deepPurple[500]),
			backgroundColor: deepPurple[500],
			"&:hover": {
				backgroundColor: deepPurple[700],
			},
		},
	}))(Button);

	const centerTextThreshold = 815;

	console.log(window.location.origin);

	return (
		<Fragment>
			<Box p={2} minWidth="280px">
				<img
					style={{ maxWidth: "280px" }}
					src={window.location.origin + "/placeholder-profile.jpeg"}
					alt="https://firebasestorage.googleapis.com/v0/b/portfolio-25793.appspot.com/o/placeholder-profile.jpeg?alt=media&token=f781cbd7-b182-4293-b8b1-36c2c4c91f09"
				/>
			</Box>
			<Box
				flex="1 1 auto"
				m={2}
				alignContent="center"
				alignItems="center"
				display="flex"
				flexDirection="column"
				maxWidth="450px"
			>
				<Box my="auto"></Box>
				<Box
					m={3}
					textAlign={
						props.windowWidth < centerTextThreshold ? "center" : "left"
					}
				>
					<div>
						<h1 style={{ margin: "1px", fontSize: "40px" }}>
							Hi, I'm <span style={{ color: deepPurple[500] }}>Glyn</span> and
							I'm an aspiring Software Engineer
						</h1>
					</div>

					<p style={{ color: "grey" }}>
						Quisque aliquam ultricies lacinia. Aenean ultrices, purus ac ornare
						bibendum, metus ante egestas felis, ut maximus ex nunc eu nunc.
						Nulla pellentesque hendrerit massa, ac congue urna. Aenean faucibus
						et magna non congue.
					</p>
				</Box>
				<Box>
					<ColorButton variant="contained">Contact Me</ColorButton>
				</Box>
				<Box my="auto"></Box>
			</Box>
		</Fragment>
	);
};

export default HelloCard;
