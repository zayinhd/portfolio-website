const Button = ({ children, type, disabled, handleClick }) => {
    return (
        <button type={ type } disabled={ disabled } className='p-2 text-white bg-secondary rounded-lg dark:bg-white dark:text-primary hover:bg-primary' onClick={ handleClick }>{ children }</button>
    )
}

export default Button