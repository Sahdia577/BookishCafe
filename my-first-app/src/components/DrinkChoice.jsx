import PropTypes from 'prop-types';
import { Button } from './UI/Button';
import { Heading, Text, Image, Flex } from '@chakra-ui/react'

export const DrinkChoice = ({ drink, clickFn }) => {
    return (
      <Flex direction='column' alignItems='center' gap={5} mt='6rem'>
        <Heading fontSize='2xl' color='purple.900'>
          Your choice: {drink.name}
        </Heading>
        <Image src={drink.imgUrl} alt={drink.alt} width="100px" height="100px" />
        <Text fontSize='xl' fontWeight={500}>
          You drink will be ready soon!
        </Text>
        <Button clickFn={() => clickFn()} />
      </Flex>
    );
};

DrinkChoice.propTypes = {
  drink: PropTypes.object,
  clickFn: PropTypes.func
};