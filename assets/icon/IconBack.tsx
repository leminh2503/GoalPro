import Svg, { Path } from 'react-native-svg';

export const IconBack = ({ color = '#9CA3AF' }: { color?: string }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 20.17C14.9355 20.17 14.8749 20.1477 14.8236 20.0964L8.30358 13.5764C7.43884 12.7117 7.43884 11.2883 8.30358 10.4235L14.8236 3.90355C14.9183 3.80881 15.0817 3.80881 15.1765 3.90355C15.2712 3.99829 15.2712 4.16171 15.1765 4.25644L8.65648 10.7764C7.98121 11.4517 7.98121 12.5483 8.65648 13.2236L15.1765 19.7435C15.2693 19.8364 15.2712 19.9953 15.182 20.0907C15.1163 20.1492 15.0482 20.17 15 20.17Z"
      stroke="white"
    />
  </Svg>
);