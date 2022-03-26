import { ScrollView, Button, Divider } from "native-base";
import { sampleTeam } from '../../data'

export default function Teammates() {
  return (
    <ScrollView px={4} py={4} horizontal>
      <Button>Nick Firme</Button>
      <Divider mx={4} orientation="vertical" thickness={3}/>
      {sampleTeam.players.map((p, i) => (
        <Button variant="solid" mr={4} key={i}>{p.name}</Button>
      ))}
    </ScrollView>
  )
}