import { useState } from "react";
import "../App.css";
import useTicTacToe from "../Hooks/usetictactoe";

const initialBoard = () => Array(9).fill(null);
function TicTacToe() {
	const { board, calculatewinner, handleClick, resetGame, getStatus } =
		useTicTacToe();
	const [boards, setboard] = useState(initialBoard());

	return (
		<div className='game'>
			<div className='status'>{getStatus()}</div>
			<div className='board'>
				{board.map((cell, index) => (
					<div key={index} className='cell' onClick={() => handleClick(index)}>
						{cell}
					</div>
				))}
			</div>
			<button className='reset-button' onClick={resetGame}>
				Reset Game
			</button>
		</div>
	);
}

export default TicTacToe;
