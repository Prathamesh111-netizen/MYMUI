import * as React from "react";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Tooltip from "@mui/material/Tooltip";

import AllDatacards from "../components/CardSection";
import Grid from "@mui/material/Grid";

import DonutChart from "../components/DonutChart";
import AreaChart from "../components/AreaChart";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DashboardPanel() {
	const [openDialog, setOpenDialog] = React.useState(false);

	const handleClickOpen = () => {
		setOpenDialog(true);
	};

	const handleClose = () => {
		setOpenDialog(false);
	};

	return (
		<>
			<Typography sx={{ mb: 1 }}>
				Welcome, Prathamesh Pawar. All systems are running properly !
			</Typography>
			<AllDatacards />
			<h3>Donations Analytics</h3>

			<Grid container spacing={4} columns={16} sx={{ alignItems: "center" }}>
				<Grid item xs={12}>
					<AreaChart />
				</Grid>
				<Grid item xs={4}>
					<DonutChart />
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
