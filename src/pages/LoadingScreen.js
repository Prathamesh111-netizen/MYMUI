import React from "react";

export default function LoadingScreen() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "80vh"
			}}
		>
			<img src="/images/PulseLoading.gif" alt="laoding"></img>
		</div>
	);
}
