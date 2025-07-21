import PropTypes from 'prop-types'
import * as styles from './Button.module.css'

const Button = (props) => (
  <a className={styles.button} {...props}>
    {props.children}
  </a>
)

Button.propTypes = {
  children: PropTypes.node
}

export default Button
