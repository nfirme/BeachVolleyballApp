import { Svg, G, Circle } from 'react-native-svg';

export default function Scatterplot({ size, data }: any) {
  return (
    <Svg width={size.width} height={size.height}>
      <G>
        {data.length > 0 &&
          data.map((r: any, i: number) => (
            <Circle
              cx={(r.x * size.width) / 100}
              cy={(r.y * size.height) / 100}
              r={12}
              fill="rgba(25, 158, 199, .7)"
              key={i}
              stroke="black"
              stroke-width="1"
            />
          ))}
      </G>
    </Svg>
  );
}
