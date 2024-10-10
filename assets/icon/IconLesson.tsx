import Svg, { Path } from 'react-native-svg';

export const IconLesson = ({ color = '#71717A' }: { color?: string }) => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <Path
      d="M2.125 12.98V15C2.125 20 4.125 22 9.125 22H15.125C20.125 22 22.125 20 22.125 15V9C22.125 4 20.125 2 15.125 2H9.125C4.125 2 2.125 4 2.125 9"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M15.875 9H8.375"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M15.875 15H8.375"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
