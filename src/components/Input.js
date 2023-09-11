export default function Input(props) {
    const { onChange } = props;
    const { className, placeholder, label, labelValue, labelClassName, values, field } = props.fields;

    console.log('props', props.fields)

    return (
        <>
            {
                label ? <label className={labelClassName} >{labelValue}</label> : null
            }
            <input type="text" value={values} onChange={(e) => onChange(e, field)} className={className} placeholder={placeholder} />
        </>
    )
};
