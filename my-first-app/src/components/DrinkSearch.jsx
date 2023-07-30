import { TextInput } from './UI/TextInput';
import { useState } from 'react';
import { DrinkList } from './DrinkList';
import { availableDrinks } from '../utils/data';
import PropTypes from 'prop-types';

export const DrinkSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState('test drink');
    
    return (
        <>
            <label><h2>Search for your drink:</h2></label>
            <TextInput />
            <DrinkList drinks={availableDrinks} clickFn={clickFn} />
        </>       
    );
};

DrinkSearch.propTypes = {
	clickFn: PropTypes.func
};