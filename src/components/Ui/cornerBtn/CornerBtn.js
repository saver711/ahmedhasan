/////////// IMPORTS
///

import classes from "./CornerBtn.module.css"
import { Link } from "react-router-dom"
import { CgArrowLongRight } from "react-icons/cg"
import { leaveTarget, moveInTarget } from "../../../helpers/functions/mouseMovement"
import { motion } from "framer-motion"
///
/////////// HELPER VARIABLES & FUNCTIONS
///
const cornerBtnVariants = {
  start: {
    y: 300,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .7,
      duration: 1,
      type: "spring",
      stiffness: 50,
    },
  },
}
///
export const CornerBtn = ({text}) => {
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

  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <motion.div
      variants={cornerBtnVariants}
      initial="start"
      animate="end"
      className={`mouseMove ${classes.btn}`}
    >
      <Link
        to={text}
        onMouseMove={(e) => moveInTarget(e)}
        onMouseLeave={(e) => leaveTarget(e)}
      >
        <div>
          <p className={classes.btn__text}>{text}</p>
          <CgArrowLongRight />
        </div>
        <span className="centerAbsolute"></span>
      </Link>
    </motion.div>
  )
}
