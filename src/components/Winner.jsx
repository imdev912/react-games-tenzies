import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export const Winner = () => {
	const { width, height } = useWindowSize();

	return (
		<>
			<Confetti width={width} height={height} numberOfPieces={100} />
			<div className="winner">You Win!</div>
		</>
	);
};