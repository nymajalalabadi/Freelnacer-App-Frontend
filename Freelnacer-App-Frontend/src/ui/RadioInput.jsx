
function RadioInput({label, id, name, value, onChange, checked}) {
  return (
    <div className="flex items-center gap-x-8 text-secondary-600">
        <inpu className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900 focus:ring-1" 
        type="radio"
        name={name} 
        id={id} 
        value={value} 
        onChange={onChange}
        checked={checked}
        />
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioInput
