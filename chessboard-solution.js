const chessboard = () => {
    const chessboard = [];
    for (let i = 0; i < 8 ; i++) {
        const columnLetter = String.fromCharCode(97 + i);
        const row = [];
        for (let j = 0; j < 8; j++) {
            row.push(`${columnLetter} - ${j+1}`)
        }
        chessboard.push(row);
    }
    return chessboard;
}

module.exports = chessboard;