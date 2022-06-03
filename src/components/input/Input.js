/////////// IMPORTS
///
import { ErrorMessage, useField } from "formik"
import { MdEmail } from "react-icons/md"
import { BsPersonFill } from "react-icons/bs"
///
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Input = ({ placeholder, ...props }) => {
  /////////// VARIABLES
  ///
 const [field, meta] = useField(props)
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
    <div className={`input_wrap`}>
      <label htmlFor={props.id}>
        {props.label}
        <span>*</span>
      </label>
      <div className={`inputAndIcon`}>
        <div className={`inputAndIcon__icon`}>
          {field.name === "name" ? <BsPersonFill /> : <MdEmail />}
        </div>
        <input
          className={`${meta.touched && meta.error && "input_error"}`}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      </div>

      <ErrorMessage className="error" component="p" name={field.name} />
    </div>
  )
}