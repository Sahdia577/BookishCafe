import './Button.css'
import PropTypes from 'prop-types';

export const Button = ({ text, clickFn }) => (
    <button className="Button" onClick={clickFn}>
        {text}
    </button>  
);
    


Button.propTypes = {
    text: PropTypes.string,
    clickFn: PropTypes.func
};