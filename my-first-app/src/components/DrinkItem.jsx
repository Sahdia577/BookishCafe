import './DrinkItem.css';
import PropTypes from 'prop-types'; 

export const DrinkItem = ({ drink, clickFn }) => {
	return (
		<button className="drink-item" onClick={() => clickFn(drink)}>
			<img src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
			<p>{drink.name}</p>
		</button>
	);
};

DrinkItem.propTypes = {
	drink: PropTypes.object,
	clickFn: PropTypes.func
};