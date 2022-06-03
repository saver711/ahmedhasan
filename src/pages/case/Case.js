/////////// IMPORTS
///
import classes from "./Case.module.css"
import { Helmet } from "react-helmet"
import { useNavigate, useParams } from "react-router-dom"
import {  useEffect, useState } from "react"
import { MainBtn } from "../../components/Ui/mainBtn/MainBtn"
import { CaseColor } from "./CaseColor"
import { CaseTechnology } from "./CaseTechnology"
import { Step } from "./Step"
import { BiLinkAlt } from "react-icons/bi"
import { BlurredCircle } from "../../components/Ui/blurredCircle/BlurredCircle"
import { CornerBtn } from "../../components/Ui/cornerBtn/CornerBtn"
import { motion } from "framer-motion"
// import {
//   comeFromBottom,
//   comeFromLeft,
//   comeFromRight,
// } from "../../helpers/animations"

///
/////////// HELPER VARIABLES & FUNCTIONS
///
const cases = [
  {
    id: "portfolio2022",
    title: `my 2022<br/>portfolio`,
    type: "web",
    link: " https://saver711.github.io/ahmedhasan",
    subtitle: "A new portfolio, a new learning journey.",
    img: require("../../assets/imgs/work/portfolio2022.png"),
    role: "Front end development",
    context: "representative portfolio",
    duration: "less than 2 Weeks",
    colors: ["#9CFFD1", "#2EFF9D", "#00C267", "#AFAFAF", "#565656", "#333333"],
    technologies: [
      { name: "html", color: "#E2E2E2" },
      { name: "scss", color: "#E2E2E2" },
      { name: "javascript", color: "#F5DE19" },
      { name: "react", color: "#00D8FF" },
    ],
    mindMap: require("../../assets/imgs/work/mindmap.png"),
    preparationSteps: [
      {
        title: "At first, it always comes to PEN & PAPER.",
        img: require("../../assets/imgs/work/preparation.webp"),
      },
      {
        title: "Figma’s Magic",
        img: require("../../assets/imgs/work/portfolio2022Figma.webp"),
      },
    ],
    // innerText: "",
    story: {
      text: [
        {
          hasHover: true,
          innerText: [
            {
              val: "Since ",
            },
            {
              val: "the client is me😄",
              hoverArea: true,
              hoverImg: require("../../assets/imgs/work/yawnface.gif"),
            },
            {
              val: ",  i have a story for u all.",
            },
          ],
        },

        {
          innerText: "What is so special about this primary color?!",
          bold: true,
        },
        {
          innerText:
            "Since i was a kid at Primary School, i have always loved this one special color.",
        },
        {
          innerText: "I have been using it to color literally everything “”.",
        },
        {
          innerText:
            "So, why not using my special color to colorize my special portfolio!.",
        },
      ],
      img: require("../../assets/imgs/work/story.png"),
    },
    inspirations: [
      { name: "richard ekwonye", link: "https://www.richardekwonye.com/" },
      { name: "legworkstudio", link: "https://www.legworkstudio.com" },
      { name: "dylan-b", link: "https://www.dylan-b.com" },
      {
        name: "Gil Huybrecht",
        link: "https://www.gilhuybrecht.com/about.html",
      },
    ],
  },
  //   {
  //     id: "portfolio2020",
  //   },
]

const rotateInViewRight = {
  start: {
    rotate: "45deg",
    opacity: 0,
    transformOrigin: "0% 100%",
  },
  end: {
    rotate: "0deg",
    opacity: 1,
    transformOrigin: "0% 100%",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 40,
      bounce: 0.3,
    },
  },
}

