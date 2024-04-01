import Square from './Square';
import calculateWinner from '../utils/calculateWinner';
import PropTypes from 'prop-types';

export default function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i){
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  return (
    <>
      <div className='board'>
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={()=>handleClick(i)}/>
        ))}
      </div>
    </>
  )
}

Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPlay: PropTypes.func.isRequired
}