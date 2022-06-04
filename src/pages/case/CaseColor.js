/////////// IMPORTS
///
import { useEffect, useState } from "react"
import {
  leaveTarget,
  moveInTarget,
} from "../../helpers/functions/mouseMovement"
import classes from "./Case.module.css"
import { ImClipboard } from "react-icons/im"
import { MdOutlineContentCopy } from "react-icons/md"
///
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const CaseColor = ({ color }) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///
  const [copy, copyUpdater] = useState(true)
  ///
  /////////// SIDE EFFECTS
  ///
  let time
  useEffect(() => {
    if (copy) {
      time = setTimeout(() => {
        copyUpdater(false)
      }, 1500)
    }
    return () => clearTimeout(time)
  }, [copy])
  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///
  const colorClickHandler = () => {
    navigator.clipboard.writeText(color)
    copyUpdater(true)
  }
  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <div
      onClick={colorClickHandler}
      style={{ borderColor: color, }}
      className={`centerFlex mouseMove ${classes.props__color}`}
      onMouseMove={(e) => {
        moveInTarget(e)
        Array.from(
          e.target.closest(".mouseMove").parentElement.children
        ).forEach((item) => (item.style.backgroundColor = "transparent"))
        e.target.closest(".mouseMove").style.backgroundColor = color
      }}
      onMouseLeave={(e) => {
        leaveTarget(e)
        Array.from(
          e.target.closest(".mouseMove").parentElement.children
        ).forEach((item) => (item.style.backgroundColor = "transparent"))
        // e.target.closest(".mouseMove").style.backgroundColor = "transparent"
      }}
    >
      <div style={{ borderColor: color }}>
        <div className={`centerFlex`}>
          <span>{copy ? <ImClipboard /> : <MdOutlineContentCopy />}</span>
        </div>
      </div>
    </div>
  )
}
