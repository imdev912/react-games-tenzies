import React from "react";
import { Square } from "../Square/Square";
import { nanoid } from "nanoid";
import { Winner } from "../Winner";
import "./Board.css";


const fillRandom = () => {
	return {
		id: nanoid(),
		value: Math.floor(Math.random() * 6),
		hold: false
	};
};

const init = () => {
	const arr = [];

	for (let i = 0; i < 10; i++) {
		arr.push(fillRandom());
	}

	return {
		square: arr,
		winner: false
	};
};

export const Board = () => {
	const [state, setState] = React.useState(init);

	const rollDice = () => {
		if (state.winner) {
			setState(init);
			return true;
		}

		setState((prev) => {
			return {
				...prev,
				square: prev.square.map((item) => {
					if (item.hold) return item;
					return fillRandom();
				})
			}
		});
	};

	const holdDice = (id) => {
		setState((prev) => {
			return {
				...prev,
				square: prev.square.map((item) => {
					if (item.id === id) {
						return { ...item, hold: !item.hold };
					}

					return item;
				})
			}
		});
	};

	React.useEffect(() => {
		const square = state.square;
		const hold = square.filter((item) => item.hold && item.value === square[0].value);

		if (hold.length === 10) {
			setState((prev) => {
				return {
					...prev,
					winner: true
				}
			})
		}
	}, [state.square]);

	return (
		<div className="tenzies">
			{state.winner && <Winner />}

			<div className="board">
				{state.square.map((item) => {
					return <Square key={item.id} {...item} holdDice={holdDice} />;
				})}
			</div>

			<button className="roll" onClick={rollDice}>
				{state.winner ? "Play Again" : "Roll"}
			</button>
		</div>
	);
};
