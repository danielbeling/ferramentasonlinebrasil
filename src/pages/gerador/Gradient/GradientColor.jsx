import Gradient from "./GradientComponents/Gradient"
import ColorInput from "./GradientComponents/inputs/ColorInput"
import { useSelector } from "react-redux"
import AddRemoveColor from "./GradientComponents/AddRemoveColor"
import RangeAngle from "./GradientComponents/inputs/RangeAngle"
import SelectColor from "./GradientComponents/inputs/SelectColor"
import RangeColorPosition from "./GradientComponents/inputs/RangeColorPosition"
import OpenModalBtn from "./GradientComponents/modal/OpenModalBtn"

import Footer from '../../Footer'

import '../styles/gerador.css'

function GradientColor() {
  const gradientValues = useSelector((state) => state.gradient)
  // console.log(gradientValues)

  return (
    <>
      <div className="GradColor">
        <div className="app-container">
          <div className="content-container">
            <h1 className="main-title">Gerador Gradient</h1>

            <p className="section-title">Cores (min 2, max 5)</p>
            <div className="color-inputs">
              {gradientValues.colors.map((obj) => (
                <ColorInput id={obj.id} color={obj.value} key={obj.id} />
              ))}
            </div>
            <div className="add-remove-color">
              <AddRemoveColor action={"add"} text={"+"} />
              <AddRemoveColor action={"remove"} text={"-"} />
            </div>

            <p>Escolha e altere a posição da cor</p>
            <SelectColor />

            <p className="section-title">Posição da cor</p>
            <RangeColorPosition />

            <p className="section-title">Ângulo global gradiente</p>
            <RangeAngle />

            <OpenModalBtn />
          </div>

          <Gradient />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default GradientColor;
