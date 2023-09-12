export default function Radio(props) {
    const { handleRadioChange } = props;
    const { radioOptions, label, labelValue, labelClassName, field } = props.fields;

    return (
        <>
            {
                label ? <label className={labelClassName} >{labelValue}</label> : null
            }
            {
                radioOptions.map((radio, index) => {
                    const { name, className, label, id, value } = radio;
                    return (
                    <label  key={id}>
                        <input type="radio" checked={value} name={name} className={className} onChange={(e) => handleRadioChange(e, field, index)}  /> 
                        {label}
                    </label>
                    )
                })
            }
        </>
    );
};
