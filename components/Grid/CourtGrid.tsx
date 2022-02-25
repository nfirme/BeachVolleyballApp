import { AspectRatio, Box, useMediaQuery, HStack, Flex } from 'native-base';
import React from 'react';
import Cell from './Cell'

type CourtGridProps = {
  handleClick: any;
};

type RowProps = {
  flex?: number;
  rowIndex?: number;
};

const Row = (props: RowProps) => (
  <HStack {...props}>
    <Box flex={1} bg="primary.300" borderWidth={2} />
    <Box flex={1} bg="primary.300" borderWidth={2} />
    <Box flex={1} bg="primary.300" borderWidth={2}/>
  </HStack>
);

const Net = () => <Box flex={1} borderWidth={2} bg="primary.100" />;

export default function CourtGrid({ handleClick }: CourtGridProps) {
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
      <Flex>
        <Row flex={2} />
        <Row flex={2} />
        <Row flex={2} />
        <Net />
        <Row flex={3} />
      </Flex>
    </AspectRatio>
  ) : (
    <AspectRatio width="100%" ratio={0.8}>
      <Flex bg="amber.200">
        <Row flex={2} />
        <Row flex={2} />
        <Row flex={2} />
        <Net />
        <Row flex={3} />
      </Flex>
    </AspectRatio>
  );
}
