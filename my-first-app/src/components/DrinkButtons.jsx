import './DrinkButtons.css'

export const DrinkButtons = () => {
    return (
        <>
            <h1>Would you like tea or coffee?</h1>
            <div className="button-group">
                <button className="button">Tea</button>
                <button className="button">Coffee</button>
            </div>
        </>
    );
};