import { useEffect, cloneElement } from 'react';
import { AspectRatio, Flex, Box } from 'native-base';
import { useComponentSize } from '../../utils';

type CourtLayoutProps = {
  square: any;
  net: any;
  approach: any;
};

export default function CourtLayout({
  square,
  net,
  approach,
}: CourtLayoutProps) {
  const [size, onLayout] = useComponentSize();

  return (
    <Flex align="center" height="full" py={8} px={4}>
      <AspectRatio ratio={1} borderWidth={2} width="95%" bg="yellow.200">
        {size && cloneElement(square, { size: size, onLayout: onLayout })}
      </AspectRatio>
      {net}
      {approach}
    </Flex>
  );
}
