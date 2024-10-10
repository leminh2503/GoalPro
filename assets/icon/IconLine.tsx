import Svg, { Line, Path } from 'react-native-svg';

export const IconLine = ({ color = '#9CA3AF' }: { color?: string }) => (
  <Svg width="105" height="1" viewBox="0 0 105 1" fill="none">
    <Line y1="0.75" x2="105" y2="0.75" stroke="#71717A" strokeWidth="0.5" />
  </Svg>
);
