/////////// IMPORTS
///
import classes from "./Skills.module.css"
import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"
import { BlurredCircle } from "../../components/Ui/blurredCircle/BlurredCircle"
import { CornerBtn } from "../../components/Ui/cornerBtn/CornerBtn"
import { SpaceShip } from "../../assets/svgs/SiteSvgs"
import { motion } from "framer-motion"
import {comeFromBottom, comeFromLeft, comeFromRight} from '../../helpers/animations'
///
/////////// HELPER VARIABLES & FUNCTIONS
///
const skills = {
  done: [
    {
      name: "html",
      img: require("../../assets/imgs/skills/html.png"),
      content:
        "HTML, or HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. However, it’s worth noting that HTML is not considered a programming language as it can’t create dynamic functionality.",
    },
    {
      name: "css",
      img: require("../../assets/imgs/skills/css.png"),
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    },
    {
      name: "scss",
      img: require("../../assets/imgs/skills/scss.png"),
      content:
        "Sassy Cascading Style Sheets is a preprocessor which lets you use features that aren’t a part of the wider CSS standard yet, and provides better workflows for maintaining your stylesheets.",
    },
    {
      name: "bootstrap",
      img: require("../../assets/imgs/skills/bootstrap.png"),
      content:
        "Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website.",
    },
    {
      name: "javascript",
      img: require("../../assets/imgs/skills/js.png"),
      content:
        "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
    },
    {
      name: "jquery",
      img: require("../../assets/imgs/skills/jquery.png"),
      content:
        "jQuery is a lightweight, write less, do more, JavaScript library. The purpose of jQuery is to make it  much easier to use JavaScript on your website.",
    },
    {
      name: "react",
      img: require("../../assets/imgs/skills/react.png"),
      content: `React is a declarative, efficient, and flexible JavaScript library for building user interfaces or UI components. It lets you compose complex UIs from small and isolated pieces of code called "components".`,
    },
    {
      name: "redux",
      img: require("../../assets/imgs/skills/redux.png"),
      content: `Redux is A Predictable, Centralized, Debuggable and Flexible State Container for JS Apps.`,
    },
    {
      name: "styled components",
      img: require("../../assets/imgs/skills/styled.png"),
      content: `Styled-components is a popular library that is used to style React applications. It allows you to build custom components by writing actual CSS in your JavaScript.`,
    },
    {
      name: "framer motion",
      img: require("../../assets/imgs/skills/motion.png"),
      content: `A production-ready motion library for React, it is an animation library that makes creating animations easy. Its simplified API helps us abstract the complexities behind animations and allows us to create animations with ease.`,
    },
    {
      name: "ionic",
      img: require("../../assets/imgs/skills/ionic.png"),
      content: `Ionic is An open source mobile toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web.`,
    },
    {
      name: "figma",
      img: require("../../assets/imgs/skills/figma.png"),
      content: `Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.`,
    },
  ],
  coming: [
    {
      name: "nextjs",
      // img: require("../../assets/imgs/skills/nextjs.gif"),
      content: `Nextjs: which is a flexible React framework that gives you building blocks to create fast web applications, it enables React based web applications functionalities such as server-side 
rendering and generating static websites.`,
    },
    {
      name: "threejs",
      // img: require("../../assets/imgs/skills/threejs.gif"),
      content:
        "Threejs: which is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.",
    },
  ],
}
let timer
///
export const Skills = ({ title, changeNavOnScrollUpdater }) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///
  const [skill, skillUpdater] = useState({
    name: "What am i learning next.?",
    content: skills.coming.map(
      (item, i) => `(${i + 1})_` + item.content + "<br/>"
    ),
  })
  ///
  /////////// SIDE EFFECTS
  ///
  useEffect(() => {
    const listenForScroll = (e) => {
      if (window.scrollY > 50) {
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

  const boxesMoveHandler = (e) => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const mouseX = e.pageX
      const mouseY = e.pageY
      const els = e.target.closest(".boxes").children

      Array.from(els).forEach((sqr) => {
        const sqrX = sqr.offsetLeft + 20
        const sqrY = sqr.offsetTop + 20

        const diffX = mouseX - sqrX
        const diffY = mouseY - sqrY

        const radians = Math.atan2(diffY, diffX)

        const angle = (radians * 180) / Math.PI

        sqr.style.transform = `rotate(${angle}deg)`
      })
    }
  }

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container fullHeight paddT_65">
        <main className={`${classes.skills}`}>
          <motion.div
            variants={comeFromLeft}
            initial="start"
            animate="end"
            className={`${classes.skills__top}`}
          >
            <div className={`${classes.skills__title}`}>
              <span>there are no</span>
              <span data-text="limits" className={`${classes.limits}`}>
                <p>Limits</p>
              </span>
            </div>
          </motion.div>
          <div className={` ${classes.skills__bottom}`}>
            <motion.div
              variants={comeFromBottom}
              initial="start"
              animate="end"
              className={`${classes.detail}`}
            >
              <h5 className={`${classes.detail__name}`}>{skill.name}</h5>
              {String(skill.content)
                .slice(0, -5)
                .split("<br/>,")
                .map((par, i) => (
                  <p key={i} className={`${classes.detail__txt}`}>
                    {par}
                  </p>
                ))}
            </motion.div>
            <motion.div
              variants={comeFromRight}
              initial="start"
              animate="end"
              onMouseMove={(e) => boxesMoveHandler(e)}
              onMouseLeave={(e) => {
                skillUpdater({
                  name: "What am i learning next.?",
                  content: skills.coming.map(
                    (item, i) => `(${i + 1})_` + item.content + "<br/>"
                  ),
                })
                Array.from(e.target.closest(".boxes").children).forEach(
                  (sqr) => {
                    sqr.style.transform = `rotate(0deg)`
                  }
                )
              }}
              className={`${classes.boxes} boxes`}
            >
              {skills.done.map((item, i) => (
                <div
                  tabIndex={i}
                  onMouseEnter={() => {
                    skillUpdater({
                      name: item.name,
                      content: item.content + '<br/>',
                    })
                    if (
                      !window.matchMedia("(hover: hover) and (pointer: fine)")
                        .matches
                    ) {
                      clearTimeout(timer)
                      timer = setTimeout(() => {
                        skillUpdater({
                          name: "What am i learning next.?",
                          content: skills.coming.map(
                            (item, i) => `(${i + 1})_` + item.content + "<br/>"
                          ),
                        })
                      }, 8000)
                    }
                  }}
                  className={`centerFlex ${classes.box}`}
                  key={i}
                >
                  <span className={`centerFlex`}>{item.name}</span>
                  <img src={item.img} alt="skill photo" />
                </div>
              ))}
            </motion.div>
          </div>
          <BlurredCircle position="topLeft" />
          <BlurredCircle position="bottomRight" />
          <CornerBtn text="work" />
        </main>

        <div className={`${classes.floatedIcon}`}>
          <SpaceShip />
        </div>
      </div>
    </>
  )
}
