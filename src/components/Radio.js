export default function Radio(props) {
    const { radioOptions, label, labelValue, labelClassName } = props.fields;

    const onChange = index => {
        radioOptions[index].value = !radioOptions[index].value 
    };

    return (
        <>
            {
                label ? <label className={labelClassName} >{labelValue}</label> : null
            }
            {
                radioOptions.map((radio, index) => {
                    const { name, className, label, id } = radio;
                    return (
                    <label  key={id}>
                        <input type="radio" name={name} className={className} onChange={onChange(index)} /> 
                        {label}
                    </label>
                    )
                })
            }
        </>
    );
};
