import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountAddIcon from "@mui/icons-material/GroupAdd";
import CheckOTPIcon from "@mui/icons-material/AddModerator";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { blue } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "./Copyright";

const theme = createTheme();

export default function LoginPage() {
	const [showPassword, setshowPassword] = React.useState(false);
	const [isDataDone, setIsDataDone] = React.useState(false);
	const [Username, setUsername] = React.useState("");
	const [Email, setEmail] = React.useState("");
	const [Password, setPassword] = React.useState("");
	const [OTP, setOTP] = React.useState("");

	const handleClickShowPassword = () => {
		setshowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({
			Username,
			Email,
			Password
		});
		setIsDataDone(true);
	};

	const createUser = (event) => {
		event.preventDefault();
		console.log({
			Username,
			Email,
			Password,
			OTP
		});

		axios({
			method: "post",
			url: "http://localhost:7000/users/register",
			data: {
				OTP,
				Username,
				Email,
				Password
			},
			withCredentials: true
		}).then(function (response) {
			console.log(response);
		});
	};

	const UserInputComponent = () => {
		return (
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: blue[800] }}>
						<AccountAddIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Create a new Account
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 1 }}
					>
						<TextField
							id="Username"
							label="Username"
							variant="outlined"
							fullWidth
							margin="normal"
							value={Username}
							onChange={(event) => setUsername(event.target.value)}
						/>
						<TextField
							id="Email"
							label="Email"
							variant="outlined"
							fullWidth
							margin="normal"
							value={Email}
							onChange={(event) => setEmail(event.target.value)}
						/>

						<FormControl fullWidth variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={showPassword ? "text" : "password"}
								value={Password}
								onChange={(event) => {
									setPassword(event.target.value);
								}}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Create account
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="/forgot-password" variant="body2">
									{"Forgot Password?"}
								</Link>
							</Grid>
							<Grid item>
								<Link href="/login" variant="body2">
									{"Already have an account? Login"}
								</Link>
							</Grid>
						</Grid>
						<Copyright sx={{ mt: 5 }} />
					</Box>
				</Box>
			</Grid>
		);
	};

	const VerfiyOtpComponent = () => {
		return (
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: blue[800] }}>
						<CheckOTPIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Verify One-Time-Password
					</Typography>
					<Box component="form" noValidate onSubmit={createUser} sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="otp"
							label="One Time Password"
							autoComplete="otp"
							autoFocus
							value={OTP}
							onChange={(event) => setOTP(event.target.value)}
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Confirm OTP
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="/login" variant="body2">
									{"Return to Login Page?"}
								</Link>
							</Grid>
						</Grid>
						<Copyright sx={{ mt: 5 }} />
					</Box>
				</Box>
			</Grid>
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100vh" }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: "url(/images/data-bg-2.jpg)",
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center"
					}}
				/>
				{isDataDone ? <VerfiyOtpComponent /> : <UserInputComponent />}
			</Grid>
		</ThemeProvider>
	);
}
