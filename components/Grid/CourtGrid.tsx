import { AspectRatio, Box, useMediaQuery, HStack, Flex, Center, Text} from 'native-base';
import React from 'react';
import Cell from './Cell'

type RowProps = {
  flex?: number;
  data: string[]
};

  const Row = (props: RowProps) => (
    <HStack {...props}>
      {props.data.map((item, index) => (
        <Box
          key={index}
          flex={1}
          bg="amber.300"
          borderWidth={2}
        >
          <Text>{item}</Text>
        </Box>
      ))}
    </HStack>
  );

  const Net = () => (
    <Center flex={1} borderWidth={2} bg="primary.100">
      Nett
    </Center>
  );

  const Court = () => (
    <Flex>
      <Row flex={2} data={['1', '2', '3']} />
      <Row flex={2} data={['4', '5', '6']} />
      <Row flex={2} data={['7', '8', '9']} />
      <Net />
      <Row flex={3} data={['Left', 'Center', 'Right']} />
    </Flex>
  );

export default function CourtGrid() {
  const [isLandScape, isPortrait] = useMediaQuery([
    {
      orientation: 'landscape',
    },
    {
      orientation: 'portrait',
    },
  ]);



  return isLandScape ? (
    <AspectRatio height="100%" ratio={0.8}>
      <Court />
    </AspectRatio>
  ) : (
    <AspectRatio width="100%" ratio={0.8}>
      <Court />
    </AspectRatio>
  );
}
