const Button = ( { text, color, onClick} ) => {
  return (
    <button onClick={onClick} style={{backgroundColor : color}} className='btn'>{text}</button>
  )
}

Button.defaultProps = {
    onClick : () => console.log('Button onClick no assigned!')
}

export default Button