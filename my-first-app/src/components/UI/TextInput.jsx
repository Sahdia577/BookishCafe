import './TextInput.css';
import PropTypes from 'prop-types';

export const TextInput = ({ changeFn }) => {
    return <input className="input" onChange={changeFn}></input>;
};


TextInput.propTypes = {
    changeFn: PropTypes.func,
};