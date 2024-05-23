import SingleColor from "./SingleColor";

const DisplayColors = ({ list }) => {
  return (
    <div className="colors-box">
      {
        list.map((color, index) => (
          <SingleColor key={index} hexColor={color.hex} />
        ))
      }
    </div>
  );
}

export default DisplayColors;