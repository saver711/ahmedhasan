/////////// IMPORTS
///
import classes from "./Nav.module.css"
import { GrDocumentDownload } from "react-icons/gr"
import { EmailIcon } from "../../assets/svgs/SiteSvgs"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Navigation } from "../navigation/Navigation"

///
/////////// HELPER VARIABLES & FUNCTIONS
///
const DRIVE =
  "https://drive.google.com/uc?export=download&id=1NAPRTJTahTBSR9IflOyby1DuQ7qJTh4Q"
const navVariants = {
  start: {
    y: -200,
    x: "-50%",
    opacity: 0,
  },
  end: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.7,
      type: "spring",
      stiffness: 40,
    },
  },
}
const navClasses = ` ${classes.nav}`
///
export const Nav = ({
  showContactModalUpdater,
  invert,
  white,
  changeNavOnScroll,
}) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  const [showNavigation, showNavigationUpdater] = useState(false)
  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///
  const toggleNavigation = () => {
    showNavigationUpdater((prev) => !prev)
  }
  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <motion.div
      variants={navVariants}
      initial="start"
      animate="end"
      className="nav_container"
      style={{
        filter: invert ? "invert(100%) brightness(2)" : "",
        backgroundColor: changeNavOnScroll ? "var(--white-color)" : "",
        boxShadow: changeNavOnScroll
          ? "rgb(221, 221, 221) 0px 1px 25px 0px"
          : "",
      }}
    >
      <nav
        style={{
          borderBottom: changeNavOnScroll && 0,
        }}
        className={
          white && !invert && !changeNavOnScroll
            ? classes.whiteNav + navClasses
            : navClasses
        }
      >
        <a className={classes.navBtn} href={DRIVE}>
          <span>download cv</span>
          <GrDocumentDownload />
        </a>
        <motion.div className={classes.burger} onClick={toggleNavigation}>
          <span
            className={
              showNavigation ? classes.burger__top_on : classes.burger__top_off
            }
          ></span>
          <span
            className={
              showNavigation
                ? classes.burger__bottom_on
                : classes.burger__bottom_off
            }
          ></span>
        </motion.div>
        <button
          className={classes.navBtn}
          onClick={() => showContactModalUpdater(true)}
        >
          <span>contact</span>
          <EmailIcon color={white && !invert && !changeNavOnScroll && "#fff"} />
        </button>
      </nav>

      <AnimatePresence>
        {showNavigation && (
          <Navigation
            invert={invert}
            white={white && !changeNavOnScroll}
            showNavigationUpdater={showNavigationUpdater}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
