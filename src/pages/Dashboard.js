import * as React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import StyledBadge from "../components/StyledBadge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { Outlet, useLocation } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LoadingScreen from "./LoadingScreen";
import { blue } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen
	}),
	overflowX: "hidden"
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`
	}
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme)
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme)
	})
}));

const LinkStyles = { textDecoration: "none", color: "#000" };

export default function MiniDrawer() {
	const { useEffect, useState } = React;

	const theme = useTheme();
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const [preLoading, setPreLoading] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		setTimeout(() => setPreLoading(false), 3000);
	}, []);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open} style={{ background: "#ffffff" }}>
				<Toolbar>
					<Box display="flex" flexGrow={1}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							sx={{
								marginRight: 5,
								...(open && { display: "none" })
							}}
						>
							<MenuIcon sx={{ color: "#f4821f" }} />
						</IconButton>

						<img src="/images/logo.jpeg" alt="VSM logo" className="logo" />
					</Box>
					<Stack
						direction="row"
						divider={<Divider orientation="vertical" flexItem />}
						spacing={2}
					>
						<Tooltip title="Profile">
							<StyledBadge
								overlap="circular"
								anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								variant="dot"
							>
								<Avatar
									alt="Remy Sharp"
									src="/images/profile-avatar.png"
									sx={{ cursor: "pointer" }}
								/>
							</StyledBadge>
						</Tooltip>
						<Tooltip title="Logout">
							<IconButton aria-label="logout" component="span">
								<LogoutIcon sx={{ color: "#2393d2" }} />
							</IconButton>
						</Tooltip>
					</Stack>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					<Link to="/" style={LinkStyles}>
						<Tooltip title={open ? "" : "Dashboard"} placement="right">
							<ListItem
								key={"Dashboard"}
								disablePadding
								sx={{
									display: "block",
									backgroundColor: location.pathname === "/" ? blue[50] : "#fff"
								}}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? "initial" : "center",
										px: 2.5
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : "auto",
											justifyContent: "center",
											color: "#2393d2"
										}}
									>
										<DashboardIcon />
									</ListItemIcon>
									<ListItemText
										primary={"Dashboard"}
										sx={{ opacity: open ? 1 : 0 }}
									/>
								</ListItemButton>
							</ListItem>
						</Tooltip>
					</Link>
					<Link to="/data" style={LinkStyles}>
						<Tooltip title={open ? "" : "Donation List"} placement="right">
							<ListItem
								key={"Donation List"}
								disablePadding
								sx={{
									display: "block",
									backgroundColor:
										location.pathname === "/donation/list" ? blue[50] : "#fff"
								}}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? "initial" : "center",
										px: 2.5
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : "auto",
											justifyContent: "center",
											color: "#2393d2"
										}}
									>
										<span class="material-symbols-outlined">receipt_long</span>
									</ListItemIcon>
									<ListItemText
										primary={"Data Analytics"}
										sx={{ opacity: open ? 1 : 0 }}
									/>
								</ListItemButton>
							</ListItem>
						</Tooltip>
					</Link>
				</List>
				<Divider />
			</Drawer>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					backgroundColor: "#f5f5f5"
				}}
			>
				<DrawerHeader />
				{preLoading && <LoadingScreen />}
				{!preLoading && <Outlet />}
			</Box>
		</Box>
	);
}
