import "./App.css";
import "./dashboard.css";
import "./index.css";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

import Dashboard from "./pages/Dashboard";
import CreateDonor from "./pages/donorSection/CreateDonor";
import DonorList from "./pages/donorSection/DonorList";
import DonationList from "./pages/donationSection/DonationList"
import CreateDonation from "./pages/donationSection/CreateDonation"
import DashboardPanel from "./components/dashboardPanel";

function App() {
	return (
		<Router>
			<Routes>
				{/* first we will generate OTP, then we will create a new user, upon successful verification */}
				<Route path="/" element={<Dashboard />}>
					<Route path="" element={<DashboardPanel />} />
					<Route path="donor/create" element={<CreateDonor />} />
					<Route path="donor/list" element={<DonorList />} />
					 <Route path="donation/list" element={<DonationList />} /> 
					<Route path="donation/create" element={<CreateDonation />} /> 
				</Route>
				<Route path="/register" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />
			</Routes>
		</Router>
	);
}

export default App;
