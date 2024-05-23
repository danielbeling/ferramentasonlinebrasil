import { useDispatch } from "react-redux"
import { updateColorValue } from "../../features/gradient"

import './ColorInput.css'

export default function ColorInput({ id, color }) {
  const dispatch = useDispatch()
  return (
    <input
      onChange={(e) => dispatch(updateColorValue({ id: id, value: e.target.value }))}
      value={color}
      className="color-input"
      type="color"
    />
  )
}
