import React from "react";
import "./Square.css";

export const Square = (props) => {
	const { id, value, hold, holdDice } = props;

	return (
		<div
			className={`square ${hold ? "hold" : ""}`}
			onClick={() => holdDice(id)}
		>
			{value}
		</div>
	);
};
