import PropTypes from 'prop-types';
import { Input } from '@chakra-ui/react'

export const TextInput = ({ onChange, ...props }) => {
     <Input variant='flushed' onChange={onChange} {...props} />
};


TextInput.propTypes = {
    onChange: PropTypes.func,
};