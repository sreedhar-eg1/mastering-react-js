import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "./winning-combination";

import { useState } from "react";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriverdActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  })
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X')
  const activePlayer = deriverdActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];
  let winner;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer(currentActivePlayer => currentActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      // let currentPlayer = 'X'

      // if (prevTurns.length > 0 && gameTurns[0].player === 'X') {
      //   currentPlayer = 'O'
      // }
      let currentPlayer = deriverdActivePlayer(prevTurns);

      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => ({...prevPlayers, [symbol]: newName}));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          ></Player>
          <Player
            initialName="Player 2"
            symbol={"0"}
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          ></Player>
        </ol>
        {(winner || hasDraw) && <GameOver onRestart={handleRestart} />}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        ></GameBoard>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
