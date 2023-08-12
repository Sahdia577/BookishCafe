import PropTypes from 'prop-types';
import { Input } from '@chakra-ui/react'

export const TextInput = ({ changeFn, ...props }) => {
    return <Input onChange={changeFn} variant='flushed' {...props} />
};


TextInput.propTypes = {
    changeFn: PropTypes.func,
};