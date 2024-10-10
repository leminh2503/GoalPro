import Svg, { Path } from 'react-native-svg';

export const IconHome = ({ color = '#9CA3AF' }: { color?: string }) => (
  <Svg width="75" height="50" viewBox="0 0 75 50" fill="color">
    <Path
      d="M28.66 35.24C28.9 36.66 30.26 37.81 31.7 37.81H42.9C44.33 37.81 45.7 36.65 45.94 35.24L47.27 27.28C47.43 26.3 46.93 24.99 46.16 24.37L39.23 18.83C38.16 17.97 36.43 17.97 35.37 18.82L28.44 24.37C27.66 24.99 27.16 26.3 27.33 27.28L28.01 31.37"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M37.3 26.5C35.92 26.5 34.8 27.62 34.8 29C34.8 30.38 35.92 31.5 37.3 31.5C38.68 31.5 39.8 30.38 39.8 29"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
