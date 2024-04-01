import PropTypes from 'prop-types'

export default function Square({ value, onSquareClick }){
    return<button className="square" onClick={onSquareClick}>{value}</button>
}

Square.propTypes = {
    value: PropTypes.string,
    onSquareClick: PropTypes.func,
};