import { Box, FlatList, Text, Avatar, HStack, Spacer } from 'native-base';
import { TouchableHighlight } from 'react-native';
import { useState, useEffect } from 'react';
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
          <TouchableHighlight
            onPress={() =>
              navigation.navigate('Players', { schoolId: item.id })
            }
          >
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
                  size="96px"
                  source={{
                    uri: item.avatarUrl || FALLBACK_IMG_URL,
                  }}
                />
                <Text color="coolGray.800" bold>
                  {item.name}
                </Text>
                <Spacer />
                <Text color="coolGray.800" alignSelf="flex-start">
                  {item.abbrev}
                </Text>
              </HStack>
            </Box>
          </TouchableHighlight>
        )}
      />
    </Box>
  );
}
