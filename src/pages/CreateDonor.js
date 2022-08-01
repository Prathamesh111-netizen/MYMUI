import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const steps = [
	{
		label: "General Information"
	},
	{
		label: "Contact Information"
	},
	{
		label: "Other relevant Details"
	}
];

const dummyValues = [];
// export default stepOne;
export default function HorizontalLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());

	const StepOne = () => {
		return (
			<React.Fragment>
				<Grid container rowSpacing={2} sx={{ mt: 2, backgroundColor: "#fff" }}>
					<Grid item xs={12}>
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
						>
							<TextField
								size="small"
								label="First Name"
								variant="outlined"
								required
								error={false}
							/>
							<TextField label="Middle Name" variant="outlined" size="small" />
							<TextField label="Last Name" variant="outlined" size="small" />
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
						>
							<TextField
								size="small"
								id="date"
								label="Birthday"
								type="date"
								defaultValue="2017-05-24"
								sx={{ width: 220 }}
								InputLabelProps={{
									shrink: true
								}}
							/>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Gender" />
								)}
							/>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Occupation" />
								)}
							/>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
						>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Donor Type" />
								)}
							/>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Donor Importance" />
								)}
							/>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Is Govt Servant" />
								)}
							/>
						</Stack>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	};

	const StepTwo = () => {
		return (
			<React.Fragment>
				<Grid container rowSpacing={2} sx={{ mt: 2, backgroundColor: "#fff" }}>
					<Grid item xs={12}>
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
						>
							<TextField
								size="small"
								label="First Name"
								variant="outlined"
								required
								error={false}
							/>
							<TextField label="Middle Name" variant="outlined" size="small" />
							<TextField label="Last Name" variant="outlined" size="small" />
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
						>
							<TextField
								size="small"
								id="date"
								label="Birthday"
								type="date"
								defaultValue="2017-05-24"
								sx={{ width: 220 }}
								InputLabelProps={{
									shrink: true
								}}
							/>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Gender" />
								)}
							/>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Occupation" />
								)}
							/>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
						>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Donor Type" />
								)}
							/>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Donor Importance" />
								)}
							/>
							<Autocomplete
								size="small"
								disablePortal
								options={dummyValues}
								sx={{ width: 300 }}
								renderInput={(params) => (
									<TextField {...params} label="Is Govt Servant" />
								)}
							/>
						</Stack>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	};
	const StepThree = () => {
		return <div>Hello step 3</div>;
	};
	const isStepOptional = (step) => {
		return step === 1;
	};

	const isStepFailed = (step) => {
		return step === 1;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((step, index) => {
					const stepProps = {};
					const labelProps = {};
					// if (isStepFailed(index)) {
					// 	labelProps.optional = (
					// 		<Typography variant="caption" color="error">
					// 			Alert message
					// 		</Typography>
					// 	);

					// 	labelProps.error = true;
					// }
					// if (isStepOptional(index)) {
					// 	labelProps.optional = (
					// 		<Typography variant="caption">Optional</Typography>
					// 	);
					// }
					if (isStepSkipped(index)) {
						stepProps.completed = false;
					}
					return (
						<Step key={step.label} {...stepProps}>
							<StepLabel {...labelProps}>{step.label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			{activeStep === steps.length ? (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</React.Fragment>
			) : (
				<React.Fragment>
					{/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
					{activeStep === 0 && <StepOne />}
					{activeStep === 1 && <StepTwo />}
					{activeStep === 2 && <StepThree />}
					{/* {activeStep === 0 ? <StepOne /> : <h1>Hello World</h1>} */}

					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Button
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Back
						</Button>
						<Box sx={{ flex: "1 1 auto" }} />
						{isStepOptional(activeStep) && (
							<Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
								Skip
							</Button>
						)}

						<Button onClick={handleNext}>
							{activeStep === steps.length - 1 ? "Finish" : "Next"}
						</Button>
					</Box>
				</React.Fragment>
			)}
		</Box>
	);
}
