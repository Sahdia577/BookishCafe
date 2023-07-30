import { DrinkItem } from './DrinkItem';
import PropTypes from 'prop-types'; 

export const DrinkList = ({ drinks, clickFn }) => {
    return (
      <>
        {drinks.map((drink) => (
          <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
        ))}
      </>
    );
  };

DrinkList.propTypes = {
  drinks: PropTypes.object,
  clickFn: PropTypes.func
};