/////////// IMPORTS
///
import classes from "./Work.module.css"
import { CgArrowLongDown } from "react-icons/cg"
import { Helmet } from "react-helmet"
import Typed from "react-typed"
import React, { useEffect, useState } from "react"
import { MainBtn } from "../../components/Ui/mainBtn/MainBtn"
import { AnimatePresence, motion } from "framer-motion"
import {
  leaveTarget,
  moveInTarget,
} from "../../helpers/functions/mouseMovement"
import { comeFromBottomRight } from "../../helpers/animations"
import { Fan } from "../../assets/svgs/SiteSvgs"

///
/////////// HELPER VARIABLES & FUNCTIONS
///

const allWork = [
  {
    id: "portfolio2022",
    title: `my latest<br/>project/case study`,
    type: "web",
    subtitle: "My 2022 portfolio",
    // img: require(`../../assets/imgs/work/portfolio2022.png`),
    img: require("../../assets/imgs/work/portfolio2022.png"),
  },
  {
    type: "web",
    id: "facebookClone",
    title: "facebook clone",
    subtitle: "The best approach to master REACT",
    link: "https://facebook711.herokuapp.com/",
    img: require("../../assets/imgs/work/clone.webp"),
  },
  {
    type: "web",
    id: "setbeet",
    title: "set beet",
    subtitle: "food recipes & women related topics",
    link: "https://setbeet.com/",
    img: require("../../assets/imgs/work/setbeet.webp"),
  },
  {
    type: "web",
    id: "pawsitive",
    title: "pawsitive",
    subtitle: "pets compassionate and nurturing care",
    link: "https://saver711.github.io/pawsitive/",
    img: require("../../assets/imgs/work/pawsitive.webp"),
  },

  {
    type: "app",
    id: "engez",
    title: "engez diary",
    subtitle: "App for daily goals",
    link: "https://play.google.com/store/apps/details?id=mobi.anjez.anjez",
    img: require("../../assets/imgs/work/engez.webp"),
  },
  {
    type: "web",
    id: "crimson",
    title: "crimson",
    subtitle: "my 2020 portfolio",
    link: "https://saver711.github.io/crimson/",
    img: require("../../assets/imgs/work/crimson.webp"),
  },
  {
    type: "app",
    id: "dawaraty",
    title: "dawaraty",
    subtitle: "Udemy-like app",
    link: "https://play.google.com/store/apps/details?id=com.dawaraty.app",
    img: require("../../assets/imgs/work/dawaraty.webp"),
  },
]

export const scrollDownVariants = {
  start: {
    opacity: 0,
    y: "100vh",
    x: "-50%",
  },
  end: {
    opacity: 1,
    y: 0,
    x: "-50%",
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
}

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
    transform: "none",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
    },
  },
}

///
export const Work = ({ title }) => {
  /////////// VARIABLES
  ///
  //   const scrollY = useViewportScroll(0)
  //   const theTransform = useTransform(
  //     scrollY[0],
  //     [0, 12],
  //     ["calc(0% - 0px)", "calc(100% - 40px)"]
  //   )

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///
  const [scrollToTop, scrollToTopUpdater] = useState(false)

  ///
  /////////// SIDE EFFECTS
  ///
  useEffect(() => {
    const listenForScroll = (e) => {
      if (window.scrollY > window.innerHeight) {
        scrollToTopUpdater(true)
      } else {
        scrollToTopUpdater(false)
      }
    }
    window.addEventListener("scroll", listenForScroll)

    return () => {
      window.removeEventListener("scroll", listenForScroll)
      scrollToTopUpdater(false)
    }
  }, [])

  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///
  const scrollDownHandler = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  ///
  /////////// FUNCTIONS
  ///

  ///
  ///

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className={`${classes.works}`}>
        <section
          style={{ backgroundImage: `url(${allWork[0].img})` }}
          className={`${classes.top} overlay`}
        >
          <div className={`container ${classes.works__padd}`}>
            <motion.div variants={leftVariants} initial="start" animate="end">
              <motion.p variants={childVariants} className={`${classes.title}`}>
                {allWork[0].title.split("<br/>")[0]}
                <br />
                {allWork[0].title.split("<br/>")[1]}
              </motion.p>
              <motion.p
                variants={childVariants}
                className={`${classes.subtitle}`}
              >
                {allWork[0].subtitle}
              </motion.p>

              <motion.div variants={childVariants}>
                <MainBtn white where={allWork[0].id} text="take a look" />
              </motion.div>
            </motion.div>
            <motion.div
              className={`${classes.scrollDown}`}
              variants={scrollDownVariants}
              initial="start"
              animate="end"
              onClick={scrollDownHandler}
            >
              <div
                className={`mouseMove`}
                onMouseMove={(e) => moveInTarget(e)}
                onMouseLeave={(e) => leaveTarget(e)}
              >
                <Typed
                  strings={["SELECTED WORK"]}
                  typeSpeed={90}
                  backSpeed={100}
                  loop
                  cursorChar=""
                />

                <i className={`${classes.scrollDown__arrow}`}>
                  <CgArrowLongDown />
                </i>
              </div>
            </motion.div>
          </div>
        </section>

        <main className={`${classes.cont}`}>
          {allWork.slice(1).map((work, i) => (
            <section
              key={work.id}
              style={{ backgroundImage: `url(${work.img})` }}
              className={`${classes.item} overlay`}
            >
              <div className={`container centerFlex ${classes.works__padd}`}>
                <div className={`centerFlex`}>
                  <a
                    target="_blank"
                    href={work.link}
                    className={`centerFlex mouseMove ${classes.circle}`}
                    onMouseMove={(e) => moveInTarget(e)}
                    onMouseLeave={(e) => leaveTarget(e)}
                  >
                    <div>
                      <p className={`${classes.title}`}>{work.title}</p>
                      <p className={`${classes.subtitle}`}>{work.subtitle}</p>
                    </div>
                  </a>

                  <a
                    target="_blank"
                    className={`${classes.visitSite}`}
                    href={work.link}
                  >
                    <MainBtn
                      white
                      text={work.type === "web" ? "visit site" : "download app"}
                    />
                  </a>
                </div>
              </div>
            </section>
          ))}
        </main>

        {/* <div
          className={`${classes.fan}`}
        >
          <Fan />
        </div> */}

        <AnimatePresence>
          {scrollToTop && (
            <motion.div
              variants={comeFromBottomRight}
              initial="start"
              animate="end"
              exit="start"
              className={`${classes.works__scrollTop} mouseMove`}
              onMouseMove={(e) => moveInTarget(e)}
              onMouseLeave={(e) => leaveTarget(e)}
              onClick={scrollTopHandler}
            >
              <MainBtn white={true} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

/* 

*/
