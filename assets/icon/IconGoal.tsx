import Svg, { ClipPath, Defs, G, Line, Path, Rect } from 'react-native-svg';

export const IconGoal = ({
  color = '#71717A',
  width = 16,
  height = 16,
}: any) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      d="M0.733276 4.53334C0.733276 3.06667 1.93328 1.86667 3.39994 1.86667H12.5333C13.9999 1.86667 15.1999 3.06667 15.1999 4.53334V13.4667C15.1999 14.0667 14.4666 14.3333 14.0666 13.9333L13.6666 13.4667C13.1333 12.9333 12.4666 12.6 11.6666 12.6H4.39994C3.66661 12.6 2.93328 12.9333 2.46661 13.4667L1.93328 14C1.53328 14.4667 0.799943 14.1333 0.799943 13.5333V8.6"
      stroke="white"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <Path
      d="M2.46655 2.06668L3.19989 12.5333"
      stroke="white"
      strokeMiterlimit="10"
    />
    <Path
      d="M13.5999 2.06668L12.8666 12.5333"
      stroke="white"
      strokeMiterlimit="10"
    />
  </Svg>
);
