import { useReducer } from "react";
import "./counter.css";

function Reducer(state, action) {
	switch (action.type) {
		case "decrement":
			return state - 1;
		case "increment":
			return state + 1;
		case "reset":
			return (state = 0);
		case "set":
			return action.payload;
		default:
			return state;
	}
}

function Counter() {
	function Decrement() {
		dispatch({ type: "decrement" });
	}
	function Increment() {
		dispatch({ type: "increment" });
	}
	function Reset() {
		dispatch({ type: "reset" });
	}
	function SetValue(event) {
		event.preventDefault();
		dispatch({ type: "set", payload: event.target.number.value });
	}

	const [state, dispatch] = useReducer(Reducer, 0);
	return (
		<div tabIndex="0" className="counter">
			<div className="main">
				<div className="output">
					<h2>Count:{state}</h2>
				</div>
				<div>
					<form onSubmit={SetValue}>
						<label className="label">
							Value
							<input type="number" placeholder="Enter Value" name="number" />
						</label>
						<button className="set" type="submit">
							Set Value
						</button>
					</form>
				</div>
				<button className="decrement" onClick={Decrement}>
					-
				</button>

				<button className="increment" onClick={Increment}>
					+
				</button>

				<button className="reset" onClick={Reset}>
					Reset
				</button>
			</div>
			<div></div>
		</div>
	);
}

export default Counter;
