import React, { useState } from 'react';
import { Box, Button, Text, Flex } from 'native-base';
import ButtonGroup from './ButtonGroup';
import { InteractiveGrid, CourtGrid } from '../Grid';

export default function HookForm() {
  const offenseElements = ['Hit', 'Shot'];
  const defenseElements = ['Block', 'Pull'];
  const blockElements = ['Left', 'Center', 'Right'];

  const [offense, setOffense] = useState(0);
  const [defense, setDefense] = useState(0);
  const [block, setBlock] = useState(0);
  const [hitLocation, setHitLocation] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const handleSubmit = () => {
    const formValues = {
      offenseType: offenseElements[offense].toLowerCase(),
      defenseType: defenseElements[defense].toLowerCase(),
      blockLocation: blockElements[block].toLowerCase(),
      hitLocation: hitLocation,
    };

    console.log(formValues);
    setDisplayText(
      `${formValues.offenseType} | ${formValues.defenseType} | ${formValues.blockLocation} | ${formValues.hitLocation}`
    );
  };

  return (
    <Box display="flex" flexDirection="row" height="80%" borderWidth={2}>
      <Flex alignItems="center" justifyContent="center" flex={2} px={1}>
        {/* <InteractiveGrid /> */}
        <CourtGrid handleClick={setHitLocation}/>
      </Flex>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <ButtonGroup
          value={offense}
          elements={offenseElements}
          colorScheme="green"
          handleClick={(value: React.SetStateAction<number>) =>
            setOffense(value)
          }
        />
        <ButtonGroup
          value={defense}
          elements={defenseElements}
          colorScheme="green"
          handleClick={(value: React.SetStateAction<number>) =>
            setDefense(value)
          }
        />
        <ButtonGroup
          value={block}
          elements={blockElements}
          colorScheme="green"
          handleClick={(value: React.SetStateAction<number>) => setBlock(value)}
        />
        <Button variant="outline" colorScheme="green" onPress={handleSubmit}>
          Submit
        </Button>
        <Text>{displayText}</Text>
      </Box>
    </Box>
  );
}
