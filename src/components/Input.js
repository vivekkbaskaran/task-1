export default function Input(props) {
    const { onChange, showErrorMessage } = props;
    const { className, placeholder, label, labelValue, labelClassName, value, field, errorMessage, invalid } = props.fields;
    console.log('testing error msg', showErrorMessage)

    return (
        <>
            {
                label ? <label className={labelClassName} >{labelValue}</label> : null
            }
            <input type="text" value={value} name={field} onChange={(e) => onChange(e, field)} className={className} placeholder={placeholder} />
            {
                showErrorMessage && invalid ? <h1>{ errorMessage }</h1> : ''
            }
        </>
    )
};
