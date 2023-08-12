import PropTypes from 'prop-types'; 
import { Flex } from '@chakra-ui/react';
import { DrinkItem } from './DrinkItem';

export const DrinkItems = ({ drinks, onClick }) => {
	return (
		<Flex
			gap={16}
			w={['full', '50%']}
			flexWrap="wrap"
			flexDir={['column', 'row']}
			justify="center"
			alignItems="center"
		>
			{drinks.map((drink) => (
				<DrinkItem key={drink.id} drink={drink} onClick={onClick} />
			))}
		</Flex>
	);
};


DrinkItems.propTypes = {
	drinks: PropTypes.object,
	onClick: PropTypes.func
};