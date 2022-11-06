import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div>
			<h1>Page not found</h1>
			<img src="public\pskce2dj.bmp" alt="error-logo" />
			<p>Head back to the counter</p>
			<Link className="counter" to="/">
				Counter
			</Link>
		</div>
	);
}
