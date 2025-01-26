function TextField({label, name , value, onChange})
{
    return(
        <div>
            <label htmlFor={name} className="mb-2 block">{label} :</label>
            <input id={name} name={name} value={value} onChange={onChange} type="text"  className="textField__input" autoComplete="off"/>
        </div>
    )
}

export default TextField;