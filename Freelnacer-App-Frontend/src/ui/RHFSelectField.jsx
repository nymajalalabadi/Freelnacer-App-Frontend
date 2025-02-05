
function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
        <label htmlFor={name} className="text-secondary-700 block mb-2">{label} {required && <span className="text-error">*</span>}</label>
        <select {...register(name)} id={name} className="textField_input">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
  )
}

export default RHFSelect
