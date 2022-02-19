import { View, StyleSheet, Text } from 'react-native';

export default function CourtGrid() {
  return (
    <View style={styles.container}>
      <Row>
        <Cell />
        <Cell />
        <Cell />
      </Row>
      <Row>
        <Cell />
        <Cell />
        <Cell />
      </Row>
      <Row>
        <Cell />
        <Cell />
        <Cell />
      </Row>
    </View>
  );
}

type GridProps = {
  children?: JSX.Element | JSX.Element[];
};

const Row = ({ children }: GridProps) => {
  return <View style={styles.row}>{children}</View>;
};

const Cell = ({ children }: GridProps) => {
  return <View style={styles.col}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    backgroundColor: 'yellow',
    borderWidth: 2,
    height: 50
  },
  container: {
    width: '100%',
    height: '50%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ff0f0f',
    borderWidth: 2,
    borderColor: 'red'
  },
});
