import './DrinkButtons.css'
import { Button } from './ui/Button';

export const DrinkButtons = ( { drinkOne, drinkTwo } ) => {
    return (
        <>
            <h1>Would you like tea or coffee?</h1>
            <div className="button-group">
                <Button text={drinkOne} />
                <Button text={drinkTwo} />
            </div>
        </>
    );
};