const rotateInViewLeft = {
  start: {
    rotate: "-45deg",
    opacity: 0,
    transformOrigin: "100% 100%",
  },
  end: {
    rotate: "0deg",
    opacity: 1,
    transformOrigin: "100% 100%",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 40,
      bounce: 0.3,
    },
  },
}
///
export const Case = ({ changeNavOnScrollUpdater }) => {
  /////////// VARIABLES
  ///
  const { id } = useParams()
  ///
  /////////// CUSTOM HOOKS
  ///
  const navigate = useNavigate()
  ///
  /////////// STATES
  ///
  // const [height, setHeight] = useState(0)

  // const headerRef = useCallback((node) => {
  //   if (node !== null) {
  //     setHeight(node.getBoundingClientRect().height)
  //   }
  // }, [])

  const [theCase, theCaseUpdater] = useState(false)
  ///
  /////////// SIDE EFFECTS
  ///
  useEffect(() => {
    navigateFun()
  }, [])

  // useEffect(() => {
  //   window.addEventListener("scroll", (e) =>
  //     window.scrollY > height
  //       ? changeNavOnScrollUpdater(true)
  //       : changeNavOnScrollUpdater(false)
  //   )
  // }, [])

  useEffect(() => {
    const listenForScroll = (e) => {
      if (window.scrollY > 528) {
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
  const navigateFun = () => {
    const zz = cases.find((item) => item.id === id)
    !zz && navigate("/ahmedhassan/work", { replace: true })
    zz && theCaseUpdater(zz)
  }

  ///
  return (
    <>
      <Helmet>
        <title>{`Ahmed Hasan | ${id}`}</title>
      </Helmet>
      {theCase && (
        <main className={`${classes.theCase}`}>
          <header
            // ref={headerRef}
            style={{ backgroundImage: `url(${theCase.img})` }}
            className={`overlay paddTB_35 ${classes.theCase__back}`}
          >
            <div className="container">
              <div>
                <p className={`${classes.theCase__title}`}>
                  {theCase.title.split("<br/>")[0]}
                  <br />
                  {theCase.title.split("<br/>")[1]}
                </p>
                <p className={`${classes.theCase__subtitle}`}>
                  {theCase.subtitle}
                </p>

                <a
                  href={theCase.link}
                  target="_blank"
                  className={`${classes.theCase__link}`}
                >
                  <MainBtn
                    white
                    text={
                      theCase.type === "web" ? "visite site" : "download app"
                    }
                  />
                </a>
              </div>
            </div>
          </header>

          <div className="container">
            <div className="relative">
              <section className={`paddTB_35 ${classes.props}`}>
                <div className={`${classes.props__top}`}>
                  <p>
                    role: <span>{theCase.role}</span>
                  </p>
                  <p>
                    context: <span>{theCase.context}</span>
                  </p>
                  <p>
                    duration: <span>{theCase.duration}</span>
                  </p>
                </div>

                <div className={`${classes.props__colors}`}>
                  {theCase.colors?.map((color) => (
                    <CaseColor key={color} color={color} />
                  ))}
                </div>

                <div className={`${classes.props__technologies}`}>
                  {theCase.technologies?.map((tech, i) => (
                    <CaseTechnology
                      key={i}
                      tech={tech.name}
                      color={tech.color}
                    />
                  ))}
                </div>
              </section>

              <section className={`paddTB_35 ${classes.mindset}`}>
                <h2 className="circularHeading">mindset</h2>
                <motion.img
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 40,
                    bounce: 0.3,
                  }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  src={theCase.mindMap}
                  alt="mindset photo"
                />
              </section>

              <section className={`paddTB_35 ${classes.preparation}`}>
                <h2 className="circularHeading">preparation</h2>
                <div className={`${classes.steps}`}>
                  {theCase.preparationSteps?.map((prep, i) => (
                    <Step
                      key={i}
                      title={prep.title}
                      img={prep.img}
                      index={i + 1}
                    />
                  ))}
                </div>
              </section>

              {theCase.story && (
                <section className={`paddTB_35 ${classes.story}`}>
                  <h2 className="circularHeading">story time</h2>
                  <motion.div
                    variants={rotateInViewLeft}
                    viewport={{ once: true }}
                    initial="start"
                    whileInView="end"
                    className={`${classes.story__content}`}
                  >
                    <div className={`${classes.story__text}`}>
                      {theCase.story.text?.map((par, i) =>
                        par.hasHover ? (
                          <p
                            key={i}
                            className={par.bold && classes.story__bold}
                          >
                            {par.innerText?.map((inner, i) =>
                              inner.hoverArea ? (
                                <span key={i}>
                                  {inner.val}
                                  <img src={inner.hoverImg} alt="" />
                                </span>
                              ) : (
                                inner.val
                              )
                            )}
                          </p>
                        ) : (
                          <p
                            key={i}
                            className={par.bold && classes.story__bold}
                          >
                            {par.innerText}
                          </p>
                        )
                      )}
                    </div>

                    <div className={`${classes.story__img}`}>
                      <motion.img
                        variants={rotateInViewRight}
                        viewport={{ once: true }}
                        initial="start"
                        whileInView="end"
                        src={theCase.story.img}
                        alt="story photo"
                      />
                    </div>
                  </motion.div>
                </section>
              )}

              <section className={`paddTB_35 ${classes.inspirations}`}>
                <h2 className="circularHeading">inspiration credits</h2>
                <div className={`${classes.inspirations__content}`}>
                  {theCase.inspirations?.map((ins, i) => (
                    <a target="_blank" key={i} href={ins.link}>
                      <BiLinkAlt />
                      {ins.name}
                    </a>
                  ))}
                </div>
              </section>
              <BlurredCircle position="bottomRight" />
              <CornerBtn text="about" />
            </div>
          </div>
        </main>
      )}
    </>
  )
}
