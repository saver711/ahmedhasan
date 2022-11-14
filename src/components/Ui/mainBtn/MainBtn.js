/////////// IMPORTS
///
import classes from "./MainBtn.module.css"
import { CgArrowLongRight } from "react-icons/cg"
import { Link } from "react-router-dom"
import { leaveTarget, moveInTarget } from "../../../helpers/functions/mouseMovement"
///
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const MainBtn = ({ text, where, showContactModalUpdater, white }) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///
  const showContactHandler = () => showContactModalUpdater(true)
  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <>
      {where ? (
        <Link to={where} className={classes.btn}>
          {text && <p>{text}</p>}
          <div
            className={`mouseMove ${classes.btn__right}`}
            onMouseMove={(e) => moveInTarget(e)}
            onMouseLeave={(e) => leaveTarget(e)}
          >
            <span
              style={{ borderColor: white && "#fff" }}
              className={`${classes.btn__smallCircle}`}
            ></span>
            <CgArrowLongRight color={white && "#fff"} />
            <span
              style={{ borderColor: white && "#fff" }}
              className={`${classes.btn__bigCircle}`}
            ></span>
          </div>
        </Link>
      ) : (
        <div className={classes.btn}>
          {text && !showContactModalUpdater && <p>{text}</p>}
          {text && showContactModalUpdater && (
            <p onClick={showContactHandler}>{text}</p>
          )}
          <div
            onClick={showContactModalUpdater && showContactHandler}
            className={`mouseMove ${classes.btn__right}`}
            onMouseMove={(e) => moveInTarget(e)}
            onMouseLeave={(e) => leaveTarget(e)}
          >
            <span
              style={{ borderColor: white && "#fff" }}
              className={`${classes.btn__smallCircle}`}
            ></span>
            <CgArrowLongRight color={white && "#fff"} />
            <span
              style={{ borderColor: white && "#fff" }}
              className={`${classes.btn__bigCircle}`}
            ></span>
          </div>
        </div>
      )}
    </>
  )
}
