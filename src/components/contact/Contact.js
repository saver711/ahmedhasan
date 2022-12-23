/////////// IMPORTS
///
import classes from "./Contact.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"
import * as Yup from "yup"
import { Input } from "../input/Input"
import emailjs from "emailjs-com"
import {VscCheckAll} from 'react-icons/vsc'
import { SiMinutemailer } from "react-icons/si"
import { GrClose } from "react-icons/gr"
import { leaveTarget, moveInTarget } from "../../helpers/functions/mouseMovement"
import { motion } from "framer-motion"
import { comeFromBottom } from "../../helpers/animations"
import { ContactRows } from "./ContactRows"
import {Social} from '../Social/Social'


///
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Contact = ({ showContactModalUpdater }) => {
  /////////// VARIABLES
  ///
  const button = useRef()
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("What is your full name?"),
    email: Yup.string().trim()
      .required("What is your email address?")
      .email("Email is not valid"),
    message: Yup.string().trim().required("Write a message for me!"),
  })
  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///
  const [disabled, disabledUpdater] = useState(false)
  const [formError, formErrorUpdater] = useState({
    show: false,
    text: "Something went wrong!, try again",
  })
  ///
  /////////// SIDE EFFECTS
  ///
  useEffect(() => {
    let time
    if (formError.show) {
      disabledUpdater(true)
      time = setTimeout(() => {
        disabledUpdater(false)
        formErrorUpdater((prev) => ({ ...prev, show: false }))
      }, 2000)
    }
    return () => clearTimeout(time)
  }, [formError.show])
  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///
  const handleSubmit = async ({ name, email, message }) => {
    try {
      disabledUpdater(true)
      const templateParams = {
        name,
        email,
        message,
      }

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      disabledUpdater(false)
      handleSendEmail()
      formErrorUpdater((prev) => ({ ...prev, show: false }))
    } catch (e) {
      formErrorUpdater((prev) => ({ ...prev, show: true }))
      disabledUpdater(false)
    }
  }

  ///
  /////////// FUNCTIONS
  ///

  const handleSendEmail = (e) => {
    let getVar = (variable) =>
      getComputedStyle(button.current).getPropertyValue(variable)
    if (!button.current.classList.contains("active")) {
      button.current.classList.add("active")

      gsap.to(button.current, {
        keyframes: [
          {
            "--left-wing-first-x": 50,
            "--left-wing-first-y": 100,
            "--right-wing-second-x": 50,
            "--right-wing-second-y": 100,
            duration: 0.2,
            onComplete() {
              gsap.set(button.current, {
                "--left-wing-first-y": 0,
                "--left-wing-second-x": 40,
                "--left-wing-second-y": 100,
                "--left-wing-third-x": 0,
                "--left-wing-third-y": 100,
                "--left-body-third-x": 40,
                "--right-wing-first-x": 50,
                "--right-wing-first-y": 0,
                "--right-wing-second-x": 60,
                "--right-wing-second-y": 100,
                "--right-wing-third-x": 100,
                "--right-wing-third-y": 100,
                "--right-body-third-x": 60,
              })
            },
          },
          {
            "--left-wing-third-x": 20,
            "--left-wing-third-y": 90,
            "--left-wing-second-y": 90,
            "--left-body-third-y": 90,
            "--right-wing-third-x": 80,
            "--right-wing-third-y": 90,
            "--right-body-third-y": 90,
            "--right-wing-second-y": 90,
            duration: 0.2,
          },
          {
            "--rotate": 50,
            "--left-wing-third-y": 95,
            "--left-wing-third-x": 27,
            "--right-body-third-x": 45,
            "--right-wing-second-x": 45,
            "--right-wing-third-x": 60,
            "--right-wing-third-y": 83,
            duration: 0.25,
          },
          {
            "--rotate": 55,
            "--plane-x": -8,
            "--plane-y": 24,
            duration: 0.2,
          },
          {
            "--rotate": 40,
            "--plane-x": 45,
            "--plane-y": -180,
            "--plane-opacity": 0,
            duration: 0.3,
            onComplete() {
              setTimeout(() => {
                button.current.removeAttribute("style")
                gsap.fromTo(
                  button.current,
                  {
                    opacity: 0,
                    y: -8,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: 0.3,
                    onComplete() {
                      button.current.classList.remove("active")
                    },
                  }
                )
              }, 2000)
            },
          },
        ],
      })

      gsap.to(button.current, {
        keyframes: [
          {
            "--text-opacity": 0,
            "--border-radius": 0,
            "--left-wing-background": getVar("--primary-darkest"),
            "--right-wing-background": getVar("--primary-darkest"),
            duration: 0.1,
          },
          {
            "--left-wing-background": getVar("--primary"),
            "--right-wing-background": getVar("--primary"),
            duration: 0.1,
          },
          {
            "--left-body-background": getVar("--primary-dark"),
            "--right-body-background": getVar("--primary-darkest"),
            duration: 0.4,
          },
          {
            "--success-opacity": 1,
            "--success-scale": 1,
            duration: 0.25,
            delay: 0.25,
          },
        ],
      })
    }
  }
  ///
  return (
    <motion.div
      className={classes.contact}
      variants={comeFromBottom}
      initial="start"
      animate="end"
      exit="start"
    >
      <div className={`${classes.contact__left}`}>
        <img src={require("../../assets/imgs/contactMan.png")} alt="contact styling photo" />
        <div className={`${classes.contact__heading}`}>
          <h2>get in touch</h2>
          <p>Fill out the form and i will get back to you ASAP.</p>
        </div>
        <div className={`${classes.contact__form}`}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form className={`${classes.contact__inputs}`}>
                  <Input
                    label="Full Name:"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="ex: Ahmed Hasan"
                  />

                  <Input
                    label="Email:"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ex: example@gmail.com"
                  />

                  <div className="input_wrap">
                    <label htmlFor="message">
                      Message:<span>*</span>
                    </label>
                    <div className={`inputAndIcon`}>
                      <div className={`inputAndIcon__icon`}>
                        <SiMinutemailer />
                      </div>
                      <Field
                        name="message"
                        as="textarea"
                        id="message"
                        placeholder="ex: Let's work together!"
                      />
                    </div>

                    <ErrorMessage
                      className="error"
                      component="p"
                      name="message"
                    />
                  </div>
                  <button
                    type="submit"
                    className={`contactSendBtn mouseMove ${classes.button}`}
                    ref={button}
                    disabled={disabled}
                    onMouseMove={(e) => moveInTarget(e)}
                    onMouseLeave={(e) => leaveTarget(e)}
                  >
                    <span className={`${classes.default}`}>Send</span>
                    <span
                      className={`${classes.success}`}
                      style={{ transform: "rotate(0deg)" }}
                    >
                      <VscCheckAll /> Sent
                    </span>
                    <div className={`${classes.left}`}></div>
                    <div className={`${classes.right}`}></div>
                  </button>
                  {formError.show && <p className="error">{formError.text}</p>}
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
      <div className={`${classes.contact__right}`}>
        <div className={`${classes.close}`}>
          <div
            onMouseMove={(e) => moveInTarget(e)}
            onMouseLeave={(e) => leaveTarget(e)}
            className={`centerFlex mouseMove ${classes.close__inner}`}
            onClick={() => showContactModalUpdater(false)}
          >
            <GrClose />
          </div>
        </div>
        <div className={`${classes.contact__heading}`}>
          <h2>contact info</h2>
          <p>Let’s level up your brand together.</p>
        </div>
        <ContactRows />

        <div className={`${classes.contact__social}`}>
          <Social whats color='var(--white-color)' />
        </div>
        <img src={require('../../assets/imgs/writingHand.png')} alt="contact styling photo 2" />
      </div>
    </motion.div>
  )
}
