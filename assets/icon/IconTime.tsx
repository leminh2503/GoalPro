import Svg, { Line, Path } from 'react-native-svg';

export const IconTime = ({ color = '#9CA3AF' }: { color?: string }) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 5.33334V8.66667"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 1.33334H10"
      stroke="white"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.33329 5.33333C2.59996 6.30667 2.16663 7.52 2.16663 8.83333C2.16663 12.0533 4.77996 14.6667 7.99996 14.6667C11.22 14.6667 13.8333 12.0533 13.8333 8.83333C13.8333 5.61333 11.22 3 7.99996 3C7.15996 3 6.36663 3.17333 5.64663 3.49333"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
