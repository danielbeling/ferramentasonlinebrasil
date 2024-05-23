import { useDispatch } from "react-redux"
import { addColor, removeColor } from "../features/gradient"

import './AddremoveColor.css'

export default function AddRemoveColor({ action, text }) {
  const dispatch = useDispatch()

  function handleClick() {
    if (action === "add") {
      dispatch(addColor())
    } else if (action === "remove") {
      dispatch(removeColor())
    }
  }

  return (
    <button
      onClick={handleClick}
      className="action-button"
    >
      {text}
    </button>
  )
}
