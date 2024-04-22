import { useState } from "react";
const initialBoard = () => Array(9).fill(null);
const useTicTacToe = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [isXnext, setisXnext] = useState(true);
	const winningPatterns = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	const calculatewinner = (currentBoard) => {
		for (let i = 0; i < winningPatterns.length; i++) {
			const [a, b, c] = winningPatterns[i];
			if (
				currentBoard[a] &&
				currentBoard[a] === currentBoard[b] &&
				currentBoard[a] === currentBoard[c]
			) {
				return currentBoard[a];
			}
		}
		return null;
	};
	const handleClick = (index) => {
		const winner = calculatewinner(board);
		console.log(winner);
		if (winner || board[index]) return;
		const boardCopy = [...board];
		if (boardCopy[index] || calculatewinner(boardCopy)) return;
		boardCopy[index] = isXnext ? "X" : "O";
		setBoard(boardCopy);
		setisXnext(!isXnext);
	};
	const resetGame = () => {
		setBoard(initialBoard());
		setisXnext(true);
	};
	const getStatus = () => {
		const winner = calculatewinner(board);
		if (winner) {
			return `Winner is ${winner}`;
		}
		if (!board.includes(null)) {
			return "Game is Draw";
		}
		return `Next Player is ${isXnext ? "X" : "O"}`;
	};
	return { board, handleClick, resetGame, getStatus };
};
export default useTicTacToe;
