import PropTypes from 'prop-types';
import { Input } from '@chakra-ui/react'

export const TextInput = ({ onChange, ...props }) => {
     <Input onChange={onChange} variant='flushed' {...props} />
};


TextInput.propTypes = {
    onChange: PropTypes.func,
};