import { useDispatch, useSelector } from "react-redux"
import { updateAngle } from "../../features/gradient"

import './RangeAngle.css'

export default function RangeAngle() {
  const dispatch = useDispatch()
  const gradientValues = useSelector(state => state.gradient)

  return (
    <input
      min="0"
      max="360"
      value={gradientValues.angle}
      onChange={e => dispatch(updateAngle(e.target.value))}
      className="range-angle"
      type="range"
    />
  )
}
