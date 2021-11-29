import React from 'react';
import BoatCard from '../BoatCard';
import allBoats from '../../data/ships.json';
import { SimpleGrid } from '@chakra-ui/react';

const BoatList = () => {
  // const client = new AzurAPI();
  // const allBoats = client.ships.getAll('USS');

  return (
    <div>
      <h1>Boat List</h1>
      <SimpleGrid columns={4} spacing={10}>
        {allBoats.map((boat, index) => (
          <BoatCard key={index} thumbnail={boat.thumbnail} name={boat.names.en} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default BoatList;
