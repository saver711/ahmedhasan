/////////// IMPORTS
///
import classes from './Contact.module.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { MdEmail } from "react-icons/md"

///
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const ContactRows = ({type})=>{
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
    <a href="tel:+201202016965" className={`${classes.contact__row}`}>
      <BsFillTelephoneFill />
      <p>+201202016965</p>
    </a>
    <a href="mailto:ahwork711@gmail.com" className={`${classes.contact__row}`}>
      <MdEmail />
      <p>ahwork711@gmail.com</p>
    </a>
  </>
)
}