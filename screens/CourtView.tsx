import { Box } from 'native-base';
import { screenStyles } from '../styles';
import HookForm from '../components/Form/HookForm';

export default function CourtView() {
  return (
    <Box style={screenStyles.screen}>
      <HookForm />
    </Box>
  );
}
