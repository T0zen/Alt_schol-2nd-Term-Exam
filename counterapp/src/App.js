import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";
import Counter from "./pages/counter";
import NotFound from "./pages/NotFound";
import React from "react";
import TestCounter from "./TestCounter";

function App() {
	return (
		<>
			<nav>
				<h1>Alt_school Exam</h1>
				<ul>
					<li>
						<Link to="/">Counter</Link>
					</li>
					<li>
						<Link to="/pages/TestCounter">Test ErrorBoundary </Link>
					</li>
					<li>
						<Link to="/pages/NotFound">404</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Counter />} />
				<Route path="/pages/TestCounter" element={<TestCounter />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
