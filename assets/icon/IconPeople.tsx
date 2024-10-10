import Svg, { Line, Path } from 'react-native-svg';

export const IconPeople = ({
  color = 'white',
  width = 16,
  height = 16,
}: any) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
      d="M10.0133 2.00668C9.45329 1.58001 8.75996 1.33334 7.99996 1.33334C6.15996 1.33334 4.66663 2.82667 4.66663 4.66667C4.66663 6.50667 6.15996 8 7.99996 8C9.83996 8 11.3333 6.50667 11.3333 4.66667"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.7266 14.6667C13.7266 12.0867 11.16 10 7.99998 10C4.83998 10 2.27332 12.0867 2.27332 14.6667"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
