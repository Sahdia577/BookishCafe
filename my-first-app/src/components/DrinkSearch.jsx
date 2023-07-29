import { TextInput } from './UI/TextInput';
import { useState } from 'react';
import { DrinkList } from './DrinkList';
import { availableDrinks } from '../utils/data';

export const DrinkSearch = () => {
    const [searchField, setSearchField] = useState('test drink');
    
    return (
        <>
            <label><b>Search for your drink:</b></label>
            <TextInput />
            <DrinkList drinks={availableDrinks} />
        </>       
    );
};