import React from "react";
import Counter from "./counter";
import { Link, Route, Routes } from "react-router-dom";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
	}

	render() {
		if (this.state.errorInfo) {
			return (
				<div className="error-boundary">
					<h2>Whoops! Error</h2>
					<p>Something went wrong</p>
					<details>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</details>
					<Link className="counter" to="/">
						Bring up the counter
					</Link>
					<Routes>
						<Route path="/" element={<Counter />} />
					</Routes>
				</div>
			);
		}

		return this.props.children;
	}
}
export default ErrorBoundary;
