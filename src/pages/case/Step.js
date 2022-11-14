/////////// IMPORTS
///
import classes from './Case.module.css'
///
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Step = ({title, img, index})=>{
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
  <div className={`${classes.step}`}>
    <p className="numericHeading">
        {title}
      <span>{'0'+index}</span>
    </p>
    <img src={img} alt="preparation photo" />
  </div>
)
}