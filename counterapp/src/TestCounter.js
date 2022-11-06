import React, { useState } from "react";

export default function TestError() {
	const [errrorText, setErrorText] = useState("");

	function handleError(e) {
		if (e.target.value.toUpperCase() == "ERROR") {
			setErrorText("ERROR");
		}
	}
	if (errrorText == "ERROR") {
		throw new Error("Error Boundary successfully tested");
	}
	return (
		<div className="test-error">
			<h1>ErrorBoundary Test</h1>
			<p>Enter the keyword to perform the test</p>
			<input
				onChange={handleError}
				type="text"
				placeholder="Psst..keyword is error"
			/>
		</div>
	);
}
