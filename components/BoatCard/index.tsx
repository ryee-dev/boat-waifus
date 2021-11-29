import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import { Box, Container, Text } from '@chakra-ui/react';

const wrapper = css`
  position: relative;
`;

const overlay = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 192px;
  height: 256px;
  opacity: 0;
  background-color: black;
  transition: all 0.2s ease-in-out;
  color: white;

  &:hover {
    opacity: 0.4;
  }
`;

interface CardProps {
  thumbnail: string;
  name: string;
}

const BoatCard: React.FC<CardProps> = ({ thumbnail, name }) => {
  return (
    <Container css={wrapper} mx={1}>
      <Image src={thumbnail} alt={name} height={256} width={192} />
      <Box css={overlay}>
        <Text>{name}</Text>
      </Box>
    </Container>
  );
};

export default BoatCard;
