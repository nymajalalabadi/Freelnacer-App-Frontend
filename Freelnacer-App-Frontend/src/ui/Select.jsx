

function Select({ value, onChange, options}) {
  return (
    <select value={ value } onChange={ onChange } className="textField__input py-2 text-xs bg-secondary-0">
      {
        options.map((option) => (
          <option key={ option.value } value={ option.value }>
            { option.label }
          </option>
        ))
      }
    </select>
  )
}

export default Select
