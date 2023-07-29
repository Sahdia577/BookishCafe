import { useState } from 'react';
import './App.css';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';
import { tea, coffee } from './utils/data';

export const App = () => {
  const greeting = "Welcome to our Bookish Cafe!";
  const [userDrink, setUserDrink] = useState();
      
  return (
    <div className="App"> 
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
          <>
            <h1>{greeting}</h1>
            <DrinkSearch />
          </>
      )}
    </div>
  );
};

