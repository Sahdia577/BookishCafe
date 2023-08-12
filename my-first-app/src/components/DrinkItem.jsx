import PropTypes from 'prop-types'; 
import { Center, Image, Text } from '@chakra-ui/react'

export const DrinkItem = ({ drink, clickFn }) => {
	return (
		<Center onClick={() => clickFn(drink)} cursor='pointer' gap={8} my={3}>
			<Image src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
			<Text fontSize='1.2rem' fontWeight={'400'}>{drink.name}</Text>
		</Center>
	);
};

DrinkItem.propTypes = {
	drink: PropTypes.object,
	clickFn: PropTypes.func
};