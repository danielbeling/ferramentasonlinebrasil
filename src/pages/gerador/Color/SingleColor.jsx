import { useState } from "react";
import { FaCopy } from "react-icons/fa6";

const SingleColor = ({ hexColor }) => {

  const [copy, setCopy] = useState(false);

  const handleCopy = (color) => () => {
    const colorNew = `#${color}`;
    navigator.clipboard.writeText(colorNew);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }

  return (
    <div className="single-card" style={{ backgroundColor: `#${hexColor}` }}>
      <div className="content">
        <p>#{hexColor}</p>
        <button onClick={handleCopy(hexColor)}>
          <FaCopy className="copy-icon" /> {/* Use o ícone diretamente aqui */}
        </button>
      </div>
      {copy ? <p className="copy-alert">Copiado!</p> : null}
    </div>
  );
}

export default SingleColor;
