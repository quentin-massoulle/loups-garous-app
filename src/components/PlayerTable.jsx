function PlayerTable() {
    const players = ["Hugo", "Morgane", "LoupNoir", "OmbreSilencieuse"];
  
    return (
      <div className="player-table">
        <table>
          <thead>
            <tr>
              <th>Nom du Joueur</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <td>{player}</td>
                <td><div className="status-icon"></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  export default PlayerTable;