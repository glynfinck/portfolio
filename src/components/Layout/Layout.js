import { Box } from "@material-ui/core";
import MainHeader from "./MainHeader";

const Layout = (props) => {
	return (
		<Box display="flex" flexDirection="column">
			<MainHeader width={props.width} />
			<Box
				flexGrow="1"
				flexShrink="1"
				flexBasis="auto"
				alignContent="center"
				alignItems="center"
				height="100%"
				flexDirection="column"
				display="flex"
			>
				{props.children}
			</Box>
		</Box>
	);
};

export default Layout;
