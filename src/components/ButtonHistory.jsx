export default function ButtonHistory({ history, jumpTo }){
    const moves = history.map((squares, move) => {
        const desc = move ? 'Go to move #' + move : 'Start of the game';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    return moves
}