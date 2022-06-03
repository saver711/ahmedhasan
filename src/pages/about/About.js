/////////// IMPORTS
///
import classes from "./About.module.css"
import { Helmet } from "react-helmet"
import { useEffect } from "react"
import { BlurredCircle } from "../../components/Ui/blurredCircle/BlurredCircle"
import { CornerBtn } from "../../components/Ui/cornerBtn/CornerBtn"
import Typed from "react-typed"
import {
  Graduation,
  Implementation,
  Interface,
  VsCode,
} from "../../assets/svgs/SiteSvgs"
import { motion } from "framer-motion"

///
/////////// HELPER VARIABLES & FUNCTIONS
///
const bounceIn = {
  hidden: { opacity: 0, scale: 0, y: -200 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 40,
      bounce: 0.3,
    },
  },
}
const bounceIn2 = {
  hidden: { opacity: 0, scale: 0, y: "-50%" },
  visible: {
    opacity: 1,
    scale: 1,
    y: '-50%',
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 40,
      bounce: 0.3,
    },
  },
}
const bounceFromRight = {
  start: { opacity: 0, scale: 0, x: 200, y: '-50%' },
  end: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: '-50%',
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 40,
      bounce: 0.3,
    },
  },
}

///
export const About = ({ title, changeNavOnScrollUpdater }) => {
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
  useEffect(() => {
    const listenForScroll = (e) => {
      if (window.scrollY > 70) {
        changeNavOnScrollUpdater(true)
      } else {
        changeNavOnScrollUpdater(false)
      }
    }
    window.addEventListener("scroll", listenForScroll)

    return () => {
      window.removeEventListener("scroll", listenForScroll)
      changeNavOnScrollUpdater(false)
    }
  }, [])
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
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container paddT_65">
        <div className={classes.about}>
          <motion.h2
            initial="hidden"
            animate="visible"
            // viewport={{ once: true }}
            variants={bounceIn}
            className="heading heading_right heading_big"
          >
            <span>
              delighted
              <br />
              to meet you
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.7,
              type: "spring",
              stiffness: 40,
              bounce: 0.3,
            }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${classes.hobbies}`}
          >
            minimalism, precision,
            <br />
            music, sea food & pasta
          </motion.p>

          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.7,
              type: "spring",
              stiffness: 40,
              bounce: 0.3,
            }}
            variants={{
              hidden: { opacity: 0, x: -250 },
              visible: { opacity: 1, x: 0 },
            }}
            className={classes.about__photo}
            src={require("../../assets/imgs/about photo.jpg")}
            alt="about photo"
          />

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bounceIn}
            className="heading heading_left heading_small"
          >
            <span>
              a journey of curiosity
              <br />
              and explorations
            </span>
          </motion.h2>

          <section className={`${classes.content}`}>
            <div className={`${classes.content__left}`}>
              <h2>
                i offer what
                <Typed
                  strings={["..."]}
                  typeSpeed={90}
                  backSpeed={100}
                  loop
                  cursorChar=""
                />
              </h2>

              <div className={`${classes.content__piece}`}>
                <h3>
                  user interfaces<span>01</span>
                </h3>
                <p>
                  UI technologies are so important it can be used in many places
                  where the digital technologies present like Computer, Mobile,
                  Phones, Cars, Music players, etc. that's why I have serious
                  passion for UI effects.
                </p>
                <motion.i
                  variants={bounceIn2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`${classes.content__icon}`}
                >
                  <Interface />
                </motion.i>
              </div>
              <div className={`${classes.content__piece}`}>
                <h3>
                  Web Coding<span>02</span>
                </h3>
                <p>
                  Web Coding can range from developing a simple single static
                  page of plain text to complex web-based internet applications.
                  so, using Html, Css and JavaScript i can convert your thoughts
                  into web applications.
                </p>
                <motion.i
                  variants={bounceIn2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`${classes.content__icon}`}
                >
                  <VsCode />
                </motion.i>
              </div>
              <div className={`${classes.content__piece}`}>
                <h3>
                  Creative Implementation<span>03</span>
                </h3>
                <p>
                  It is all about putting creativity to work.
                  <br />
                  Ideas are useless unless used. The proof of their value is
                  their implementation. Until then they are in limbo.
                </p>
                <motion.i
                  variants={bounceIn2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`${classes.content__icon}`}
                >
                  <Implementation />
                </motion.i>
              </div>
            </div>
            <div className={`${classes.content__right}`}>
              <div className={`${classes.who}`}>
                <p>
                  I'm a Front-end developer with years of experience in building
                  products and appealing web experiences. I've collaborated with
                  individuals and teams to build experiences for their ideas.
                </p>
                <p>
                  I have serious passion for UI effects, animations and creating
                  intuitive, dynamic user experiences.
                </p>
                <p>
                  Each project is a new opportunity to learn new concepts across
                  multiple domains.
                </p>
              </div>

              <div className={`${classes.circles}`}>
                <div className={`centerFlex ${classes.circle}`}>
                  <span className={`centerFlex`}>
                    <i>
                      <img src={require("../../assets/imgs/age.png")} alt="" />
                    </i>
                  </span>
                  23
                  <br />
                  Years Old
                </div>
                <div className={`centerFlex ${classes.circle}`}>
                  <span className={`centerFlex`}>
                    <i>
                      <Graduation />
                    </i>
                  </span>
                  Mansoura university
                  <br />
                  Faculty of Arts
                  <br />
                  Geography department.
                </div>
              </div>

              <div className={`${classes.values}`}>
                <p>keep it simple.</p>
                <p>healthy mindset.</p>
                <p>always updated.</p>
                <p>always learning.</p>
              </div>
            </div>
          </section>

          {/*  */}

          <BlurredCircle position="topLeft" />
          <BlurredCircle position="bottomRight" />
          <CornerBtn text="skills" />
        </div>

        <img
          className={classes.bigImg}
          src={require("../../assets/imgs/headphone.png")}
          alt="headphone photo"
        />
      </div>
    </>
  )
}
