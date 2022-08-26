import * as React from "react";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Tooltip from "@mui/material/Tooltip";
import DownloadIcon from "@mui/icons-material/Download";
import Grid from "@mui/material/Grid";

// import DonutChart from "../components/DonutChart";
// import AreaChart from "../components/AreaChart";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { green, pink, orange, blue, red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CountUp from "react-countup";
// import Toolbar from "@mui/material/Toolbar";
// import { shadows } from "@mui/system";
// import React, { PureComponent } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";

import { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import axios from "axios";
// import avatar from "../images/image-rita.png";

import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ReactSpeedometer from "react-d3-speedometer";
import SpamIcon from "@mui/icons-material/GppBad";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest
	})
}));

export default function DashboardPanel() {
	const [cardData, setCardData] = React.useState({});
	// React.useEffect(() => {
	// 	async function data() {
	// 		await axios
	// 			.get("http://34.207.87.89:5000/get-call-details", {
	// 				headers: {
	// 					"Access-Control-Allow-Origin": "*",
	// 					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
	// 				},
	// 				responseType: "json"
	// 			})
	// 			.then((res) => {
	// 				setCardData(res.data);
	// 				console.log(res.data);
	// 			});
	// 	}
	// 	data();
	// 	const interval = setInterval(() => data(), 5000);
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, []);

	const AreaChartComponentdata = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400,
			amt: 2400
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398,
			amt: 2210
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800,
			amt: 2290
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908,
			amt: 2000
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800,
			amt: 2181
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800,
			amt: 2500
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300,
			amt: 2100
		}
	];
	const AreaChartComponent = () => {
		return (
			<ResponsiveContainer width="100%" height={300}>
				<AreaChart
					width={900}
					height={350}
					data={AreaChartComponentdata}
					margin={{
						top: 30,
						right: 30,
						left: 0,
						bottom: 0
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="uv" stroke="#06c" fill="#2393D2" />
				</AreaChart>
			</ResponsiveContainer>
		);
	};

	// const arr = ["spam", "emergency", "theft", "inquiry"];

	const data = [
		{ name: cardData === {} ? "" : cardData.prediction, value: 1 },
		{ name: "Emergency", value: 1 },
		{ name: "Help", value: 1 },
		{ name: "Inquiry", value: 1 }
	];

	const renderActiveShape = (props) => {
		const RADIAN = Math.PI / 180;
		const {
			cx,
			cy,
			midAngle,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle,
			fill,
			payload,
			percent,
			value
		} = props;
		const sin = Math.sin(-RADIAN * midAngle);
		const cos = Math.cos(-RADIAN * midAngle);
		const sx = cx + (outerRadius + 10) * cos;
		const sy = cy + (outerRadius + 10) * sin;
		const mx = cx + (outerRadius + 30) * cos;
		const my = cy + (outerRadius + 30) * sin;
		const ex = mx + (cos >= 0 ? 1 : -1) * 22;
		const ey = my;
		const textAnchor = cos >= 0 ? "start" : "end";

		return (
			<g style={{ zIndex: "100" }}>
				<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
					{payload.name}
				</text>
				<Sector
					cx={cx}
					cy={cy}
					innerRadius={innerRadius}
					outerRadius={outerRadius}
					startAngle={startAngle}
					endAngle={endAngle}
					fill="#f4821f"
				/>
				<Sector
					cx={cx}
					cy={cy}
					startAngle={startAngle}
					endAngle={endAngle}
					innerRadius={outerRadius + 6}
					outerRadius={outerRadius + 10}
					fill={fill}
				/>
				<Sector
					cx={cx}
					cy={cy}
					innerRadius={innerRadius}
					outerRadius={outerRadius}
					startAngle={startAngle}
					endAngle={endAngle}
					fill="#f4821f"
				/>
				<Sector
					cx={cx}
					cy={cy}
					startAngle={startAngle}
					endAngle={endAngle}
					innerRadius={outerRadius + 6}
					outerRadius={outerRadius + 10}
					fill={fill}
				/>
				<path
					d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
					stroke={fill}
					fill="none"
				/>
				<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
				<text
					x={ex + (cos >= 0 ? 1 : -1) * 12}
					y={ey}
					textAnchor={textAnchor}
					fill="#333"
					style={{ fontSize: "0.8rem" }}
				>{`${"Prediction"}`}</text>
				{/* <text
				style={{ fontSize: "0.8rem" }}
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				dy={18}
				textAnchor={textAnchor}
				fill="#999"
			>
				{`(Rate ${(percent * 100).toFixed(2)}%)`}
			</text> */}
			</g>
		);
	};

	class DonutChart extends PureComponent {
		state = {
			activeIndex: 0
		};

		onPieEnter = (_, index) => {
			this.setState({
				activeIndex: index
			});
		};

		render() {
			return (
				<ResponsiveContainer width="110%" height={400}>
					<PieChart width={600} height={600}>
						<Pie
							activeIndex={this.state.activeIndex}
							activeShape={renderActiveShape}
							data={data}
							cx="50%"
							cy="50%"
							innerRadius={60}
							outerRadius={80}
							fill="#2393D2"
							dataKey="value"
							onMouseEnter={this.onPieEnter}
						/>
					</PieChart>
				</ResponsiveContainer>
			);
		}
	}

	const card1 = (
		<React.Fragment>
			<CardContent>
				<Grid container spacing={3} columns={16} sx={{ alignItems: "center" }}>
					<Grid item xs={4}>
						<Avatar sx={{ bgcolor: pink[500] }}>
							<span class="material-symbols-outlined">calendar_month</span>
						</Avatar>
					</Grid>
					<Grid item xs={12}>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							Message
						</Typography>
					</Grid>
				</Grid>
				<Grid
					container
					columns={16}
					sx={{ alignItems: "baseline", justifyContent: "flex-start", gap: 0 }}
				>
					<Typography sx={{ my: 1.5, fontSize: 21 }} color="text.secondary">
						{cardData === {} ? "" : cardData.message}
					</Typography>
				</Grid>

				<Typography
					sx={{ my: 1.5, fontSize: 10 }}
					color="text.secondary"
					gutterBottom
				>
					updated <CountUp end={1} duration={2} /> sec ago
				</Typography>
			</CardContent>
		</React.Fragment>
	);
	const card2 = (
		<React.Fragment>
			<CardContent>
				<Grid container spacing={3} columns={16} sx={{ alignItems: "center" }}>
					<Grid item xs={4}>
						<Avatar sx={{ bgcolor: orange[500] }}>
							<span class="material-symbols-outlined">phone</span>
						</Avatar>
					</Grid>
					<Grid item xs={12}>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							Mobile Number
						</Typography>
					</Grid>
				</Grid>
				<Grid
					container
					columns={16}
					sx={{ alignItems: "baseline", justifyContent: "flex-start", gap: 0 }}
				>
					<Typography sx={{ my: 1.5, fontSize: 21 }} color="text.secondary">
						{cardData === {} ? "" : cardData.mob_number}
					</Typography>
				</Grid>

				<Typography
					sx={{ my: 1.5, fontSize: 10 }}
					color="text.secondary"
					gutterBottom
				>
					updated <CountUp end={1} duration={2} /> sec ago
				</Typography>
			</CardContent>
		</React.Fragment>
	);
	const card3 = (
		<React.Fragment>
			<CardContent>
				<Grid container spacing={3} columns={16} sx={{ alignItems: "center" }}>
					<Grid item xs={4}>
						<Avatar sx={{ bgcolor: blue[500] }}>
							<span class="material-symbols-outlined">groups_2</span>
						</Avatar>
					</Grid>
					<Grid item xs={12}>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							Prediction
						</Typography>
					</Grid>
				</Grid>
				<Grid
					container
					columns={16}
					sx={{ alignItems: "baseline", justifyContent: "flex-start", gap: 0 }}
				>
					<Typography sx={{ my: 1.5, fontSize: 21 }} color="text.secondary">
						{cardData === {} ? "" : cardData.prediction}
					</Typography>
				</Grid>

				<Typography
					sx={{ my: 1.5, fontSize: 10 }}
					color="text.secondary"
					gutterBottom
				>
					updated <CountUp end={1} duration={2} /> sec ago
				</Typography>
			</CardContent>
		</React.Fragment>
	);
	const card4 = (
		<React.Fragment>
			<CardContent>
				<Grid container spacing={3} columns={16} sx={{ alignItems: "center" }}>
					<Grid item xs={4}>
						<Avatar sx={{ bgcolor: green[500] }}>
							<span class="material-symbols-outlined">corporate_fare</span>
						</Avatar>
					</Grid>
					<Grid item xs={12}>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							Selected Option
						</Typography>
					</Grid>
				</Grid>
				<Grid
					container
					columns={16}
					sx={{ alignItems: "baseline", justifyContent: "flex-start", gap: 0 }}
				>
					<Typography sx={{ my: 1.5, fontSize: 21 }} color="text.secondary">
						{cardData === {} ? "" : cardData.selected_option}
					</Typography>
				</Grid>

				<Typography
					sx={{ my: 1.5, fontSize: 10 }}
					color="text.secondary"
					gutterBottom
				>
					updated <CountUp end={1} duration={2} /> sec ago
				</Typography>
			</CardContent>
		</React.Fragment>
	);

	function AllDatacards() {
		return (
			<Stack
				direction="row"
				divider={<Divider orientation="vertical" flexItem />}
				// spacing={2}
				justifyContent="space-between"
			>
				<Box sx={{ minWidth: 225 }}>
					<div class="card w-96 bg-base-100 shadow-xl">
						<div class="card-body">
							<h2 class="card-title">Card title!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</Box>
				<Box sx={{ minWidth: 225 }}>
					<Card variant="outlined" sx={{ "&:hover": { boxShadow: 4 } }}>
						{card2}
					</Card>
				</Box>
				{/* <Box sx={{ minWidth: 225 }}>
					<Card variant="outlined" sx={{ "&:hover": { boxShadow: 4 } }}>
						{card3}
					</Card>
				</Box>
				<Box sx={{ minWidth: 225 }}>
					<Card variant="outlined" sx={{ "&:hover": { boxShadow: 4 } }}>
						{card4}
					</Card>
				</Box> */}
			</Stack>
		);
	}

	const [openDialog, setOpenDialog] = React.useState(false);

	const handleClickOpen = () => {
		setOpenDialog(true);
	};

	const handleClose = () => {
		setOpenDialog(false);
	};
	const timestamp = Date.now();
	const time = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}).format(timestamp);
	function DetailsCard() {
		const [expanded, setExpanded] = React.useState(false);

		const handleExpandClick = () => {
			setExpanded(!expanded);
		};

		return (
			<Card sx={{ maxWidth: 800 }}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
							PS
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Spoofex Data Analysis: Latest Updated Version"
					subheader={time}
				/>
				{/* <CardMedia
					component="img"
					height="194"
					image="/static/images/cards/paella.jpg"
					alt="Paella dish"
				/> */}
				<CardContent>
					<Typography variant="h6" color="text.secondary">
						Phone Number :
					</Typography>
					<Typography variant="h6" color="text.secondary">
						Message :
					</Typography>
					<Typography variant="h6" color="text.secondary">
						Prediction:
					</Typography>
					<Typography variant="h6" color="text.secondary">
						Selected Category:
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<Button variant="outlined" color="error" startIcon={<SpamIcon />}>
						Add to Spam
					</Button>
					{/* <IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton> */}
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography variant="h5">Modal Prediction:</Typography>
						<Typography paragraph>
							Heat 1/2 cup of the broth in a pot until simmering, add saffron
							and set aside for 10 minutes.
						</Typography>
						<Typography paragraph>
							Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
							over medium-high heat. Add chicken, shrimp and chorizo, and cook,
							stirring occasionally until lightly browned, 6 to 8 minutes.
							Transfer shrimp to a large plate and set aside, leaving chicken
							and chorizo in the pan. Add pimentón, bay leaves, garlic,
							tomatoes, onion, salt and pepper, and cook, stirring often until
							thickened and fragrant, about 10 minutes. Add saffron broth and
							remaining 4 1/2 cups chicken broth; bring to a boil.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		);
	}

	function ActionAreaCard() {
		return (
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							m: 1
						}}
					>
						<Avatar sx={{ bgcolor: orange[500], width: 56, height: 56 }}>
							PS
						</Avatar>
					</Box>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Username:
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Details:
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Role:
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Last Login:
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}

	const style = {
		width: "100%",
		// maxWidth: 500,
		bgcolor: "background.paper"
	};

	function Transcript() {
		return (
			<List sx={style} component="nav" aria-label="mailbox folders">
				<ListItem>
					<Typography gutterBottom variant="h6" component="div">
						Transcript
					</Typography>
				</ListItem>

				<ListItem>
					<ListItemText primary="Inbox" />
				</ListItem>
				<Divider />
				<ListItem divider>
					<ListItemText primary="Drafts" />
				</ListItem>
				<ListItem>
					<ListItemText primary="Trash" />
				</ListItem>
				<Divider light />
				<ListItem button>
					<ListItemText primary="Spam" />
				</ListItem>
			</List>
		);
	}

	return (
		<>
			<Typography sx={{ mb: 1 }}>
				Welcome. All systems are running properly !
			</Typography>
			<Grid container spacing={2} columns={16} sx={{ alignItems: "center" }}>
				{/* <Grid item xs={12}>
					<AreaChartComponent />
				</Grid> */}
				<Grid item xs={12}>
					<DetailsCard />
				</Grid>
				<Grid item xs={4}>
					<ActionAreaCard />
				</Grid>
			</Grid>

			<h3>Additional factors</h3>

			<Grid container spacing={4} columns={16} sx={{ alignItems: "center" }}>
				{/* <Grid item xs={12}>
					<AreaChartComponent />
				</Grid> */}
				<Grid item xs={4}>
					<Transcript />
				</Grid>
				<Grid
					item
					xs={10}
					sx={{
						display: "flex",
						justifyContent: "center",
						slignItems: "center"
					}}
				>
					<ReactSpeedometer
						// fluidWidth={true}
						minValue={0}
						maxValue={100}
						value={25}
						currentValueText="Importance Level"
						customSegmentLabels={[
							{
								text: "Spam",
								position: "INSIDE",
								color: "#555"
							},
							{
								text: "Inquiry",
								position: "INSIDE",
								color: "#555"
							},
							{
								text: "Neutral",
								position: "INSIDE",
								color: "#555",
								fontSize: "19px"
							},
							{
								text: "Theft",
								position: "INSIDE",
								color: "#555"
							},
							{
								text: "Emergency",
								position: "INSIDE",
								color: "#555"
							}
						]}
					/>
					;
				</Grid>
				<Grid item xs={2}>
					<Button variant="outlined" startIcon={<DownloadIcon />}>
						Download as Excel
					</Button>
				</Grid>
			</Grid>

			<Tooltip title="Support">
				<Fab
					sx={{
						position: "absolute",
						bottom: "1rem",
						right: "1rem",
						backgroundColor: "#2393D2"
					}}
					aria-label="Add"
					onClick={handleClickOpen}
				>
					<SupportAgentIcon sx={{ color: "primary" }} />
				</Fab>
			</Tooltip>
			<Dialog open={openDialog} onClose={handleClose}>
				<DialogTitle>Support Section</DialogTitle>
				<DialogContent>
					<DialogContentText>
						If you have a technical problem with your usage or access, you can
						use this form to request help.. We will send updates occasionally.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Concern"
						type="concern"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Raise a concern</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
