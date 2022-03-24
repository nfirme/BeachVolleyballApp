import { ScrollView, Button, Divider } from "native-base";
import { sampleTeam } from '../../data'

export default function Teammates() {
  return (
    <ScrollView px={4} py={4} horizontal>
      <Button>Nick Firme</Button>
      <Divider mx={4} orientation="vertical" thickness={3}/>
      {sampleTeam.players.map(p => (
        <Button variant="solid" mr={4}>{p.name}</Button>
      ))}
    </ScrollView>
  )
}