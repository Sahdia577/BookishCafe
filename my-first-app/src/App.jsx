import './App.css'
import { DrinkButtons } from './components/DrinkButtons';
import { tea, coffee } from './utils/data';

export const App = () => {
  const greeting = "Welcome to our Bookish Cafe!";
  
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <DrinkButtons drinkOne={tea} drinkTwo={coffee} />
    </div>
  );
};

