import { useState } from 'react';
import { Heading, Flex } from '@chakra-ui/react'
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';

export const App = () => {
  const greeting = "Welcome to our Bookish Cafe!";
  const [userDrink, setUserDrink] = useState();
      
  return (
    <Flex direction='column' alignItems='center' mt='5em'> 
      {userDrink ? (
        <DrinkChoice drink={userDrink} onClick={setUserDrink} />
      ) : (
          <>
            <Heading my={5} fontSize='3xl' color='purple.800'>
              {greeting}
            </Heading>
            <DrinkSearch onClick={setUserDrink} />
          </>
      )}
    </Flex>
  );
};

