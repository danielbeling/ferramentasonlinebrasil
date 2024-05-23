import { useState } from "react"
import CodeModal from "./CodeModal"
import { createPortal } from "react-dom"

import './OpenModalBtn.css'

export default function OpenModalBtn() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="openModalBtn"
      >
        Obtenha o código
      </button>
      {showModal && createPortal(<CodeModal closeModal={() => setShowModal(!showModal)} />, document.body)}
    </>
  )
}
