import getGradientCSSValue from "../utils/getGradientCSSValue"
import { useSelector } from "react-redux"

export default function Gradient() {
  const gradientValues = useSelector(state => state.gradient)

  return (
    <div
      style={{
        width: '50%',
        margin: '5px',
        backgroundImage: getGradientCSSValue(gradientValues).slice(0, -1)
      }}
    >

    </div>
  )
}
