import PropTypes from 'prop-types';
import { Button as CButton } from '@chakra-ui/react'

export const Button = ({ clickFn, ...props }) => (
    <CButton onClick={clickFn} {...props}>
        {props.children}
    </CButton>  
);
    

Button.propTypes = {
    text: PropTypes.string,
    clickFn: PropTypes.func,
    children: PropTypes.children
};