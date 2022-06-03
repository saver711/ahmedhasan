/////////// IMPORTS
///
import { createPortal } from "react-dom"
import classes from "./Modal.module.css"
import { motion } from "framer-motion"

///
/////////// HELPER VARIABLES & FUNCTIONS
///
const modalVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
}
///
export const Modal = ({ children }) => {
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
    <>
      {createPortal(
        <motion.div
          variants={modalVariants}
          initial="start"
          animate="end"
          exit="start"
          className={`centerFlex fullModal`}
        >
          {children}
        </motion.div>,
        document.getElementById("modal")
      )}
    </>
  )
}
