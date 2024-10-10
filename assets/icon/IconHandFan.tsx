import Svg, { ClipPath, Defs, G, Line, Path, Rect } from 'react-native-svg';

export const IconHandFan = ({
  color = '#71717A',
  width = 16,
  height = 16,
}: any) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_4_630)">
      <Path
        d="M3.4667 6.06666L5.93336 2.46666L6.4667 1.66666C7.20003 0.666656 8.6667 0.666656 9.40003 1.66666L9.93336 2.46666L12.4 6.06666L14.4667 9.06666C15.0667 9.86666 15.1334 11 14.6 11.8667C13.5334 13.7333 10.9334 15.0667 7.8667 15.0667C4.80003 15.0667 2.20003 13.7333 1.13336 11.8667C0.666697 11 0.733364 9.93332 1.2667 9.06666"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M10 2.53334C9.53333 3.13334 8.8 3.46667 8 3.46667C7.2 3.46667 6.46667 3.13334 6 2.53334L6.53333 1.73334C7.26667 0.733337 8.73333 0.733337 9.46667 1.73334L10 2.53334Z"
        stroke="white"
        strokeMiterlimit="10"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_630">
        <Rect width="16" height="16" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
