import Svg, { Line, Path } from 'react-native-svg';

export const IconCamera = ({ color = '#9CA3AF' }: { color?: string }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path
      d="M2.66666 10.3866C2.66666 6.17332 4.06666 4.77332 8.28 4.77332H16.7067C20.92 4.77332 22.32 6.17332 22.32 10.3866V21.6133C22.32 25.8266 20.92 27.2266 16.7067 27.2266H8.28C4.06666 27.2266 2.66666 24.4266 2.66666 21.6133V16.16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M26.0267 22.8L22.32 20.2V11.7867L26.0267 9.18669C27.84 7.92002 29.3333 8.69336 29.3333 10.92V21.08C29.3333 23.3067 27.84 24.08 26.0267 22.8Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.3333 12.6667C17.3333 11.56 16.44 10.6667 15.3333 10.6667C14.2267 10.6667 13.3333 11.56 13.3333 12.6667C13.3333 13.7733 14.2267 14.6667 15.3333 14.6667"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
