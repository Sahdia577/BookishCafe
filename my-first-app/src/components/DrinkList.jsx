import { DrinkItem } from './DrinkItem';
import PropTypes from 'prop-types'; 

export const DrinkList = ({ drinks }) => {
    return (
      <>
        {drinks.map((drink) => (
          <DrinkItem key={drink.id} drink={drink} />
        ))}
      </>
    );
  };

DrinkList.propTypes = {
    drinks: PropTypes.object     
};