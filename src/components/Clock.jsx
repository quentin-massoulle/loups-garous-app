import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000); // Met à jour chaque minute

    return () => clearInterval(interval); // Nettoie l'intervalle
  }, []);

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return <div className="clock">{time}</div>;
}

export default Clock;
