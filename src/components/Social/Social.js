/////////// IMPORTS
///
import classes from './Social.module.css'
import { motion } from "framer-motion"

import { LinkedinIcon,GithubIcon,WhatsappIcon } from "../../assets/svgs/SiteSvgs"

///
/////////// HELPER VARIABLES & FUNCTIONS
///
const socialVariants = {
  start: {
    y: 300,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .1,
      duration: 1,
      type: "spring",
      stiffness: 50,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
}

const childVariants = {
  start: {
    y: 300,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
    },
  },
}
///
export const Social = ({whats, color, animate})=>{
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
  <motion.ul
    variants={animate && socialVariants}
    initial="start"
    animate="end"
    className={classes.icons}
  >
    {whats && (
      <motion.li variants={childVariants} className={classes.icon}>
        <a
          href="https://api.whatsapp.com/send?phone=201126183678"
          target="_blank"
        >
          <WhatsappIcon color={color || ""} />
        </a>
      </motion.li>
    )}
    <motion.li variants={childVariants} className={classes.icon}>
      <a href="https://www.linkedin.com/in/ahmedhasan711" target="_blank">
        <LinkedinIcon color={color || ""} />
      </a>
    </motion.li>
    <motion.li variants={childVariants} className={classes.icon}>
      <a href="https://github.com/saver711" target="_blank">
        <GithubIcon color={color || ""} />
      </a>
    </motion.li>
  </motion.ul>
)
}