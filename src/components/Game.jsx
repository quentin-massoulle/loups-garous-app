import React from "react";
import "../styles.css";
import Clock from "./Clock";

function Jeu() {
    return (
        <div className="container">
            <h2>Jeu - Loups Garous</h2>
            <Clock></Clock>
        </div>
    );
}

export default Jeu;