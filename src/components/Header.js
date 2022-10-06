import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
        {title}
    </header>
  )
}

Header.defaultProps = {
    title: "TITLE"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header