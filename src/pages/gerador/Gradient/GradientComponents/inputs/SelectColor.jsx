import { useSelector, useDispatch } from "react-redux"
import { pickColor } from "../../features/gradient"

import './SelectColor.css'

export default function SelectColor() {
  const dispatch = useDispatch()
  const gradientValues = useSelector((state) => state.gradient)

  return (
    <div className="select-color mb-5">
      <select
        onChange={(e) => {
          dispatch(pickColor(Number(e.target.value)))
        }}
        className="select-input"
      >
        {gradientValues.colors.map((color, index) => (
          <option value={color.id} key={color.id}>
            Color {color.id}
          </option>
        ))}
      </select>
    </div>
  )
}
