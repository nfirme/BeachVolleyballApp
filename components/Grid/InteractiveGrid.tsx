import { useState } from 'react';
import { AspectRatio, Box, Flex } from 'native-base';

export default function InteractiveGrid(props: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handler = (index: number) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }
  };

  const data = Array(9);

  return (
    <AspectRatio ratio={0.8}>
      <Flex
        flex={6}
        wrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box
          borderWidth={2}
          bg="emerald.400"
          size={16}
        />
        <Box
          borderWidth={2}
          bg="emerald.400"
          size={16}
        />
        <Box
          borderWidth={2}
          bg="emerald.400"
          size={16}
        />
      </Flex>
      <Box flex={1} borderWidth={2} bg="primary.100" />;
      <Box bg="pink.100" flex={3} />
    </AspectRatio>
  );
}
