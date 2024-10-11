import Svg, { Path, Rect } from 'react-native-svg';
import React from 'react';

export const IconRight = ({
  color = '#71717A',
  width = 16,
  height = 16,
}: any) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M10.75 6.6167L12.9333 8.80003C13.575 9.4417 13.575 10.4917 12.9333 11.1334L7.5 16.5584"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 3.3667L8.36667 4.23337"
      stroke="#71717A"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
