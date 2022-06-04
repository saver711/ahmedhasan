/////////// IMPORTS
///
import classes from "./Navigation.module.css"
import { NavLink } from "react-router-dom"
import { AutoThemeIcon,DarkThemeIcon,LightThemeIcon } from "../../assets/svgs/SiteSvgs"
import { motion } from "framer-motion"
import { comeFromLeft, comeFromLeftWithChildren, fadeIn } from "../../helpers/animations"
///
/////////// HELPER VARIABLES & FUNCTIONS
///
const rest = ` top_65 notFullHeight ${classes.navigation}`
///
export const Navigation = ({ showNavigationUpdater, invert, white }) => {
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
      variants={fadeIn}
      initial="start"
      animate="end"
      exit="start"
      className={
        invert
          ? classes.yellowNavigation + rest
          : white
          ? classes.darkNav + rest
          : rest
      }
    >
      <div className="container">
        <div className={`${classes.navigation__content}`}>
          {/* <div className={`${classes.theme}`}>
            <div className={`centerFlex ${classes.theme__icon}`}>
              <LightThemeIcon />
            </div>
            <div className={`centerFlex ${classes.theme__icon}`}>
              <AutoThemeIcon />
            </div>
            <div className={`centerFlex ${classes.theme__icon}`}>
              <DarkThemeIcon />
            </div>
          </div> */}

          <motion.ul
            variants={comeFromLeftWithChildren}
            className={`${classes.navigation__list}`}
          >
            <motion.li
              variants={comeFromLeft}
              className={`${classes.navigation__item}`}
            >
              <NavLink
                onClick={() => showNavigationUpdater(false)}
                to="/"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                <span>01</span>
                Home
              </NavLink>
            </motion.li>
            <motion.li
              variants={comeFromLeft}
              className={`${classes.navigation__item}`}
            >
              <NavLink
                onClick={() => showNavigationUpdater(false)}
                to="/work"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                <span>02</span>
                Work
              </NavLink>
            </motion.li>
            <motion.li
              variants={comeFromLeft}
              className={`${classes.navigation__item}`}
            >
              <NavLink
                onClick={() => showNavigationUpdater(false)}
                to="/about"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                <span>03</span>
                About
              </NavLink>
            </motion.li>
            <motion.li
              variants={comeFromLeft}
              className={`${classes.navigation__item}`}
            >
              <NavLink
                onClick={() => showNavigationUpdater(false)}
                to="/skills"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                <span>04</span>
                Skills
              </NavLink>
            </motion.li>

            {/* <motion.li
              variants={comeFromLeft}
              className={`${classes.navigation__item}`}
            >
              <NavLink
                onClick={() => showNavigationUpdater(false)}
                to="/cases"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                <span>05</span>
                Cases
              </NavLink>
            </motion.li> */}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  )
}
