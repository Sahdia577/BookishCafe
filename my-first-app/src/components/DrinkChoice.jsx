import PropTypes from 'prop-types';
import { Button } from './UI/Button';

export const DrinkChoice = ({ drink, clickFn }) => {
    return (
      <>
        <h2>Your choice: {drink.name}</h2>
        <img src={drink.imgUrl} alt={drink.alt} width="100px" height="100px" />
        <h3>You drink will be ready in a few minutes!</h3>
        <Button text={'Change selection'}  clickFn={() => clickFn()} />        
      </>
    );
};

DrinkChoice.propTypes = {
  drink: PropTypes.object,
  clickFn: PropTypes.func
};