const Input = ({ name, type, value, placeholder, onChange }) => {
    return (
        <input className="my-1 p-2 border border-white rounded  focus:bg-primary focus:text-white focus:outline-none" type={ type } name={ name } value={ value } onChange={ onChange } placeholder={ placeholder } />
    )
}

export default Input