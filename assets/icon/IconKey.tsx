import Svg, { Path, Rect } from 'react-native-svg';
import React from 'react';

export const IconKey = ({
  color = '#71717A',
  width = 16,
  height = 16,
}: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M12.99 2.15021C15.37 1.69021 17.94 2.38021 19.79 4.22021C22.74 7.17021 22.74 11.9802 19.79 14.9202C17.73 16.9702 14.78 17.6002 12.19 16.7902L7.48 21.4902C7.14 21.8402 6.47 22.0502 5.99 21.9802L3.81 21.6802C3.09 21.5802 2.42 20.9002 2.31 20.1802L2.01 18.0002C1.94 17.5202 2.17 16.8502 2.5 16.5102L3.62 15.3902L7.19 11.8202C6.39 9.22021 7.01 6.27021 9.07 4.22021"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.89 17.4902L9.19 19.7902"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
