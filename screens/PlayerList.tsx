import { Box, Text, FlatList, Spacer, HStack, Avatar } from 'native-base';
import { useEffect, useState } from 'react';
import { sampleTeam } from '../data';

export default function PlayerList({ route, navigation }: any) {
  const { schoolId } = route.params || 1;

  const [players, setPlayers] = useState(sampleTeam.players);

  useEffect(() => {
    console.log('Fetch all players from schoolId: ' + schoolId);
  }, []);

  return (
    <Box>
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack
              space={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <Text color="coolGray.800" bold>
                {item.name}
              </Text>
              <Spacer />
              <Text color="coolGray.800" alignSelf="flex-start">
                {item.school}
              </Text>
            </HStack>
          </Box>
        )}
      />
    </Box>
  );
}
