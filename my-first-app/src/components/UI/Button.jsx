import './Button.css'
import PropTypes from 'prop-types';

export const Button = ({ text }) => <button className="Button">{text}</button>;

Button.propTypes = {
    text: PropTypes.string
};