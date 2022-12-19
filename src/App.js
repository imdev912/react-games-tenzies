import React from "react";
import { Board } from "./components/Board/Board";
import "./styles.css";


export default function App() {
	return (
		<div className="App">
			<p>
				Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
			</p>
			
			<Board />
		</div>
	);
}
