import {
	Box,
	Avatar,
	makeStyles,
	Accordion,
	AccordionSummary,
	FormControlLabel,
	AccordionDetails,
	Typography,
	Checkbox,
} from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useResizeDetector } from "react-resize-detector";
import { useEffect, Fragment } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1),
		},
	},
	accordion: {},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	purpleText: {
		color: deepPurple[500],
		cursor: "pointer",
	},
	purpleNavLink: {
		color: deepPurple[500],
		cursor: "pointer",
		textDecoration: "none",
	},
	purpleNavLinkActive: {
		color: deepPurple[500],
		cursor: "pointer",
		textDecoration: "underline",
	},
}));

const mobileWidthThreshold = 450;

const MainHeader = (props) => {
	const classes = useStyles();

	const isMobile = props.width < mobileWidthThreshold;

	return (
		<Fragment>
			{!isMobile && (
				<Box
					display="flex"
					alignContent="center"
					alignItems="center"
					textAlign="center"
					justifyContent="space-between"
					height="100%"
				>
					<Box flex="1 1 auto" p={2}>
						<Link to="/projects">
							<Avatar className={classes.purple}>gf</Avatar>
						</Link>
					</Box>
					<Box
						flex="1 1 auto"
						p={1}
						alignItems="center"
						alignContent="center"
						display="flex"
					>
						{!isMobile && (
							<Fragment>
								<Box flex="1 1 auto" p={1}>
									<NavLink
										to="/projects"
										activeClassName={classes.purpleNavLinkActive}
										className={classes.purpleNavLink}
									>
										Projects
									</NavLink>
								</Box>
								<Box flex="1 1 auto" p={1}>
									<NavLink
										to="/resume"
										activeClassName={classes.purpleNavLinkActive}
										className={classes.purpleNavLink}
									>
										Resume
									</NavLink>
								</Box>
								<Box flex="1 1 auto" p={1}>
									<NavLink
										to="/contact"
										activeClassName={classes.purpleNavLinkActive}
										className={classes.purpleNavLink}
									>
										Contact
									</NavLink>
								</Box>
							</Fragment>
						)}
					</Box>
					<Box flex="1 1 auto" p={2} display="flex" alignItems="center">
						<Box ml="auto" p={1}>
							{!isMobile ? (
								<a href="https://www.linkedin.com/in/glynfinck/">
									<LinkedInIcon className={classes.purpleText} />
								</a>
							) : (
								<MenuIcon className={classes.purpleText} />
							)}
						</Box>
						{!isMobile && (
							<Box>
								<a href="https://github.com/glynfinck">
									<GitHubIcon className={classes.purpleText} />
								</a>
							</Box>
						)}
					</Box>
				</Box>
			)}
			{isMobile && (
				<Accordion className={classes.accordion}>
					<AccordionSummary
						expandIcon={<MenuIcon className={classes.purpleText} />}
						aria-label="Expand"
						aria-controls="additional-actions1-content"
						id="additional-actions1-header"
					>
						<Box flex="1 1 auto">
							<Link to="/projects">
								<Avatar className={classes.purple}>gf</Avatar>
							</Link>
						</Box>
					</AccordionSummary>
					<AccordionDetails>
						<Box
							flex="1 1 auto"
							p={1}
							alignItems="center"
							alignContent="center"
							display="flex"
							flexDirection="column"
						>
							<Box flex="1 1 auto" p={1}>
								<NavLink
									to="/projects"
									activeClassName={classes.purpleNavLinkActive}
									className={classes.purpleNavLink}
								>
									Projects
								</NavLink>
							</Box>
							<Box flex="1 1 auto" p={1}>
								<NavLink
									to="/resume"
									activeClassName={classes.purpleNavLinkActive}
									className={classes.purpleNavLink}
								>
									Resume
								</NavLink>
							</Box>
							<Box flex="1 1 auto" p={1}>
								<NavLink
									to="/contact"
									activeClassName={classes.purpleNavLinkActive}
									className={classes.purpleNavLink}
								>
									Contact
								</NavLink>
							</Box>
							<Box p={1}>
								<a href="https://www.linkedin.com/in/glynfinck/">
									<LinkedInIcon className={classes.purpleText} />
								</a>
							</Box>
							<Box>
								<a href="https://github.com/glynfinck">
									<GitHubIcon className={classes.purpleText} />
								</a>
							</Box>
						</Box>
					</AccordionDetails>
				</Accordion>
			)}
		</Fragment>
	);
};

export default MainHeader;
