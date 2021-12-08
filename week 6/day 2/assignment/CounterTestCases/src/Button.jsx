const Button = ({label, onClick,style}) => {
    return (
        <div>
            <button className={style} onClick={onClick} data-testid="button">{label}</button>
        </div>
    )
}

export default Button
