import { Box, FlatList, Text, Avatar, HStack, Spacer } from 'native-base';
import { useState, useEffect } from 'react';

import { PressableRow } from '../components/Shared';
import { schools } from '../data';
import { FALLBACK_IMG_URL } from '../utils';

export default function SchoolList({ navigation }: any) {
  const [schoolList, setSchoolList] = useState(schools);

  useEffect(() => {
    console.log('Fetch all schools');
  }, []);

  return (
    <Box>
      <FlatList
        data={schools}
        renderItem={({ item }) => (
          <PressableRow
            onPress={() =>
              navigation.navigate('Players', { schoolId: item.id })
            }
            bg="coolGray"
            borderBottomWidth="1"
            borderColor="coolGray.200"
            px={4}
            py={2}
          >
            <HStack
              space={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <Avatar
                size="96px"
                source={{
                  uri: item.avatarUrl || FALLBACK_IMG_URL,
                }}
              />
              <Text color="coolGray.800" fontSize="xl">
                {item.name}
              </Text>
              <Spacer />
              <Text color="coolGray.800">{item.abbrev}</Text>
            </HStack>
          </PressableRow>
        )}
      />
    </Box>
  );
}
