import { PropTypes } from "prop-types";

export const InputForm = ({label,name,onChange,value}) => {
  
  return (
    <div>
      <label htmlFor={label}>{name}</label>
      
    </div>
  )
}

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};