import './DrinkButtons.css'

export const DrinkButtons = ( { drinkOne, drinkTwo } ) => {
    return (
        <>
            <h1>Would you like tea or coffee?</h1>
            <div className="button-group">
                <button className="button">{drinkOne}</button>
                <button className="button">{drinkTwo}</button>
            </div>
        </>
    );
};