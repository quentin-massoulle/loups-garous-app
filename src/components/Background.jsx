import { useState, useEffect } from "react";
import day from   './../assets/images/background-day.png';
import night from './../assets/images/background-night-2.png';


function Background() {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const updateBackground = () => {
      const now = new Date();
      let minutes = now.getMinutes();
      setBackground(minutes % 2 === 0 ? day  : night);
    };

    updateBackground();
    const interval = setInterval(updateBackground, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="background" style={{ backgroundImage: `url('${background}')`}}></div>;
}

export default Background;