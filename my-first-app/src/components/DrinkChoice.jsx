import PropTypes from 'prop-types';
import { Button } from './UI/Button';
import {
  Heading,
  Text,
  Image,
  Flex,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export const DrinkChoice = ({ drink, clickFn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <Center flexDir={'column'} gap={4} mt='6em'>
        <Heading fontSize='2xl' color='pink.800'>
          Your choice: {drink.name}
        </Heading>
        <Image
          src={drink.imgUrl}
          alt={drink.alt}
          width="100px"
          height="100px"
        />
        <Text fontSize='xl' fontWeight={500} color='pink.900'>
          You drink will be ready soon!
        </Text>
        <Flex gap={2} >
          <Button
            onClick={onOpen}
            mr={4} w={200}
            bg='green.600'
            color='white'
          >
            Confirm order
          </Button>
          <Button
            onClick={() => clickFn()}
            variant='ghost'
            w={200}
            color='green'
          >
            Change selection
            </Button>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm your order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text color='pink.900'>1x {drink.name}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={onClose}>
              Confirm
            </Button>
              <Button variant='ghost'>
                Cancel
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Center>
    );
};




DrinkChoice.propTypes = {
  drink: PropTypes.object,
  clickFn: PropTypes.func
};