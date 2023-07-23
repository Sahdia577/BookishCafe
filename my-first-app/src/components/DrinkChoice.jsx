import PropTypes from 'prop-types';

export const DrinkChoice = ({ drink }) => {
    return (
      <>
            <p>{drink.name}</p>
            <img src={drink.imgUrl} alt={drink.alt} width="100px" height="100px" />
            <p>You drink will be ready in a few minutes!</p>
      </>
    );
};

DrinkChoice.propTypes = {
  drink: PropTypes.object, 

};