import { useDispatch, useSelector } from "react-redux"
import { updateColorPosition } from "../../features/gradient"

import "./RangeColorPosition.css";
export default function RangeColorPosition() {
  const dispatch = useDispatch()
  const gradientValues = useSelector(state => state.gradient)

  return (
    <input
      min="0"
      max="100"
      value={gradientValues.colors[gradientValues.pickedColorID - 1].position}
      onChange={e => dispatch(updateColorPosition(e.target.value))}
      className="range-color-position"
      type="range"
    />
  )
}
