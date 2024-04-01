import { useState } from 'react';
import Status from './components/Status';
import Board from "./components/Board";
import ButtonHistory from "./components/ButtonHistory";
import calculateWinner from './utils/calculateWinner';

export default function Game(){
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currMove, setCurrMove] = useState(0);
    const [currSquares, setCurrSquares] = useState(Array(9).fill(null));

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
        setCurrSquares(nextSquares);
    }

    function jumpTo(nextMove){
        setCurrMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
        setCurrSquares(history[nextMove]);
    }

    const winner = calculateWinner(currSquares);
    const status = winner ? 'Winner : ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');

    return(
        <div className="game">
            <Status status={status} />
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol><ButtonHistory history={history} jumpTo={jumpTo}/></ol>
            </div>
        </div>
    );
}