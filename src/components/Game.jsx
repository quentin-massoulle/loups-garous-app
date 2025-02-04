import Clock from "./Clock";
import Background from "./Background";
import ChatBox from "./ChatBox";
import GameMap from "./GameMap";
import PlayerTable from "./PlayerTable";
import './../game.css';

function Game() {
  return (
    <div>
      <Background />
      <Clock />
      <div className="container">
        <p>Infos ...</p>
        <p>Et une autre ligne</p>
      </div>
      <GameMap />
      <PlayerTable />
      <ChatBox />
    </div>
  );
}

export default Game;
