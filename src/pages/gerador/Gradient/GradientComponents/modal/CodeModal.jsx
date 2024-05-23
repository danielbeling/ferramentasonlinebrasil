import { useEffect } from "react"
import { useSelector } from "react-redux"
import getGradientCSSValue from "../../utils/getGradientCSSValue"

import './CodeModal.css'

export default function CodeModal({ closeModal }) {
  const gradientValues = useSelector(state => state.gradient)

  let runningAnimation = false
  function handleCopy(e) {
    if (!runningAnimation) {
      runningAnimation = true
      e.target.textContent = "Copiado!"

      navigator.clipboard.writeText(`background-image: ${getGradientCSSValue(gradientValues)}`)

      setTimeout(() => {
        e.target.textContent = "copy"
        runningAnimation = false
      }, 2000)
    }
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden"
    return () => document.body.style.overflowY = "visible"
  }, [])

  return (
    <div
      onClick={closeModal}
      className="overlay"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="modal-content"
      >
        <div className="modal-header">
          <p className="title">Aqui está o seu código ✔</p>
          <button
            onClick={handleCopy}
            className="copy-button"
          >
            Copiar
          </button>
          <button
            onClick={closeModal}
            className="close-button"
          >
            Fechar
          </button>
        </div>
        <p className="code">
          {`background-image: ${getGradientCSSValue(gradientValues)}`}
        </p>
      </div>
    </div>
  )
}
