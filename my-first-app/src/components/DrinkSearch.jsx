import { TextInput } from './UI/TextInput';
import { useState } from 'react';
import { DrinkList } from './DrinkList';
import { availableDrinks } from '../utils/data';
import PropTypes from 'prop-types';

export const DrinkSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState('');

    const handleChange = (event) => {
        setSearchField(event.target.value);
    };

    const matchedDrinks = availableDrinks.filter((drink) => {
        return drink.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    return (
        <>
            <label><h2>Search for your drink:</h2></label>
            <TextInput changeFn={handleChange} />
            <DrinkList drinks={matchedDrinks} clickFn={clickFn} />
        </>       
    );
};

DrinkSearch.propTypes = {
	clickFn: PropTypes.func
};