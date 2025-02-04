function TextField({label, name , register, validationSchema, errors, type = "text", required })
{
    return(
        <div>
            <label htmlFor={name} className="mb-2 block text-secondary-700">{label} {required && <span className="text-error">*</span>}</label>
            <input id={name} {...register(name, validationSchema)} type={type}  className="textField__input" autoComplete="off"/>
            {errors && errors[name] && <span className="mt-2 text-error block text-sm">{errors[name]?.message}</span>}
        </div>
    )
}

export default TextField;
