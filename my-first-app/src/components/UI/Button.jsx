import PropTypes from 'prop-types';
import { Button as CButton } from '@chakra-ui/react'

export const Button = ({ onClick, ...props }) => (
    <CButton onClick={onClick} {...props}>
        {props.children}
    </CButton>  
);
    
Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.children
};