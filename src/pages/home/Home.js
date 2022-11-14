/////////// IMPORTS
///
import classes from "./Home.module.css"
import { Helmet } from "react-helmet"
import { HeroImg } from "../../assets/svgs/HeroImg"
import { Social } from "../../components/Social/Social"
import { MainBtn } from "../../components/Ui/mainBtn/MainBtn"
import { CornerBtn } from "../../components/Ui/cornerBtn/CornerBtn"
import { BlurredCircle } from "../../components/Ui/blurredCircle/BlurredCircle"
import { motion } from "framer-motion"
import { MiniRocket, Rocket } from "../../assets/svgs/SiteSvgs"


///
/////////// HELPER VARIABLES & FUNCTIONS
///
const leftVariants = {
  start: {
    x: "-70vw",
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.5,
    },
  },
}

const childVariants = {
  start: {
    x: "-70vw",
    opacity: 0,
  },
  end: {
    x: 0,
    transform: 'none',
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
    },
  },
}

const rightVariants = {
  start: {
    x: "70vw",
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
      type: 'spring',
      stiffness: 50
    },
  },
}
///
export const Home = ({ title, showContactModalUpdater }) => {
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
  //

  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <div className="container fullHeight paddT_65">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={`${classes.home}`}>
        <motion.div
          variants={leftVariants}
          initial="start"
          animate="end"
          className={classes.home__left}
        >
          <motion.div variants={childVariants} className={classes.heroP}>
            how can{" "}
            <span className={classes.heroP__txt}>
              <div className={`${classes.heroP__gif}`}>
                <img src={require("../../assets/imgs/ingenuity.gif")} />
              </div>
              
              <span>ingenuity,</span>
            </span>{" "}
            <span className={classes.heroP__txt}>
              <div className={`${classes.heroP__gif}`}>

              <img src={require("../../assets/imgs/astuteness.gif")} />
              </div>
              <span>astuteness</span>
            </span>{" "}
            and{" "}
            <span className={classes.heroP__txt}>
              <div className={`${classes.heroP__gif}`}>

              <img src={require("../../assets/imgs/creativity.gif")} />
              </div>
              <span>creativity</span>
            </span>{" "}
            get your idea turned into code
          </motion.div>
          <motion.p variants={childVariants} className={classes.heroSub}>
            Hi, my name is Ahmed.
            <br />I am a Frontend developer based in Egypt.
          </motion.p>

          <motion.div
            variants={childVariants}
            className={`${classes.home__btn}`}
          >
            <MainBtn
              showContactModalUpdater={showContactModalUpdater}
              text="reach me out"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={rightVariants}
          initial="start"
          animate="end"
          className={classes.home__right}
        >
          <div className={classes.home__img}>
            <HeroImg />
          </div>
        </motion.div>
        <div className={`${classes.home__social}`}>
          <Social animate />
        </div>
        <CornerBtn text="work" />

          <BlurredCircle position='bottomRight' />
          <BlurredCircle position='topLeft' />

        {/* <div className={`${classes.rocket} ${classes.bigRocket}`}>
          <Rocket />
        </div> */}
        <div className={`${classes.rocket} ${classes.miniRocket}`}>
          <MiniRocket />
        </div>
      </div>
    </div>
  )
}
