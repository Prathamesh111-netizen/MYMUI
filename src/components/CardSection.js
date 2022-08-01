import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { green, pink, orange, blue, red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import CountUp from "react-countup";
// import Toolbar from "@mui/material/Toolbar";
// import { shadows } from "@mui/system";

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
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Donations in Month
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				columns={16}
				sx={{ alignItems: "baseline", justifyContent: "flex-start", gap: 0 }}
			>
				<Grid item xs={6}>
					<Typography sx={{ my: 1.5, fontSize: 21 }} color="text.secondary">
						&#8377;
						<CountUp end={100} duration={2} />
					</Typography>
				</Grid>
				<Grid item xs={10}>
					<Typography
						sx={{ my: 1.5, fontSize: 10 }}
						color="text.secondary"
						gutterBottom
					>
						updated 1 sec ago
					</Typography>
				</Grid>
			</Grid>

			<Typography variant="body2" style={{ color: green["A700"] }}>
				+2.1% Than last month
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
						<span class="material-symbols-outlined">account_balance</span>
					</Avatar>
				</Grid>
				<Grid item xs={12}>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Donations YTD
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				columns={16}
				sx={{ alignItems: "baseline", justifyContent: "flex-start", gap: 0 }}
			>
				<Grid item xs={6}>
					<Typography sx={{ my: 1.5, fontSize: 21 }} color="text.secondary">
						&#8377;
						<CountUp end={100} duration={2} />
					</Typography>
				</Grid>
				<Grid item xs={10}>
					<Typography
						sx={{ my: 1.5, fontSize: 10 }}
						color="text.secondary"
						gutterBottom
					>
						updated 1 sec ago
					</Typography>
				</Grid>
			</Grid>

			<Typography variant="body2" style={{ color: red["A700"] }}>
				+2.1% Than last Year
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
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Normal donations YTD
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				columns={16}
				sx={{ alignItems: "baseline", justifyContent: "flex-start", gap: 0 }}
			>
				<Grid item xs={6}>
					<Typography sx={{ my: 1.5, fontSize: 21 }} color="text.secondary">
						&#8377;
						<CountUp end={100} duration={2} />
					</Typography>
				</Grid>
				<Grid item xs={10}>
					<Typography
						sx={{ my: 1.5, fontSize: 10 }}
						color="text.secondary"
						gutterBottom
					>
						updated 1 sec ago
					</Typography>
				</Grid>
			</Grid>

			<Typography variant="body2" style={{ color: green["A700"] }}>
				+2.1% Than last Year
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
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Corpus donations YTD
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				columns={16}
				sx={{ alignItems: "baseline", justifyContent: "flex-start", gap: 0 }}
			>
				<Grid item xs={6}>
					<Typography sx={{ my: 1.5, fontSize: 21 }} color="text.secondary">
						&#8377;
						<CountUp end={100} duration={2} />
					</Typography>
				</Grid>
				<Grid item xs={10}>
					<Typography
						sx={{ my: 1.5, fontSize: 10 }}
						color="text.secondary"
						gutterBottom
					>
						updated 1 sec ago
					</Typography>
				</Grid>
			</Grid>

			<Typography variant="body2" style={{ color: green["A700"] }}>
				+2.1% Than last Year
			</Typography>
		</CardContent>
	</React.Fragment>
);

export default function AllDatacards() {
	return (
		<Stack
			direction="row"
			divider={<Divider orientation="vertical" flexItem />}
			// spacing={2}
			justifyContent="space-between"
		>
			<Box sx={{ minWidth: 225 }}>
				<Card variant="outlined" sx={{ "&:hover": { boxShadow: 4 } }}>
					{card1}
				</Card>
			</Box>
			<Box sx={{ minWidth: 225 }}>
				<Card variant="outlined" sx={{ "&:hover": { boxShadow: 4 } }}>
					{card2}
				</Card>
			</Box>
			<Box sx={{ minWidth: 225 }}>
				<Card variant="outlined" sx={{ "&:hover": { boxShadow: 4 } }}>
					{card3}
				</Card>
			</Box>
			<Box sx={{ minWidth: 225 }}>
				<Card variant="outlined" sx={{ "&:hover": { boxShadow: 4 } }}>
					{card4}
				</Card>
			</Box>
		</Stack>
	);
}
