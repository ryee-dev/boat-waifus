import React from 'react';
import BoatCard from '../BoatCard';
import allBoats from '../../data/ships.json';
import Image from 'next/image';
// import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const BoatList = () => {
  const [selectedBoat, setSelectedBoat] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pos="relative" padding={4}>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        pos="fixed"
        top={0}
        left={0}
        zIndex={1}
        sx={{
          height: '100vh',
          width: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <Text casing="uppercase" sx={{ fontSize: '20rem' }}>Boat Waifus</Text>
      </Box>
      <SimpleGrid pos="relative" zIndex={2} columns={4} spacing={10}>
        {
          // @ts-ignore
          allBoats.map((boat: { thumbnail: string; names: { en: string; }; }, index: React.Key | null | undefined) => (
            <BoatCard setSelectedBoat={setSelectedBoat} onOpen={onOpen} key={index} thumbnail={boat.thumbnail} name={boat.names.en} />
          ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {selectedBoat ?
          <ModalContent>
            <ModalHeader>{selectedBoat.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody d="flex" alignItems="center" justifyContent="center">
              <Image src={selectedBoat.src} alt={selectedBoat.name} height={256} width={192} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
            <ModalCloseButton />
          </ModalContent>
          :
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody d="flex" alignItems="center" justifyContent="center">
              <p>Cillum ullamco adipisicing excepteur qui aliquip adipisicing consectetur occaecat veniam laborum sunt sint veniam. Enim voluptate enim qui ullamco excepteur do irure est mollit ullamco adipisicing reprehenderit. Tempor nisi et dolore aute commodo consectetur mollit. Exercitation Lorem consectetur ea eiusmod consectetur eu incididunt qui. Veniam eiusmod fugiat aliquip. Laboris labore culpa ex ullamco duis mollit ut est quis velit nostrud tempor irure. Esse esse laboris aute minim fugiat enim qui enim ullamco labore do incididunt non ex. Veniam ullamco aliquip pariatur sit nostrud aute amet elit sit cupidatat tempor do esse dolor irure. Ipsum incididunt non magna fugiat cupidatat Lorem duis est in ad nulla. Do nulla ut exercitation laborum veniam incididunt dolor qui ut ipsum nostrud magna est eu.</p>

            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        }
      </Modal>
    </Box>
  );
};

export default BoatList;
