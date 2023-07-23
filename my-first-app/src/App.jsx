import './App.css'
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';
import { tea, coffee } from './utils/data';

export const App = () => {
  const greeting = "Welcome to our Bookish Cafe!";
  const userDrink = null;
  
  return (
    <div className="App"> 
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
          <>
            <h1>{greeting}</h1>
            <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
          </>
      )}
    </div>
  );
};

