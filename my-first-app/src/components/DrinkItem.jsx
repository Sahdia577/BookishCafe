import PropTypes from 'prop-types'; 
import { Center, Image, Text, WrapItem } from '@chakra-ui/react'

export const DrinkItem = ({ drink, onClick }) => {
	return (
		<WrapItem>
		<Center onClick={() => onClick(drink)} cursor='pointer' gap={8} my={3}>
				<Image
					src={drink.imgUrl}
					width={50}
					height={50}
					alt={drink.alt}
				/>
			<Text fontSize='1.2rem' fontWeight={'400'}>{drink.name}</Text>
			</Center>
		</WrapItem>
	);
};

DrinkItem.propTypes = {
	drink: PropTypes.object,
	onClick: PropTypes.func
};