import PropTypes from 'prop-types';
import { Button as CButton } from '@chakra-ui/react'

export const Button = ({ clickFn, ...props }) => (
    <CButton
        onClick={clickFn}
        w={200}
        bg='green.600'
        color='white'
    >
        Change selection
        {props.children}
    </CButton>  
);
    

Button.propTypes = {
    text: PropTypes.string,
    clickFn: PropTypes.func,
    children: PropTypes.children
};