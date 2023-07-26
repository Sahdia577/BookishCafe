import { TextInput } from './UI/TextInput';
import { useState } from 'react';

export const DrinkSearch = () => {
    const [searchField, setSearchField] = useState();
    return (
        <>
            <label><b>Search for your drink:</b> </label>
            <TextInput />
            <p>{searchField}</p>                     
        </>       
    );
};