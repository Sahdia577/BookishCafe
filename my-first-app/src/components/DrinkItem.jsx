import './DrinkItem.css';
import PropTypes from 'prop-types'; 

export const DrinkItem = ({ drink }) => {
	return (
		<div className="drink-item">
			<img src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
			<p>{drink.name}</p>
		</div>
	);
};

DrinkItem.propTypes = {
    drink: PropTypes.object
};