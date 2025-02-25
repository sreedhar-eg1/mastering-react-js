import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
   const [playerName, setPlayerName] =  useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    // Not recommended, use function, which gets latest value
    // setIsEditing(!isEditing);
    setIsEditing(editing => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {/* Using ternary operator */}
        {/* {!isEditing ? <span className="player-name">{name}</span> :  <input type="text" required />} */}
        {/* using variable */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
