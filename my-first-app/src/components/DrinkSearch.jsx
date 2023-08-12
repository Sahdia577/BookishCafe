import PropTypes from 'prop-types';
import { TextInput } from './UI/TextInput';
import { useState } from 'react';
import { DrinkItems } from './DrinkItems';
import { availableDrinks } from '../utils/data';
import { Heading } from '@chakra-ui/react'

export const DrinkSearch = ({ onClick }) => {
    const [searchField, setSearchField] = useState('');

    const handleChange = (event) => {
        setSearchField(event.target.value);
    };

    const matchedDrinks = availableDrinks.filter((drink) => {
        return drink.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    return (
        <>
            <label>
                <Heading fontSize='xl' fontWeight={'600'}>
                Search for your drink:
                </Heading>
            </label>
            <TextInput onChange={handleChange} w={200} mb={8} fontSize={18} />
            <DrinkItems onClick={onClick} drinks={matchedDrinks}  />
        </>       
    );
};

DrinkSearch.propTypes = {
	onClick: PropTypes.func
};